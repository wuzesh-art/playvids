import type { Metadata } from "next";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Contact Us | downloadxAI",
  description:
    "Contact downloadxAI — questions, feedback, and copyright notices for playvids.videodownloaderai.com.",
};

export default function Contact() {
  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <main className="flex flex-1 items-center justify-center px-4 py-24">
        <div className="card-surface mx-auto w-full max-w-lg rounded-box p-8 text-center">
          <h1 className="font-display text-4xl font-bold tracking-tight">
            Contact Us
          </h1>
          <p className="mt-4 leading-relaxed text-ink-secondary">
            Questions, feedback, or copyright notices? Email us at{" "}
            <a
              href="mailto:support@videodownloaderai.com"
              className="font-medium text-ink underline decoration-[#7C3AED]/60 underline-offset-4 transition-colors hover:decoration-[#22D3EE]"
            >
              support@videodownloaderai.com
            </a>{" "}
            — we generally reply within 1–2 business days.
          </p>
        </div>
      </main>
    </div>
  );
}
