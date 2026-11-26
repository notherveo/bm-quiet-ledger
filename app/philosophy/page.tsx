import * as React from "react";
import { SectionReveal, Reveal } from "@/components/reveal";
import { TypewriterPhrase } from "@/components/typewriter";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function Philosophy() {
  return (
    <div className="site">
      <SiteHeader />

      <section className="philosophy-hero">
        <div className="philosophy-figure">
          <span>01</span>
          <div className="philosophy-figure-copy">
            <p>
              <TypewriterPhrase phrase="A little less noise." />
            </p>
            <span>
              <TypewriterPhrase phrase="A little more time." />
            </span>
          </div>
        </div>
        <div className="philosophy-copy">
          <h1>
            <SectionReveal text="Our philosophy" />
          </h1>
          <p>
            Wealth management should be quiet. Quiet enough for your life to
            continue as it is, with a little more room.
          </p>
          <p>
            We work with founders, retirees, and families who already know how
            to run their lives. We handle the rest.
          </p>
        </div>
      </section>

      <section className="principles">
        <div className="section-head">
          <span>02</span>
          <h2>
            <SectionReveal text="Our principles" />
          </h2>
        </div>
        <div className="principles-grid">
          {[
            {
              number: "01",
              title: "We start with your life",
              copy: "Not with a benchmark, or a fee schedule. We start with your goals, your time, and your appetite for complexity.",
            },
            {
              number: "02",
              title: "We keep it simple",
              copy: "A plan that fits in a conversation, not a spreadsheet. A process that fits in a calendar, not a boardroom.",
            },
            {
              number: "03",
              title: "We earn our keep",
              copy: "We charge what we charge because we believe in the work. And because we believe you should know exactly what it is.",
            },
          ].map((item, i) => (
            <div key={item.number} className="principle-card" style={{ "--i": i } as React.CSSProperties}>
              <span className="principle-number">{item.number}</span>
              <span className="principle-title">{item.title}</span>
              <p>
                <SectionReveal text={item.copy} />
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="disclosure">
        <div className="disclosure-copy">
          <h2>
            <SectionReveal text="A note on this website" />
          </h2>
          <p>
            Quiet Ledger Capital is a fictional company created for this project.
            All names, figures, and results are sample content.
          </p>
          <p>
            The "Your Next 20 Years" chart is an illustrative allocation for a
            sample client, based on age and goal. It is not investment advice.
            Past performance is not indicative of future results.
          </p>
          <p>
            The team portraits and testimonials are fictional. This website does
            not represent a real firm, and no real person has been depicted.
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
