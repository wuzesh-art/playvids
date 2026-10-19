import Nav from "@/components/Nav";

type Section = {
  h2: string;
  paragraphs?: string[];
  bullets?: string[];
};

export default function LegalPage({
  title,
  intro,
  sections,
}: {
  title: string;
  intro: string;
  sections: Section[];
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <main className="flex-1">
        <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
          <h1 className="font-display text-4xl font-bold tracking-tight">
            {title}
          </h1>
          <p className="mt-4 leading-relaxed text-ink-secondary">{intro}</p>
          {sections.map((section) => (
            <section key={section.h2} className="mt-10">
              <h2 className="font-display text-xl font-semibold">
                {section.h2}
              </h2>
              {section.paragraphs?.map((p, i) => (
                <p key={i} className="mt-3 leading-relaxed text-ink-secondary">
                  {p}
                </p>
              ))}
              {section.bullets && (
                <ul className="mt-3 list-disc space-y-2 pl-5 text-ink-secondary">
                  {section.bullets.map((b, i) => (
                    <li key={i} className="leading-relaxed">
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </article>
      </main>
    </div>
  );
}
