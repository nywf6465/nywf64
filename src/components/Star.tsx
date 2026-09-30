type StarProps = {
  className?: string;
  color?: string;
  size?: number;
};

/** Four-pointed sparkle star from the ChatGPT mockup */
export function Star({ className, color = "currentColor", size = 14 }: StarProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill={color}
        d="M12 0 L13.35 9.15 L24 12 L13.35 14.85 L12 24 L10.65 14.85 L0 12 L10.65 9.15 Z"
      />
    </svg>
  );
}
