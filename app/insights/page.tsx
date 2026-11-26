import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionReveal, Reveal } from "@/components/reveal";
import { TypewriterPhrase } from "@/components/typewriter";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function Insights() {
  return (
    <div className="site">
      <SiteHeader />

      <section className="insights-hero">
        <div className="insights-figure">
          <span>01</span>
          <div className="insights-figure-copy">
            <p>
              <TypewriterPhrase phrase="A little less noise." />
            </p>
            <span>
              <TypewriterPhrase phrase="A little more time." />
            </span>
          </div>
        </div>
        <div className="insights-copy">
          <h1>
            <SectionReveal text="Insights" />
          </h1>
          <p>
            Market commentary and portfolio notes, written for people who
            already know the basics.
          </p>
          <Link href="/contact">
            <Button>
              Schedule a conversation
            </Button>
          </Link>
        </div>
      </section>

      <section className="insights-grid">
        <div className="section-head">
          <span>02</span>
          <h2>
            <SectionReveal text="Latest articles" />
          </h2>
        </div>
        <div className="insights-cards">
          {[
            {
              title: "The case for doing nothing",
              copy: "Sometimes the best move is to wait for the next quarter.",
              date: "October 2026",
            },
            {
              title: "Why cash is still a good idea",
              copy: "Cash is not a confession of weakness. It's a confession of patience.",
              date: "September 2026",
            },
            {
              title: "The quiet power of compounding",
              copy: "It's not about the rate. It's about the time.",
              date: "August 2026",
            },
          ].map((card, i) => (
            <div key={card.title} className="insights-card" style={{ "--i": i } as React.CSSProperties}>
              <span className="insights-date">{card.date}</span>
              <span className="insights-title">{card.title}</span>
              <p>
                <SectionReveal text={card.copy} />
              </p>
              <Link href="/contact">
                <Button variant="ghost" size="sm">
                  Read more
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
