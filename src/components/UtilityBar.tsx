import styles from "./UtilityBar.module.css";

const items = [
  {
    href: "#search",
    label: "Search the Website",
    icon: "search",
  },
  {
    href: "#contact",
    label: "Contact",
    icon: "mail",
  },
  {
    href: "/about",
    label: "About nywf64.com",
    icon: "globe",
  },
  {
    href: "#links",
    label: "Links",
    icon: "link",
  },
] as const;

export function UtilityBar() {
  return (
    <nav className={styles.bar} aria-label="Site utilities">
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.href} className={styles.item}>
            <a className={styles.link} href={item.href}>
              <Icon name={item.icon} />
              <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
      <div id="search" className={styles.hook} hidden aria-hidden="true" />
      <div id="contact" className={styles.hook} hidden aria-hidden="true" />
      <div id="links" className={styles.hook} hidden aria-hidden="true" />
    </nav>
  );
}

function Icon({ name }: { name: (typeof items)[number]["icon"] }) {
  const common = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    "aria-hidden": true as const,
  };

  if (name === "search") {
    return (
      <svg {...common}>
        <circle cx="11" cy="11" r="7" />
        <path d="M20 20 L16.5 16.5" strokeLinecap="round" />
      </svg>
    );
  }
  if (name === "mail") {
    return (
      <svg {...common}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7 L12 13 L21 7" />
      </svg>
    );
  }
  if (name === "globe") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12 H21" />
        <path d="M12 3 C15 7, 15 17, 12 21 C9 17, 9 7, 12 3 Z" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M10 13a5 5 0 0 0 7.1.1l2-2a5 5 0 0 0-7.1-7.1l-1.1 1.1" />
      <path d="M14 11a5 5 0 0 0-7.1-.1l-2 2a5 5 0 0 0 7.1 7.1l1.1-1.1" />
    </svg>
  );
}
