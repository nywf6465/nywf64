"use client";

import {
  useCallback,
  useRef,
  useState,
  type PointerEvent,
  type ReactNode,
} from "react";

const DRAG_THRESHOLD_PX = 5;

type Props = {
  className?: string;
  draggingClassName?: string;
  "aria-label"?: string;
  children: ReactNode;
};

/**
 * Scroll container with desktop drag-to-pan.
 * Touch keeps native two-finger / touch scrolling so mobile hotspots stay easy to tap.
 * Small movements still count as clicks so image-map `<area>` links work.
 */
export function InteractiveMapScroller({
  className,
  draggingClassName,
  "aria-label": ariaLabel,
  children,
}: Props) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef({
    active: false,
    dragging: false,
    pointerId: -1,
    startX: 0,
    startY: 0,
    scrollLeft: 0,
    scrollTop: 0,
  });
  const [dragging, setDragging] = useState(false);

  const endDrag = useCallback((e: PointerEvent<HTMLDivElement>) => {
    const state = dragRef.current;
    if (!state.active || e.pointerId !== state.pointerId) return;

    const el = scrollerRef.current;
    const wasDragging = state.dragging;
    state.active = false;
    state.dragging = false;
    state.pointerId = -1;
    setDragging(false);

    if (!el) return;

    if (wasDragging) {
      try {
        el.releasePointerCapture(e.pointerId);
      } catch {
        /* already released */
      }
      // Suppress the click that browsers fire after a drag (would hit an <area>).
      const suppressClick = (ev: Event) => {
        ev.preventDefault();
        ev.stopPropagation();
        el.removeEventListener("click", suppressClick, true);
      };
      el.addEventListener("click", suppressClick, true);
      window.setTimeout(() => {
        el.removeEventListener("click", suppressClick, true);
      }, 0);
    }
  }, []);

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    // Leave touch to native overflow scrolling.
    if (e.pointerType === "touch") return;
    if (e.button !== 0) return;
    const el = scrollerRef.current;
    if (!el) return;

    dragRef.current = {
      active: true,
      dragging: false,
      pointerId: e.pointerId,
      startX: e.clientX,
      startY: e.clientY,
      scrollLeft: el.scrollLeft,
      scrollTop: el.scrollTop,
    };
  };

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    const state = dragRef.current;
    if (!state.active || e.pointerId !== state.pointerId) return;
    const el = scrollerRef.current;
    if (!el) return;

    const dx = e.clientX - state.startX;
    const dy = e.clientY - state.startY;

    if (!state.dragging) {
      if (Math.hypot(dx, dy) < DRAG_THRESHOLD_PX) return;
      state.dragging = true;
      setDragging(true);
      el.setPointerCapture(e.pointerId);
    }

    el.scrollLeft = state.scrollLeft - dx;
    el.scrollTop = state.scrollTop - dy;
    e.preventDefault();
  };

  const classNames = [className, dragging ? draggingClassName : null]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      ref={scrollerRef}
      className={classNames}
      role="region"
      aria-label={ariaLabel}
      data-dragging={dragging ? "true" : undefined}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
    >
      {children}
    </div>
  );
}
