import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/layout/PageHeader";
import CtaBanner from "@/components/sections/CtaBanner";
import { posts, getPost, sortedPosts } from "@/data/posts";

interface Params {
  params: { slug: string };
}

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const post = getPost(params.slug);
  if (!post) return { title: "Wpis nie znaleziony — businessQuest" };
  return {
    title: `${post.title} — businessQuest`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: Params) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const related = sortedPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <PageHeader
        eyebrow={post.category}
        crumbs={[
          { label: "Start", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
        title={post.title}
        lead={post.excerpt}
      >
        <div className="flex items-center gap-3 text-sm text-brand-muted">
          <span>{post.dateLabel}</span>
          <span className="text-brand-border">·</span>
          <span>{post.readingTime}</span>
        </div>
      </PageHeader>

      <article className="pb-20 lg:pb-28 bg-brand-bg">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div>
            {post.content.map((node, i) => {
              if (node.type === "h") {
                return (
                  <h2
                    key={i}
                    className="text-2xl lg:text-[1.85rem] font-bold text-brand-text tracking-tight leading-snug mt-10 mb-4 first:mt-0"
                  >
                    {node.text}
                  </h2>
                );
              }
              if (node.type === "ul") {
                return (
                  <ul key={i} className="my-5 space-y-3">
                    {node.items.map((b, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-brand-body text-lg leading-relaxed"
                      >
                        <span className="mt-2.5 block w-1.5 h-1.5 rounded-full bg-magenta flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p
                  key={i}
                  className="text-brand-body text-lg leading-relaxed mb-5"
                >
                  {node.text}
                </p>
              );
            })}
          </div>

          {/* Powrót */}
          <div className="mt-12 pt-8 border-t border-brand-border">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-magenta font-semibold hover:gap-3 transition-all"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M19 12H5M11 18l-6-6 6-6" />
              </svg>
              Wróć na bloga
            </Link>
          </div>
        </div>
      </article>

      {/* Powiązane wpisy */}
      {related.length > 0 && (
        <section className="pb-20 lg:pb-28 bg-brand-bg-subtle pt-16 lg:pt-20">
          <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-extrabold text-brand-text tracking-tight mb-8">
              Przeczytaj również
            </h2>
            <div className="grid md:grid-cols-2 gap-6 lg:gap-7">
              {related.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="group block">
                  <article className="h-full flex flex-col rounded-[1.5rem] border border-brand-border bg-brand-card p-7 shadow-sm transition-all group-hover:border-magenta/40 group-hover:shadow-md">
                    <div className="flex items-center gap-3 text-sm">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-magenta/10 text-magenta text-[12px] font-semibold">
                        {p.category}
                      </span>
                      <span className="text-brand-muted">{p.readingTime}</span>
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-brand-text leading-snug group-hover:text-magenta transition-colors">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-brand-muted text-[15px] leading-relaxed flex-1">
                      {p.excerpt}
                    </p>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBanner
        eyebrow="Masz temat na głowie?"
        title="Porozmawiajmy o Twoim zespole"
        text="Jeśli ten wpis dotyczy właśnie Twojej firmy, nie musisz działać w pojedynkę. Umów bezpłatną, niezobowiązującą rozmowę."
      />
    </>
  );
}
