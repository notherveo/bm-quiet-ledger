import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DuotonePortrait } from "@/components/duotone-portrait";
import { SectionReveal, Reveal } from "@/components/reveal";
import { TypewriterPhrase } from "@/components/typewriter";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function WhoWeServe() {
  return (
    <div className="site">
      <SiteHeader />

      <section className="who-hero">
        <div className="who-figure">
          <span>01</span>
          <div className="who-figure-copy">
            <p>
              <TypewriterPhrase phrase="A little less noise." />
            </p>
            <span>
              <TypewriterPhrase phrase="A little more time." />
            </span>
          </div>
        </div>
        <div className="who-copy">
          <h1>
            <SectionReveal text="Who we serve" />
          </h1>
          <p>
            Founders, retirees, families, and institutions. All of them have
            one thing in common: they already know how to run their lives.
          </p>
          <Link href="/contact">
            <Button>
              Schedule a conversation
            </Button>
          </Link>
        </div>
      </section>

      <section className="who-grid">
        <div className="section-head">
          <span>02</span>
          <h2>
            <SectionReveal text="The clients we work with" />
          </h2>
        </div>
        <div className="who-cards">
          {[
            {
              seed: "founder",
              role: "Founder",
              copy: "You built something. Now you want to keep it, and keep it simple.",
            },
            {
              seed: "retiree",
              role: "Retiree",
              copy: "Your capital should do the work you no longer want to do.",
            },
            {
              seed: "family",
              role: "Family",
              copy: "A family office that fits in a conversation, not a spreadsheet.",
            },
            {
              seed: "institution",
              role: "Institution",
              copy: "A private manager that answers to a board, not a brand.",
            },
          ].map((card, i) => (
            <div key={card.role} className="who-card" style={{ "--i": i } as React.CSSProperties}>
              <DuotonePortrait seed={card.seed} role={card.role} />
              <div className="who-card-copy">
                <span className="who-card-role">{card.role}</span>
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
