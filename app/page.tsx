import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AllocationChart } from "@/components/allocation-chart";
import { DuotonePortrait } from "@/components/duotone-portrait";
import { SectionReveal, Reveal } from "@/components/reveal";
import { TypewriterPhrase } from "@/components/typewriter";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <div className="site">
      <SiteHeader />

      <section className="hero">
        <div className="hero-copy">
          <h1>
            <span>Quiet</span>
            <span>Ledger</span>
            <span>
              <sup>®</sup>
            </span>
          </h1>
          <p>
            Independent wealth management for people who know what matters.
          </p>
          <div className="hero-actions">
            <Link href="/contact">
              <Button>
                Schedule a conversation
              </Button>
            </Link>
            <Link href="/philosophy">
              <Button variant="ghost">
                Read our philosophy
              </Button>
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-figure">
            <span>01</span>
            <div className="hero-figure-copy">
              <p>
                <TypewriterPhrase phrase="The quiet work of compounding." />
              </p>
              <span>
                <TypewriterPhrase phrase="A little less noise." />
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="philosophy-strip">
        <div className="strip-figure">
          <span>02</span>
          <div className="strip-figure-copy">
            <p>
              <TypewriterPhrase phrase="A little less noise." />
            </p>
            <span>
              <TypewriterPhrase phrase="A little more time." />
            </span>
          </div>
        </div>
        <div className="strip-copy">
          <h2>
            <SectionReveal text="We take the noise out of wealth." />
          </h2>
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

      <section className="who-we-serve">
        <div className="section-head">
          <span>03</span>
          <h2>
            <SectionReveal text="Who we serve" />
          </h2>
        </div>
        <div className="who-grid">
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

      <section className="process">
        <div className="section-head">
          <span>04</span>
          <h2>
            <SectionReveal text="The process" />
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

      <section className="visual-strip">
        <div className="strip-figure">
          <span>05</span>
          <div className="strip-figure-copy">
            <p>
              <TypewriterPhrase phrase="A little less noise." />
            </p>
            <span>
              <TypewriterPhrase phrase="A little more time." />
            </span>
          </div>
        </div>
        <div className="strip-copy">
          <h2>
            <SectionReveal text="Your Next 20 Years" />
          </h2>
          <p>
            An illustrative allocation for a sample client, based on age and
            goal. Not advice.
          </p>
          <div className="visual-chart">
            <AllocationChart age="45-54" goal="wealth preservation" />
          </div>
        </div>
      </section>

      <section className="insights-strip">
        <div className="strip-copy">
          <h2>
            <SectionReveal text="Insights" />
          </h2>
          <p>
            Market commentary and portfolio notes, written for people who
            already know the basics.
          </p>
          <Link href="/insights">
            <Button>
              Read the latest
            </Button>
          </Link>
        </div>
        <div className="strip-figure">
          <span>06</span>
          <div className="strip-figure-copy">
            <p>
              <TypewriterPhrase phrase="A little less noise." />
            </p>
            <span>
              <TypewriterPhrase phrase="A little more time." />
            </span>
          </div>
        </div>
      </section>

      <section className="contact-strip">
        <div className="strip-figure">
          <span>07</span>
          <div className="strip-figure-copy">
            <p>
              <TypewriterPhrase phrase="A little less noise." />
            </p>
            <span>
              <TypewriterPhrase phrase="A little more time." />
            </span>
          </div>
        </div>
        <div className="strip-copy">
          <h2>
            <SectionReveal text="Let's talk" />
          </h2>
          <p>
            A short conversation, no obligation. We'll tell you whether we're a
            good fit for you.
          </p>
          <Link href="/contact">
            <Button>
              Schedule a conversation
            </Button>
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
