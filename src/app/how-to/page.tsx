import type { Metadata } from "next";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "How-to | downloadxAI",
  description:
    "Step-by-step guides for using the downloadxAI Playvids video downloader.",
};

export default function HowTo() {
  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <main className="flex flex-1 items-center justify-center px-4 py-24">
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold tracking-tight">
            How-to
          </h1>
          <p className="mt-4 text-ink-secondary">
            Coming soon — articles are on the way.
          </p>
        </div>
      </main>
      <footer className="border-t border-white/10 py-6">
        <p className="mx-auto mt-4 max-w-6xl px-4 text-center">
          <a href="https://www.videodownloaderai.com/supported-sites" className="inline-block text-sm underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4" style={{ color: "#22D3EE" }}>Explore more platform tools at downloadxAI</a>
        </p>
      </footer>
    </div>
  );
}
