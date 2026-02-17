import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const posts = [
  {
    title: "What Is SQLBots?",
    excerpt:
      "SQLBots is an AI-powered platform for automated SQL security testing, designed to scan targets, verify results, and uncover database vulnerabilities at scale.",
    date: "Feb 2026",
    tag: "Security",
    href: "/blogs/what-is-sqlbots",
  },
  {
    title: "What is SQLinjection",
    excerpt:
      "Learn how SQL injection attacks exploit database queries, why they remain one of the most critical web vulnerabilities, and how modern automated testing detects them.",
    date: "Feb 2026",
    tag: "Security",
    href: "/blogs/what-is-sqlinjection",
  },
  {
    title: "Why Traditional SQL Injection Scanners Fail in 2026",
    excerpt:
      "Legacy signature-based scanners struggle with dynamic rendering, WAF interference, and noisy responses, which leads to missed vulnerabilities and unreliable false positives.",
    date: "Feb 2026",
    tag: "Analysis",
    href: "/blogs/why-traditional-sql-injection-scanners-fail-in-2026",
  },
  {
    title: "WordPress Pentest Guide (2026) - What Most Scanners Miss",
    excerpt:
      "A practical guide to testing real WordPress attack surfaces, from plugin permission drift and upload paths to authenticated workflows that traditional scanners often skip.",
    date: "Feb 2026",
    tag: "Guide",
    href: "/blogs/wordpress-pentest-guide-2026",
  },
  {
    title: "How Modern WAFs Detect SQL Injection (SQLi) in 2026",
    excerpt:
      "A technical breakdown of behavior scoring, request correlation, and adaptive bot defenses that modern WAFs use to identify SQLi probes beyond simple signature matching.",
    date: "Feb 2026",
    tag: "Defense",
    href: "/blogs/how-modern-wafs-detect-sqli-2026",
  },
  {
    title: "Complete SQL Injection Testing Checklist (2026)",
    excerpt:
      "A complete, practical checklist for SQLi testing in modern applications, covering discovery, verification, auth flows, API surfaces, and evidence quality.",
    date: "Feb 2026",
    tag: "Checklist",
    href: "/blogs/complete-sqli-testing-checklist-2026",
  },
  {
    title: "OWASP Top 10 Explained for Developers (2026)",
    excerpt:
      "Learn the OWASP Top 10 for 2026 with developer-focused explanations, real web security risks, and practical secure coding actions to reduce vulnerabilities in modern apps.",
    date: "Feb 2026",
    tag: "Security",
    href: "/blogs/owasp-top-10-explained-for-developers-2026",
  },
  {
    title: "PHP Is Still Everywhere in 2026",
    excerpt:
      "From legacy monoliths to modern Laravel stacks, PHP remains deeply embedded in production systems and continues to shape real-world web security testing priorities.",
    date: "Jan 2026",
    tag: "Industry",
    href: "/blogs/php-is-still-everywhere-in-2026",
  },
]

export default function BlogsPage() {
  const [featured, ...restPosts] = posts

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="mx-auto w-full max-w-5xl px-6 pb-20 pt-14 sm:pt-16 md:px-10 lg:pt-20">
        <section className="mb-10">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-white/45">
            Blogs
          </p>
          <h1 className="mt-4 text-[clamp(2.2rem,6vw,4.25rem)] font-semibold leading-[0.95] tracking-tight text-white">
            Security Notes
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
            Product thinking, testing strategy, and practical writeups for real-world web security work.
          </p>
        </section>

        <section className="mb-6">
          <Card className="border-white/10 bg-transparent text-white shadow-none">
            <CardHeader>
              <div className="mb-1 flex items-center gap-3 text-xs text-white/55">
                <span className="rounded-full border border-white/15 px-2 py-0.5 uppercase tracking-[0.12em]">
                  {featured.tag}
                </span>
                <span>{featured.date}</span>
              </div>
              <CardTitle className="max-w-3xl text-[clamp(1.5rem,3.2vw,2.6rem)] leading-[1.05] tracking-tight">
                {featured.title}
              </CardTitle>
              <CardDescription className="max-w-3xl text-sm leading-7 text-white/65 sm:text-base">
                {featured.excerpt}
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Link
                href={featured.href}
                className="inline-flex h-10 items-center rounded-lg border border-white/20 px-4 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Read Article
              </Link>
            </CardFooter>
          </Card>
        </section>

        <section>
          <Card className="border-white/10 bg-transparent text-white shadow-none">
            <CardContent className="p-0">
              {restPosts.map((post, index) => (
                <Link
                  key={post.title}
                  href={post.href}
                  className={`group block px-6 py-6 transition hover:bg-white/[0.03] ${index !== restPosts.length - 1 ? "border-b border-white/10" : ""}`}
                >
                  <div className="flex items-center gap-3 text-xs text-white/50">
                    <span className="rounded-full border border-white/15 px-2 py-0.5 uppercase tracking-[0.12em]">
                      {post.tag}
                    </span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="mt-3 text-xl font-semibold leading-tight tracking-tight text-white">{post.title}</h3>
                  <p className="mt-2 max-w-3xl text-sm leading-7 text-white/62">{post.excerpt}</p>
                  <p className="mt-4 text-sm font-medium text-white/70 transition group-hover:text-white">
                    Read article
                  </p>
                </Link>
              ))}
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  )
}
