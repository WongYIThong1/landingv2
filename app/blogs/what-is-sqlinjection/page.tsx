"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays, Folder, Share2, UserRound } from "lucide-react"

export default function WhatIsSqlInjectionPage() {
  const articleUrl = "https://sqlbots.online/blogs/what-is-sqlinjection"
  const [copied, setCopied] = useState(false)

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(articleUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="mx-auto w-full max-w-[1280px] px-5 pb-16 pt-12 sm:pt-14 md:px-8 md:pt-16 lg:px-10 lg:pt-20">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-12">
          <article className="max-w-[860px] space-y-8">
            <section>
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-white/45">Blogs</p>
              <h1 className="mt-4 text-[clamp(2.4rem,5vw,4rem)] font-semibold leading-[1.02] tracking-tight text-white">
                What Is SQL Injection?
              </h1>
              <p className="mt-5 text-base leading-8 text-white/75">
                <strong>SQL injection (SQLi)</strong> is a web security vulnerability where an attacker manipulates a
                database query by injecting malicious input into an application. If the app builds SQL queries
                unsafely, that input can change what the database executes, potentially allowing data theft, account
                takeover, or destructive actions.
              </p>
              <p className="mt-4 text-base leading-8 text-white/75">
                In 2026, SQL injection is still one of the most damaging vulnerabilities because it targets the thing
                businesses value most: <strong>data</strong>.
              </p>
            </section>

            <section id="what-is" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold tracking-tight text-white">What SQL Injection Is</h2>
              <p className="mt-4 text-base leading-8 text-white/75">SQL injection happens when:</p>
              <ol className="mt-4 list-decimal space-y-2 pl-5 text-base leading-8 text-white/75">
                <li>An application accepts user-controlled input (URL params, form fields, headers, JSON body, etc.)</li>
                <li>The application concatenates that input into a SQL query (or builds queries unsafely)</li>
                <li>The database executes the altered query</li>
              </ol>
              <p className="mt-4 text-base leading-8 text-white/75">
                The vulnerability is not SQL itself. It is <strong>how the application constructs queries</strong>.
              </p>
            </section>

            <section id="why-matters" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold tracking-tight text-white">Why SQL Injection Still Matters</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-8 text-white/75">
                <li>
                  <strong>Data exfiltration</strong>: customer records, emails, hashes, tokens, payment metadata
                </li>
                <li>
                  <strong>Authentication bypass</strong>: login logic can be tricked if queries are unsafe
                </li>
                <li>
                  <strong>Privilege escalation</strong>: weak DB permissions amplify damage
                </li>
                <li>
                  <strong>Business disruption</strong>: deletion/corruption of tables, downtime, compliance violations
                </li>
                <li>
                  <strong>Silent compromise</strong>: attackers can extract data quietly over time
                </li>
              </ul>
            </section>

            <section id="how-works" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold tracking-tight text-white">How SQL Injection Works (High-Level)</h2>
              <p className="mt-4 text-base leading-8 text-white/75">
                At a high level, many apps do: read input, build query, run query, and return result. The risk appears
                when query building uses string concatenation.
              </p>
              <h3 className="mt-5 text-lg font-semibold text-white">Unsafe pattern (conceptual)</h3>
              <pre className="mt-3 overflow-x-auto rounded-lg border border-white/10 bg-black/30 p-4 text-sm text-white/80">{`// Example concept only — do not build SQL like this
const query = "SELECT * FROM users WHERE email = '" + email + "'";`}</pre>
              <h3 className="mt-5 text-lg font-semibold text-white">Safe pattern (parameterized queries)</h3>
              <pre className="mt-3 overflow-x-auto rounded-lg border border-white/10 bg-black/30 p-4 text-sm text-white/80">{`const query = "SELECT * FROM users WHERE email = ?";
db.execute(query, [email]);`}</pre>
              <p className="mt-4 text-base leading-8 text-white/75">
                With parameterization, the database treats input as <strong>data</strong>, not SQL code.
              </p>
            </section>

            <section id="types" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold tracking-tight text-white">Common Types of SQL Injection</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-8 text-white/75">
                <li>
                  <strong>Classic / In-band SQLi</strong>: immediate output or errors in response
                </li>
                <li>
                  <strong>Error-based SQLi</strong>: verbose DB errors reveal hints
                </li>
                <li>
                  <strong>Blind SQLi</strong>: infer behavior from content/status/size/redirect differences
                </li>
                <li>
                  <strong>Time-based SQLi</strong>: infer success by response delays
                </li>
                <li>
                  <strong>Out-of-band SQLi</strong>: exfiltration through external channels
                </li>
              </ul>
            </section>

            <section id="impact" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold tracking-tight text-white">Real-World Impact</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-8 text-white/75">
                <li>Dumping sensitive tables (users, credentials, tokens, orders)</li>
                <li>Extracting configuration secrets (API keys, service tokens)</li>
                <li>Finding admin accounts or privilege flags</li>
                <li>Mapping database schema to expand attack surface</li>
              </ul>
            </section>

            <section id="detect" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold tracking-tight text-white">How to Detect SQL Injection Safely</h2>
              <p className="mt-4 text-base leading-8 text-white/75">
                Test only with explicit authorization. A safe approach:
              </p>
              <ol className="mt-4 list-decimal space-y-2 pl-5 text-base leading-8 text-white/75">
                <li>Identify inputs</li>
                <li>Establish a baseline</li>
                <li>Introduce controlled variations</li>
                <li>Verify signals</li>
                <li>Confirm with multiple checks</li>
              </ol>
            </section>

            <section id="prevent" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold tracking-tight text-white">
                How to Prevent SQL Injection (Best Practices)
              </h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-8 text-white/75">
                <li>
                  <strong>Always use parameterized queries</strong>
                </li>
                <li>
                  <strong>Use safe ORM patterns</strong> and treat raw SQL as high-risk
                </li>
                <li>
                  <strong>Validate input</strong>, but do not rely on validation alone
                </li>
                <li>
                  <strong>Least privilege for DB accounts</strong>
                </li>
                <li>
                  <strong>Handle errors safely</strong> (no raw SQL errors to users)
                </li>
                <li>
                  <strong>Defense in depth</strong> (WAF/RASP help, not primary fix)
                </li>
              </ul>
            </section>

            <section id="scale" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold tracking-tight text-white">Testing SQL Injection at Scale</h2>
              <p className="mt-4 text-base leading-8 text-white/75">
                At scale, SQLi testing is a reliability problem as much as a security problem due to dynamic
                rendering, WAF behavior, rate limits, caching layers, and unstable endpoints.
              </p>
              <p className="mt-4 text-base leading-8 text-white/75">
                A high-quality tester should run repeatable baselines, perform multi-step verification, score
                confidence, and reduce false positives while still finding real issues.
              </p>
            </section>

            <section id="sqlbots-fit" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold tracking-tight text-white">Where SQLBots Fits In</h2>
              <p className="mt-4 text-base leading-8 text-white/75">
                SQLBots is built around the idea that automation is only useful if validation is trustworthy. In
                practice:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-8 text-white/75">
                <li>
                  <strong>Response verification</strong> confirms signal consistency
                </li>
                <li>
                  <strong>Workflow automation</strong> scales without drowning teams in noise
                </li>
              </ul>
            </section>

            <section id="get-started" className="scroll-mt-24">
              <Card className="border-white/12 bg-white/[0.03] text-white shadow-none">
                <CardHeader>
                  <CardTitle className="text-2xl tracking-tight">Get Started</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base leading-8 text-white/75">
                    Run an automated SQL injection assessment with verification-first results.
                  </p>
                  <Link
                    href="https://dash.sqlbots.online/"
                    className="mt-6 inline-flex h-10 items-center rounded-lg bg-white px-4 text-sm font-medium text-black transition hover:bg-white/90"
                  >
                    Start with SQLBots (Dashboard)
                  </Link>
                </CardContent>
              </Card>
            </section>
          </article>

          <aside className="lg:pt-14">
            <Card className="border-white/12 bg-transparent text-white shadow-none lg:sticky lg:top-24">
              <CardHeader>
                <CardTitle className="text-base tracking-tight">Article Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <div>
                  <p className="flex items-center gap-2 text-xs uppercase tracking-[0.12em] text-white/45">
                    <Folder className="size-3.5" />
                    Category
                  </p>
                  <p className="mt-1 text-sm text-white/85">Security</p>
                </div>
                <div>
                  <p className="flex items-center gap-2 text-xs uppercase tracking-[0.12em] text-white/45">
                    <CalendarDays className="size-3.5" />
                    Published
                  </p>
                  <p className="mt-1 text-sm text-white/85">February 2026</p>
                </div>
                <div>
                  <p className="flex items-center gap-2 text-xs uppercase tracking-[0.12em] text-white/45">
                    <UserRound className="size-3.5" />
                    Author
                  </p>
                  <p className="mt-1 text-sm text-white/85">SQLBots Team</p>
                </div>
                <div>
                  <p className="flex items-center gap-2 text-xs uppercase tracking-[0.12em] text-white/45">
                    <Share2 className="size-3.5" />
                    Share
                  </p>
                  <div className="mt-2 flex flex-col gap-2 text-sm">
                    <Link
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(articleUrl)}&text=${encodeURIComponent("What Is SQL Injection?")}`}
                      target="_blank"
                      className="text-white/80 transition hover:text-white"
                    >
                      X / Twitter
                    </Link>
                    <Link
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(articleUrl)}`}
                      target="_blank"
                      className="text-white/80 transition hover:text-white"
                    >
                      LinkedIn
                    </Link>
                    <button type="button" onClick={handleCopyLink} className="text-left text-white/80 transition hover:text-white">
                      Copy Link
                    </button>
                    {copied ? <p className="text-xs text-white/55">Copied</p> : null}
                  </div>
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  )
}
