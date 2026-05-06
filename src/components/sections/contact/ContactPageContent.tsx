// @ts-nocheck
"use client";

import { useState, type FormEvent } from "react";

import { AfiaLogo } from "@/components/common/branding/AfiaLogo";
import { contactEmail } from "@/content/home/contact/ContactContent";

export function ContactPageContent() {
  const [copied, setCopied] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !email || !message) {
      return;
    }

    const subject = `Afia contact from ${name}`;
    const body = [`Name: ${name}`, `Email: ${email}`, "", message].join("\n");

    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(contactEmail);
    setCopied(true);

    window.setTimeout(() => {
      setCopied(false);
    }, 1800);
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(39,174,96,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(45,156,219,0.07),transparent_26%),var(--color-sand)] px-4 py-4 text-[var(--color-ink)] md:px-6 md:py-6">
      <div className="mx-auto flex min-h-[calc(100vh-2rem)] w-full max-w-6xl items-center">
        <div className="grid w-full gap-2 rounded-[2rem] border border-black/5 bg-white/85 p-4 shadow-[0_24px_80px_rgba(17,24,39,0.08)] backdrop-blur md:grid-cols-[0.92fr_1.08fr] md:p-6">
          <section className="flex min-h-[18rem] flex-col items-center justify-between gap-6 rounded-[1.6rem] bg-[linear-gradient(180deg,rgba(39,174,96,0.06),rgba(39,174,96,0.02))] p-6 text-left md:min-h-[26rem] md:p-8">
            <div className="w-full flex flex-col items-center md:items-start">
              <div className="motion-safe:animate-[hero-card-float_6s_ease-in-out_infinite]" style={{ ["--hero-card-offset" as string]: "0px" }}>
                <AfiaLogo compact showBadge={false} showWordmark={false} logoClassName="h-20 w-20 md:h-24 md:w-24" />
              </div>

              <div className="mt-2">
                <h3 className="text-2xl font-extrabold text-[var(--color-ink)]">Afia Wellness</h3>
                {/* <p className="mt-2 text-sm text-[var(--color-muted)] max-w-sm">Serenity meets purpose — personalized plans, certified therapists, confidential care.</p> */}
              </div>
            </div>

            <div className="w-full mt-4 md:mt-6">
              <div className="relative rounded-2xl border border-white/40 bg-gradient-to-br from-white/30 to-white/10 p-6 md:max-w-sm shadow-[0_20px_48px_rgba(39,174,96,0.15)] backdrop-blur-sm overflow-hidden group">
                <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top_right,rgba(39,174,96,0.1),transparent_60%)] pointer-events-none" />
                <div className="relative flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="inline-flex items-center gap-2 mb-3">
                      <span className="inline-flex h-2 w-2 rounded-full bg-[var(--color-green)] animate-pulse" />
                      <p className="text-xs uppercase tracking-[0.08em] font-bold text-[var(--color-green)]">Direct Connect</p>
                    </div>
                    <p className="text-lg font-bold text-[var(--color-ink)] break-all">{contactEmail}</p>
                    <p className="mt-3 text-xs text-[var(--color-muted)] font-medium">✓ Response within 24 hours</p>
                  </div>
                  <div>
                    <button 
                      onClick={handleCopyEmail} 
                      type="button" 
                      className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--color-green)] to-[var(--color-green)]/80 px-4 py-2.5 text-sm font-bold text-[var(--color-sand)] shadow-[0_12px_32px_rgba(39,174,96,0.3)] hover:shadow-[0_16px_40px_rgba(39,174,96,0.4)] transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap"
                    >
                      {copied ? '✓ Copied' : '📋 Copy'}
                    </button>
                  </div>
                </div>
              </div>

              {/* <div className="mt-4 md:mt-6 md:max-w-sm">
                <h4 className="text-sm font-semibold text-[var(--color-ink)]">What we offer</h4>
                <ul className="mt-3 space-y-2 text-sm text-[var(--color-muted)]">
                  <li className="flex items-start gap-3">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[var(--color-green)] text-[var(--color-sand)]">✓</span>
                    <span>Personalized wellness plans</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[var(--color-green)] text-[var(--color-sand)]">✓</span>
                    <span>Certified therapists & coaches</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[var(--color-green)] text-[var(--color-sand)]">✓</span>
                    <span>Confidential, evidence-based care</span>
                  </li>
                </ul>
              </div> */}
            </div>

            <div className="w-full mt-4 md:mt-6 flex items-center justify-between">
              <div className="flex gap-6">
                <div>
                  <p className="text-2xl font-bold text-[var(--color-ink)]">5000+</p>
                  <p className="text-xs text-[var(--color-muted)]">Happy clients</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[var(--color-ink)]">24/7</p>
                  <p className="text-xs text-[var(--color-muted)]">Support</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[var(--color-ink)]">100%</p>
                  <p className="text-xs text-[var(--color-muted)]">Confidential</p>
                </div>
              </div>

              {/* <div>
                <button className="rounded-full border border-[rgba(0,0,0,0.06)] px-4 py-2 text-sm font-semibold text-[var(--color-ink)] hover:bg-white/5">Start a free consult</button>
              </div> */}
            </div>
          </section>

          <section className="rounded-[1.6rem] border border-black/5 bg-white p-5 md:p-6">
            <form className="space-y-3.5" onSubmit={handleSubmit}>
              <label className="block space-y-1.5">
                <span className="text-sm font-medium">Name</span>
                <input
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-2xl border border-black/10 bg-[var(--color-sand)] px-4 py-3 text-sm outline-none transition-colors placeholder:text-[var(--color-subtle)] focus:border-[rgba(39,174,96,0.34)] focus:bg-white"
                  placeholder="Your name"
                />
              </label>

              <label className="block space-y-1.5">
                <span className="text-sm font-medium">Email</span>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-2xl border border-black/10 bg-[var(--color-sand)] px-4 py-3 text-sm outline-none transition-colors placeholder:text-[var(--color-subtle)] focus:border-[rgba(39,174,96,0.34)] focus:bg-white"
                  placeholder="you@example.com"
                />
              </label>

              <label className="block space-y-1.5">
                <span className="text-sm font-medium">Message</span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full rounded-[1.35rem] border border-black/10 bg-[var(--color-sand)] px-4 py-3 text-sm outline-none transition-colors placeholder:text-[var(--color-subtle)] focus:border-[rgba(39,174,96,0.34)] focus:bg-white"
                  placeholder="Write your message"
                />
              </label>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--color-green),var(--color-blue))] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(39,174,96,0.22)] transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-blue)] focus-visible:ring-offset-2"
              >
                Send
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}