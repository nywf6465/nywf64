import { Hero } from "@/components/Hero";
import { HomepageFairBanner } from "@/components/HomepageFairBanner";
import { HubBody } from "@/components/HubBody";
import { VisionSection } from "@/components/VisionSection";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <div className={styles.page}>
      <main>
        <Hero />
        <HomepageFairBanner />
        <HubBody />
        <VisionSection />
      </main>
    </div>
  );
}
