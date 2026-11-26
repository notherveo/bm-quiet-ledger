import * as React from "react";
import { DuotonePortrait } from "@/components/duotone-portrait";
import { SectionReveal, Reveal } from "@/components/reveal";
import { TypewriterPhrase } from "@/components/typewriter";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function Team() {
  return (
    <div className="site">
      <SiteHeader />

      <section className="team-hero">
        <div className="team-figure">
          <span>01</span>
          <div className="team-figure-copy">
            <p>
              <TypewriterPhrase phrase="A little less noise." />
            </p>
            <span>
              <TypewriterPhrase phrase="A little more time." />
            </span>
          </div>
        </div>
        <div className="team-copy">
          <h1>
            <SectionReveal text="The team" />
          </h1>
          <p>
            A small group of people who know the work, and know when to step
            back.
          </p>
        </div>
      </section>

      <section className="team-grid">
        <div className="section-head">
          <span>02</span>
          <h2>
            <SectionReveal text="Who's behind the scenes" />
          </h2>
        </div>
        <div className="team-cards">
          {[
            {
              seed: "eliot",
              role: "Eliot Vance",
              title: "Principal",
              copy: "He built the firm. He still reads every letter.",
            },
            {
              seed: "mira",
              role: "Mira Chen",
              title: "Portfolio Manager",
              copy: "She likes a good spreadsheet, and an even better exit.",
            },
            {
              seed: "dario",
              role: "Dario Rossi",
              title: "Operations",
              copy: "He keeps the books, and the coffee machine working.",
            },
          ].map((card, i) => (
            <div key={card.role} className="team-card" style={{ "--i": i } as React.CSSProperties}>
              <DuotonePortrait seed={card.seed} role={card.role} />
              <div className="team-card-copy">
                <span className="team-card-name">{card.title}</span>
                <p>
                  <SectionReveal text={card.copy} />
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
