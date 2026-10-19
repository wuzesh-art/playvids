import DownloaderBox from "@/components/DownloaderBox";
import Nav from "@/components/Nav";
import { getAllPosts } from "@/lib/blog";

const FEATURES = [
  {
    title: "Free & Unlimited",
    description:
      "Download as many Playvids videos as you want, completely free. No hidden fees, no download caps, ever.",
    icon: (
      <path d="M12 2v20M17 7H9.5a3 3 0 0 0 0 6h5a3 3 0 0 1 0 6H6" />
    ),
  },
  {
    title: "No Sign-Up Required",
    description:
      "Paste a link and go. No accounts, no email walls, no personal data collected — just fast downloads.",
    icon: (
      <>
        <circle cx={12} cy={8} r={4} />
        <path d="M4 21c0-4 3.6-6.5 8-6.5s8 2.5 8 6.5" />
        <path d="M18 3l3 3M21 3l-3 3" />
      </>
    ),
  },
  {
    title: "HD Quality Support",
    description:
      "Save videos in crisp HD quality up to 1080p. Clean MP4 files with no watermarks, ready to watch offline.",
    icon: (
      <>
        <rect x={2} y={5} width={20} height={14} rx={2} />
        <path d="M7 15l3-3-3-3M12 15h5" />
      </>
    ),
  },
];

const LEGAL_LINKS = [
  { label: "Terms", href: "/terms" },
  { label: "Privacy", href: "/privacy" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "DMCA", href: "/dmca" },
];

export default async function Home() {
  const posts = await getAllPosts();
  const latestPosts = posts.slice(0, 3);

  return (
    <div className="flex min-h-screen flex-col">
      <Nav />

      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pt-24">
          <div className="text-center">
            <span className="inline-block rounded-full border border-line bg-surface px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-ink-secondary">
              Launching soon
            </span>
            <h1 className="text-balance mx-auto mt-6 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              <span className="gradient-text">Playvids Video Downloader</span>{" "}
              — Free, Fast &amp; No Sign-Up
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-balance text-base text-ink-secondary sm:text-lg">
              The fastest way to save Playvids videos in HD MP4. Paste a link,
              pick your quality, done — no watermarks, no registration.
            </p>
          </div>

          <div className="mt-10">
            <DownloaderBox />
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature) => (
              <article
                key={feature.title}
                className="card-surface group rounded-box p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#7C3AED]/60"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-panel border border-line bg-surface-2 text-[#A855F7] transition-colors group-hover:border-[#7C3AED]/50">
                  <svg
                    width={22}
                    height={22}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {feature.icon}
                  </svg>
                </div>
                <h2 className="mt-5 font-display text-lg font-semibold">
                  {feature.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <section className="mx-auto w-full max-w-6xl px-4 pb-24 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-display text-2xl font-bold tracking-tight">
            Latest guides
          </h2>
          <a
            href="/blog"
            className="font-display text-sm font-semibold text-ink transition-colors hover:text-transparent hover:bg-clip-text hover:bg-brand-gradient"
          >
            View all guides →
          </a>
        </div>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {latestPosts.map((post) => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="card-surface group rounded-box p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#7C3AED]/60"
            >
              <time
                dateTime={post.date}
                className="font-mono text-xs uppercase tracking-widest text-ink-muted"
              >
                {post.date}
              </time>
              <h3 className="mt-2 font-display text-lg font-semibold leading-snug">
                {post.title}
              </h3>
              <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-secondary">
                {post.description}
              </p>
            </a>
          ))}
        </div>
      </section>

      <footer className="border-t border-line">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="text-sm text-ink-secondary">
              © 2026 downloadxAI · playvids.videodownloaderai.com ·{" "}
              <a
                href="mailto:support@videodownloaderai.com"
                className="text-ink transition-colors hover:text-white"
              >
                support@videodownloaderai.com
              </a>
            </p>
            <nav aria-label="Legal">
              <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                {LEGAL_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-ink-muted transition-colors hover:text-ink"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <p className="max-w-lg text-xs leading-relaxed text-ink-muted">
              downloadxAI is not affiliated with Playvids. We do not host any
              videos.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
