import type { Metadata } from "next";
import { InSiteHistoryTracker } from "@/components/InSiteHistoryTracker";
import { ScrollToTop } from "@/components/ScrollToTop";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import "./globals.css";

export const metadata: Metadata = {
  title: "nywf64.com — 1964/65 New York World’s Fair",
  description:
    "A complete retrospective on the 1964/1965 New York World’s Fair and its contributions to the cultural history of mid-20th Century America.",
  openGraph: {
    title: "nywf64.com",
    description:
      "A complete retrospective on the 1964/1965 New York World’s Fair and its contributions to the cultural history of mid-20th Century America.",
    siteName: "nywf64.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <div className="pageShell">
          <InSiteHistoryTracker />
          <ScrollToTop />
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
