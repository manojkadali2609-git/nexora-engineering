import type { Metadata } from "next";
import PageHero from "@/app/components/PageHero";

export const metadata: Metadata = {
  title: "About — NEXORA Engineering",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="[ ABOUT NEXORA ]"
        title="Engineering"
        titleAccent="is an Open Question."
        description="NEXORA exists to make engineering knowledge accessible, interactive and useful — for students, enthusiasts and anyone curious about how things work."
      />

      <section className="content-section">
        <div className="about-grid">
          <div className="about-text">
            <h2>Our Mission</h2>
            <p>
              We believe engineering should not be locked behind expensive
              textbooks or inaccessible lectures. NEXORA was built to make
              technical knowledge open, visual and practical — so anyone with
              curiosity can learn how real systems work.
            </p>
            <p>
              From interactive calculators to structured learning paths, every
              tool on this platform is designed to bridge the gap between theory
              and application. Our goal is to empower the next generation of
              engineers with the resources they deserve.
            </p>
          </div>

          <div className="stat-grid">
            <div className="stat-card">
              <div className="stat-num">8</div>
              <span className="stat-label">Calculators</span>
            </div>
            <div className="stat-card">
              <div className="stat-num">6</div>
              <span className="stat-label">Learning Paths</span>
            </div>
            <div className="stat-card">
              <div className="stat-num">4</div>
              <span className="stat-label">Domains</span>
            </div>
            <div className="stat-card">
              <div className="stat-num">30+</div>
              <span className="stat-label">Topics</span>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section alt">
        <div className="section-header">
          <label>[ OUR VALUES ]</label>
        </div>

        <div className="values-grid">
          <div className="value-card">
            <h3>Accuracy</h3>
            <p>
              Real engineering demands precision. Every formula is validated,
              every unit is correct, and every calculation is backed by
              established principles and reliable data sources.
            </p>
          </div>

          <div className="value-card">
            <h3>Curiosity</h3>
            <p>
              Great engineers never stop asking why. We encourage exploring how
              systems work, questioning assumptions, and understanding the
              reasoning behind every design decision.
            </p>
          </div>

          <div className="value-card">
            <h3>Accessibility</h3>
            <p>
              Knowledge should have no barriers. We provide clear explanations,
              interactive tools and open resources so that anyone can learn
              engineering regardless of background.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
