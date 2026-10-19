import type { Metadata } from "next";
import Nav from "@/components/Nav";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | downloadxAI",
  description:
    "The downloadxAI blog — guides, updates, and news about the Playvids video downloader.",
};

function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default async function Blog() {
  const posts = await getAllPosts();

  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <main className="flex-1">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <h1 className="font-display text-4xl font-bold tracking-tight">
            Blog
          </h1>
          <p className="mt-3 text-ink-secondary">
            Guides and updates from the downloadxAI team.
          </p>

          <div className="mt-10 grid gap-5">
            {posts.map((post) => (
              <a
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card-surface group rounded-box p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#7C3AED]/60"
              >
                <time
                  dateTime={post.date}
                  className="font-mono text-xs uppercase tracking-widest text-ink-muted"
                >
                  {formatDate(post.date)}
                </time>
                <h2 className="mt-2 font-display text-xl font-semibold transition-colors group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-brand-gradient">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
                  {post.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
