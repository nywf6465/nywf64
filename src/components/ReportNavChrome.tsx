"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { REPORT_MENU_TOPICS } from "@/data/reportMenu";

/**
 * World’s Fair Progress Reports menu chrome — nav bar (“EXPLORE THE REPORTS”)
 * + report topic cards. Use on every page whose route begins with `report`.
 */
export function ReportNavChrome() {
  return (
    <AttractionNavChrome
      topics={REPORT_MENU_TOPICS}
      exploreLabel="EXPLORE THE REPORTS"
      menuTitle="Explore The Reports"
    />
  );
}
