"use client";
import * as React from "react";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SectionReveal, Reveal } from "@/components/reveal";
import { TypewriterPhrase } from "@/components/typewriter";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [assets, setAssets] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !email) return;
    setSubmitted(true);
  }

  return (
    <div className="site">
      <SiteHeader />

      <section className="contact-hero">
        <div className="contact-figure">
          <span>01</span>
          <div className="contact-figure-copy">
            <p>
              <TypewriterPhrase phrase="A little less noise." />
            </p>
            <span>
              <TypewriterPhrase phrase="A little more time." />
            </span>
          </div>
        </div>
        <div className="contact-copy">
          <h1>
            <SectionReveal text="Let's talk" />
          </h1>
          <p>
            A short conversation, no obligation. We'll tell you whether we're a
            good fit for you.
          </p>
        </div>
      </section>

      <section className="contact-form">
        <div className="section-head">
          <span>02</span>
          <h2>
            <SectionReveal text="Schedule a conversation" />
          </h2>
        </div>
        {submitted ? (
          <div className="form-success">
            <h3>
              <SectionReveal text="Thank you" />
            </h3>
            <p>
              We've received your inquiry and will get back to you within two
              business days.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form-grid">
            <div className="form-field">
              <Label htmlFor="name">
                <SectionReveal text="Your name" />
              </Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your full name"
                required
              />
            </div>
            <div className="form-field">
              <Label htmlFor="email">
                <SectionReveal text="Email" />
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
              />
            </div>
            <div className="form-field">
              <Label htmlFor="phone">
                <SectionReveal text="Phone (optional)" />
              </Label>
              <Input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+1 (555) 000-0000"
              />
            </div>
            <div className="form-field">
              <Label htmlFor="assets">
                <SectionReveal text="Approximate assets band (optional)" />
              </Label>
              <Input
                id="assets"
                value={assets}
                onChange={(e) => setAssets(e.target.value)}
                placeholder="e.g. $1M–$5M"
              />
            </div>
            <div className="form-field">
              <Label htmlFor="message">
                <SectionReveal text="Message (optional)" />
              </Label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us a little about your goals..."
                rows={4}
              />
            </div>
            <div className="form-actions">
              <Button type="submit">
                <SectionReveal text="Send inquiry" />
              </Button>
            </div>
          </form>
        )}
      </section>

      <SiteFooter />
    </div>
  );
}
