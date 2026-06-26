import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import CtaBanner from "@/components/sections/CtaBanner";
import { sortedPosts, type Post } from "@/data/posts";

export const metadata: Metadata = {
  title: "Blog — businessQuest",
  description:
    "Praktyczne wpisy o rekrutacji, zarządzaniu zespołem i HR dla mikro i małych firm. Bez teorii — z doświadczenia.",
};

function Arrow() {
  return (
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
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function Meta({ post }: { post: Post }) {
  return (
    <div className="flex items-center gap-3 text-sm">
      <span className="inline-flex items-center px-3 py-1 rounded-full bg-magenta/10 text-magenta text-[12px] font-semibold">
        {post.category}
      </span>
      <span className="text-brand-muted">{post.dateLabel}</span>
      <span className="text-brand-border">·</span>
      <span className="text-brand-muted">{post.readingTime}</span>
    </div>
  );
}

export default function BlogPage() {
  const [featured, ...rest] = sortedPosts;

  return (
    <>
      <PageHeader
        eyebrow="Blog"
        crumbs={[{ label: "Start", href: "/" }, { label: "Blog" }]}
        title={
          <>
            Wiedza o ludziach w&nbsp;firmie,{" "}
            <span className="text-gradient">bez teorii</span>.
          </>
        }
        lead="Praktyczne wpisy o rekrutacji, trudnych decyzjach i porządkowaniu zespołu — pisane z doświadczenia we współpracy z mikro i małymi firmami."
      />

      <section className="pb-8 lg:pb-12 bg-brand-bg">
        <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-6 lg:px-8">
          {/* Wyróżniony wpis */}
          <Link href={`/blog/${featured.slug}`} className="group block">
            <article className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center rounded-[1.75rem] border border-brand-border bg-brand-card p-7 lg:p-10 shadow-sm transition-all group-hover:border-magenta/40 group-hover:shadow-md">
              <div
                aria-hidden
                className="relative order-1 lg:order-2 aspect-[16/10] rounded-2xl overflow-hidden"
                style={{ background: "var(--gradient-magenta)" }}
              >
                <div
                  className="absolute inset-0 opacity-[0.14]"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, #fff 1.5px, transparent 1.5px)",
                    backgroundSize: "22px 22px",
                  }}
                />
                <span className="absolute bottom-5 left-6 text-white/90 text-sm font-semibold uppercase tracking-widest">
                  Najnowszy wpis
                </span>
              </div>

              <div className="order-2 lg:order-1">
                <Meta post={featured} />
                <h2 className="mt-5 text-3xl lg:text-[2.5rem] font-extrabold text-brand-text leading-[1.05] tracking-tight group-hover:text-magenta transition-colors">
                  {featured.title}
                </h2>
                <p className="mt-4 text-brand-body text-lg leading-relaxed">
                  {featured.excerpt}
                </p>
                <span className="mt-7 inline-flex items-center gap-2 text-magenta font-semibold">
                  Czytaj dalej
                  <span className="transition-transform group-hover:translate-x-1">
                    <Arrow />
                  </span>
                </span>
              </div>
            </article>
          </Link>
        </div>
      </section>

      <section className="pb-20 lg:pb-28 bg-brand-bg">
        <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block"
              >
                <article className="h-full flex flex-col rounded-[1.5rem] border border-brand-border bg-brand-card p-7 shadow-sm transition-all group-hover:border-magenta/40 group-hover:shadow-md">
                  <Meta post={post} />
                  <h3 className="mt-4 text-xl lg:text-[1.4rem] font-bold text-brand-text leading-snug group-hover:text-magenta transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-brand-muted text-[15px] leading-relaxed flex-1">
                    {post.excerpt}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-magenta font-semibold text-[15px]">
                    Czytaj dalej
                    <span className="transition-transform group-hover:translate-x-1">
                      <Arrow />
                    </span>
                  </span>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        eyebrow="Masz temat na głowie?"
        title="Nie tylko piszemy — pomagamy"
        text="Jeśli któryś z tematów dotyczy właśnie Twojej firmy, nie musisz rozwiązywać go w pojedynkę. Umów bezpłatną rozmowę i porozmawiajmy konkretnie."
      />
    </>
  );
}
