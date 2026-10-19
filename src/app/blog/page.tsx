import type { Metadata } from "next";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Blog | downloadxAI",
  description:
    "The downloadxAI blog — guides, updates, and news about the Playvids video downloader.",
};

export default function Blog() {
  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <main className="flex flex-1 items-center justify-center px-4 py-24">
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold tracking-tight">
            Blog
          </h1>
          <p className="mt-4 text-ink-secondary">
            Coming soon — articles are on the way.
          </p>
        </div>
      </main>
    </div>
  );
}
