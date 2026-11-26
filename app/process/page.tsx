import * as React from "react";
import { SectionReveal, Reveal } from "@/components/reveal";
import { TypewriterPhrase } from "@/components/typewriter";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function Process() {
  return (
    <div className="site">
      <SiteHeader />

      <section className="process-hero">
        <div className="process-figure">
          <span>01</span>
          <div className="process-figure-copy">
            <p>
              <TypewriterPhrase phrase="A little less noise." />
            </p>
            <span>
              <TypewriterPhrase phrase="A little more time." />
            </span>
          </div>
        </div>
        <div className="process-copy">
          <h1>
            <SectionReveal text="The process" />
          </h1>
          <p>
            A short conversation. A plan that fits in a conversation. A
            partnership that keeps it simple.
          </p>
        </div>
      </section>

      <section className="process-steps">
        <div className="section-head">
          <span>02</span>
          <h2>
            <SectionReveal text="How it works" />
          </h2>
        </div>
        <div className="process-grid">
          {[
            {
              step: "01",
              title: "A conversation",
              copy: "We meet, you tell us your life, and we tell you what we think.",
            },
            {
              step: "02",
              title: "A plan",
              copy: "We draft a plan that fits your goals, your time, and your appetite.",
            },
            {
              step: "03",
              title: "A partnership",
              copy: "We execute, you approve, and we keep it simple.",
            },
          ].map((item, i) => (
            <div key={item.step} className="process-card" style={{ "--i": i } as React.CSSProperties}>
              <span className="process-step">{item.step}</span>
              <span className="process-title">{item.title}</span>
              <p>
                <SectionReveal text={item.copy} />
              </p>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
