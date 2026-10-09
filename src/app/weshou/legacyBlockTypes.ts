/** Shared block model for generated Westinghouse legacy body content. */

export type WeshouBlock =
  | { type: "p"; text: string }
  | { type: "strong"; text: string }
  | { type: "em"; text: string }
  | { type: "h2"; text: string; variant?: "red" | "italic" }
  | { type: "dt"; text: string }
  | { type: "dd"; text: string }
  | { type: "listRow"; num?: string; text: string }
  | { type: "listRow3"; num: string; mid: string; rest: string }
  | { type: "note"; text: string }
  | { type: "source"; text: string }
  | { type: "hr" }
  | {
      type: "figure";
      src: string;
      width: number;
      height: number;
      alt: string;
      border?: boolean;
      caption?: string;
      captionEm?: boolean;
    }
  | { type: "link"; href: string; text: string }
  | { type: "blockquote"; text: string }
  | {
      type: "twoFigures";
      figures: Array<{
        src: string;
        width: number;
        height: number;
        alt: string;
        caption?: string;
      }>;
    };
