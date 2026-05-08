"use client";

import { useState, type FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";

import { AfiaLogo } from "@/components/common/branding/AfiaLogo";
import { contactEmail } from "@/content/home/contact/ContactContent";
import { EMAILJS_CONFIG } from "@/lib/emailjs";

export function ContactPageContent() {
  const formRef = useRef<HTMLFormElement>(null);
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setErrorMessage("");
    setSubmitStatus("idle");

    const { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } = EMAILJS_CONFIG;

    try {
      const result = await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      );

      if (result.text === "OK") {
        setSubmitStatus("success");
        formRef.current.reset();
        
        setTimeout(() => {
          setSubmitStatus("idle");
        }, 5000);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setErrorMessage("Sorry, something went wrong. Please try again later or email us directly.");
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(contactEmail);
    setCopied(true);

    window.setTimeout(() => {
      setCopied(false);
    }, 1800);
  };

  return (
    <div className="overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(39,174,96,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(45,156,219,0.07),transparent_26%),var(--color-sand)] px-4 py-16 text-[var(--color-ink)] md:px-6 md:py-24">
      <div className="mx-auto flex w-full max-w-6xl items-center">
        <div className="grid w-full gap-8 rounded-[2.5rem] border border-black/5 bg-white/90 p-6 shadow-[0_32px_96px_rgba(17,24,39,0.1)] backdrop-blur-xl md:grid-cols-2 md:p-10">
          {/* Left Side: Contact Info */}
          <section className="flex flex-col items-center justify-start gap-8 rounded-[2rem] bg-[linear-gradient(180deg,rgba(39,174,96,0.06),rgba(39,174,96,0.02))] p-8 text-left md:p-12">
            <div className="w-full flex flex-col items-center md:items-start">
              <div className="motion-safe:animate-[hero-card-float_6s_ease-in-out_infinite]" style={{ ["--hero-card-offset" as string]: "0px" }}>
                <AfiaLogo compact showBadge={false} showWordmark={false} logoClassName="h-20 w-20 md:h-24 md:w-24" />
              </div>

              <div className="mt-2">
                <span className="relative inline-block font-bold text-7xl bg-gradient-to-r from-[#27AE60] to-[#2D9CDB] bg-clip-text text-transparent">
                  Afia
                  <span className="absolute -bottom-6 right-0 text-lg tracking-wide opacity-80 bg-gradient-to-r from-[#27AE60] to-[#2D9CDB] bg-clip-text text-transparent">
                    Be well.
                  </span>
                </span>
              </div>
            </div>

            <div className="w-full">
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
            </div>

            <div className="w-full flex items-center justify-between">
              <div className="flex gap-6">
                <div>
                  <p className="text-2xl font-bold text-[var(--color-ink)]">50+</p>
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
            </div>
          </section>

          {/* Right Side: Form */}
          <section className="flex flex-col justify-start rounded-[2rem] border border-black/5 bg-white p-8 md:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.02)]">
            <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
              {errorMessage && (
                <div className="rounded-xl bg-red-50 border border-red-200 p-3 text-sm text-red-700">
                  {errorMessage}
                </div>
              )}
              
              {submitStatus === "success" && (
                <div className="rounded-xl bg-green-50 border border-green-200 p-3 text-sm text-green-700">
                  ✓ Message sent successfully! We'll get back to you soon.
                </div>
              )}

              <label className="block">
                <input
                  name="from_name"
                  type="text"
                  required
                  disabled={isSubmitting}
                  className="w-full rounded-2xl border border-black/10 bg-[var(--color-sand)] px-4 py-3 text-sm outline-none transition-colors placeholder:text-[var(--color-subtle)] focus:border-[rgba(39,174,96,0.34)] focus:bg-white disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Write your name"
                />
              </label>

              <label className="block">
                <input
                  name="reply_to"
                  type="email"
                  required
                  disabled={isSubmitting}
                  className="w-full rounded-2xl border border-black/10 bg-[var(--color-sand)] px-4 py-3 text-sm outline-none transition-colors placeholder:text-[var(--color-subtle)] focus:border-[rgba(39,174,96,0.34)] focus:bg-white disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Write your email"
                />
              </label>

              <label className="block">
                <textarea
                  name="message"
                  required
                  disabled={isSubmitting}
                  rows={5}
                  className="w-full rounded-[1.35rem] border border-black/10 bg-[var(--color-sand)] px-4 py-3 text-sm outline-none transition-colors placeholder:text-[var(--color-subtle)] focus:border-[rgba(39,174,96,0.34)] focus:bg-white disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Write your message"
                />
              </label>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--color-green),var(--color-blue))] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(39,174,96,0.22)] transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-blue)] focus-visible:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {isSubmitting ? "Sending..." : "Send"}
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}