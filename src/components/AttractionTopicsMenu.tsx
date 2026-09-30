"use client";

import { useEffect, useId, type ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./AttractionTopicsMenu.module.css";

export type AttractionTopicPart = {
  text: string;
  italic?: boolean;
};

export type AttractionTopic = {
  /** Plain-text label (keys / accessibility fallback). */
  label: string;
  href: string;
  /** Optional rich label with italic segments (show/article titles). */
  parts?: AttractionTopicPart[];
};

export type AttractionTopicsMenuProps = {
  /** Topic rows for this attraction — customize per page. */
  topics: AttractionTopic[];
  open: boolean;
  onClose: () => void;
  /** Header label; defaults to mockup copy. */
  title?: string;
  /** Optional id for aria-controls from the nav bar. */
  id?: string;
};

function TopicLabel({ topic }: { topic: AttractionTopic }): ReactNode {
  if (!topic.parts?.length) return topic.label;
  return topic.parts.map((part, index) =>
    part.italic ? (
      <em key={index} className={styles.italic}>
        {part.text}
      </em>
    ) : (
      <span key={index}>{part.text}</span>
    ),
  );
}

/**
 * Nav menu — prototype model for attraction pages (not the site hamburger).
 * User term: **nav menu**. Slides in from the left over a dimmed backdrop.
 * Opens on click/tap of the nav bar control; close via X, backdrop, Escape,
 * or a topic link.
 */
export function AttractionTopicsMenu({
  topics,
  open,
  onClose,
  title = "Explore This Attraction",
  id,
}: AttractionTopicsMenuProps) {
  const generatedId = useId();
  const menuId = id ?? generatedId;
  const pathname = usePathname() || "/";

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  return (
    <>
      {open ? (
        <button
          type="button"
          className={styles.backdrop}
          aria-label="Close nav menu"
          onClick={onClose}
        />
      ) : null}

      <nav
        id={menuId}
        className={styles.drawer}
        data-open={open || undefined}
        aria-label={title}
        aria-hidden={!open}
        inert={!open ? true : undefined}
      >
        <div className={styles.panel}>
          <div className={styles.header}>
            <span className={styles.headerTitle}>{title}</span>
            <button
              type="button"
              className={styles.close}
              aria-label="Close"
              tabIndex={open ? 0 : -1}
              onClick={onClose}
            >
              <span className={styles.closeGlyph} aria-hidden="true">
                ×
              </span>
            </button>
          </div>
          <ul className={styles.list}>
            {topics.map((topic) => {
              const active =
                pathname === topic.href ||
                pathname.startsWith(`${topic.href}/`);
              return (
                <li key={`${topic.href}-${topic.label}`} className={styles.item}>
                  <Link
                    href={topic.href}
                    className={
                      active ? `${styles.row} ${styles.rowActive}` : styles.row
                    }
                    aria-current={active ? "page" : undefined}
                    tabIndex={open ? 0 : -1}
                    onClick={onClose}
                  >
                    <TopicLabel topic={topic} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
}
