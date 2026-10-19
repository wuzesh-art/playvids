import type { Metadata } from "next";
import Nav from "@/components/Nav";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

const BASE = "https://playvids.videodownloaderai.com";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) return { title: "Blog | downloadxAI" };
  return {
    title: `${post.title} | downloadxAI`,
    description: post.description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
}

function jsonLd(data: object): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export default async function BlogPost({ params }: Props) {
  const post = await getPostBySlug(params.slug);
  if (!post) return null;

  const posts = await getAllPosts();
  const others = posts.filter((p) => p.slug !== post.slug);
  const canonical = `${BASE}/blog/${post.slug}`;

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Organization", name: "downloadxAI" },
    publisher: {
      "@type": "Organization",
      name: "downloadxAI",
      logo: {
        "@type": "ImageObject",
        url: `${BASE}/logo_icon.png`,
      },
    },
    mainEntityOfPage: canonical,
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: BASE,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${BASE}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: canonical,
      },
    ],
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
          <nav
            aria-label="Breadcrumb"
            className="font-mono text-xs uppercase tracking-widest text-ink-muted"
          >
            <a href="/" className="transition-colors hover:text-ink">
              Home
            </a>
            <span className="mx-2">/</span>
            <a href="/blog" className="transition-colors hover:text-ink">
              Blog
            </a>
          </nav>

          <h1 className="text-balance mt-4 font-display text-4xl font-bold leading-tight tracking-tight">
            {post.title}
          </h1>
          <p className="mt-3 font-mono text-sm text-ink-muted">
            <time dateTime={post.date}>{post.date}</time> · by downloadxAI
          </p>

          <article
            className="prose mt-8"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />

          {post.faqs.length > 0 && (
            <section className="mt-14">
              <h2 className="font-display text-2xl font-bold tracking-tight">
                FAQ
              </h2>
              <div className="mt-5 space-y-3">
                {post.faqs.map((faq) => (
                  <details
                    key={faq.q}
                    className="card-surface group rounded-panel px-5 py-4"
                  >
                    <summary className="cursor-pointer list-none font-medium text-ink marker:hidden [&::-webkit-details-marker]:hidden">
                      <span className="flex items-center justify-between gap-3">
                        {faq.q}
                        <svg
                          width={16}
                          height={16}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          className="shrink-0 text-ink-muted transition-transform group-open:rotate-180"
                        >
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-ink-secondary">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </section>
          )}

          <section className="card-surface mt-14 rounded-box p-6">
            <h2 className="font-display text-lg font-semibold">More articles</h2>
            {others.length > 0 ? (
              <ul className="mt-3 space-y-2">
                {others.map((p) => (
                  <li key={p.slug}>
                    <a
                      href={`/blog/${p.slug}`}
                      className="text-sm text-ink-secondary underline decoration-line-strong underline-offset-4 transition-colors hover:text-ink"
                    >
                      {p.title}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-3 text-sm text-ink-secondary">
                More guides are on the way.
              </p>
            )}
            <a
              href="/blog"
              className="mt-5 inline-block font-display text-sm font-semibold text-ink transition-colors hover:text-transparent hover:bg-clip-text hover:bg-brand-gradient"
            >
              ← Back to Blog
            </a>
          </section>
        </div>
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(articleLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(faqLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbLd) }}
      />
    </div>
  );
}
