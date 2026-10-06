import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ConinsCinemaSongPage } from "@/components/ConinsCinemaSongPage";
import { getConins10Song } from "@/data/conins10Songs";

const SONG = getConins10Song(8)!;

export const metadata: Metadata = {
  title: `Cinema '76: ${SONG.title} — Continental Insurance — nywf64.com`,
  description: `Cinema '76 illustrated transcript with audio — ${SONG.title} — Continental Insurance pavilion at the 1964/1965 New York World’s Fair on nywf64.com.`,
};

/**
 * Continental Insurance — Cinema '76 song page (8).
 * Body from legacy conins10.8.html.
 */
export default function Conins10Song08Page() {
  const song = getConins10Song(8);
  if (!song) notFound();
  return <ConinsCinemaSongPage song={song} />;
}
