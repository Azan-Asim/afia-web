import type { Metadata } from "next";

import { Footer } from "@/components/footer/Footer";
import { Navbar } from "@/components/header/Navbar";
import { ContactPageContent } from "@/components/sections/contact/ContactPageContent";
import { navItems } from "@/content/home/navigation/NavContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Send a confidential message to the Afia team using a premium contact form.",
  
};

export default function ContactPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[var(--color-sand)] text-[var(--color-ink)]">
      <div id="top" />
      <Navbar items={navItems} />
      <main className="pt-24 md:pt-10">
        <ContactPageContent />
      </main>
      <Footer />
    </div>
  );
}

