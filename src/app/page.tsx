import { Hero } from "@/components/Hero";
import { HubBody } from "@/components/HubBody";
import { VisionSection } from "@/components/VisionSection";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <div className={styles.page}>
      <main>
        <Hero />
        <HubBody />
        <VisionSection />
      </main>
    </div>
  );
}
