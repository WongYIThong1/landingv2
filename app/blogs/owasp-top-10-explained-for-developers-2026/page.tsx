"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays, Folder, Share2, UserRound } from "lucide-react"

export default function OwaspTop10ExplainedForDevelopers2026Page() {
  const articleUrl = "https://sqlbots.online/blogs/owasp-top-10-explained-for-developers-2026"
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
                OWASP Top 10 Explained for Developers (2026) - Practical, Not Textbook
              </h1>
              <p className="mt-5 text-base leading-8 text-white/75">
                The OWASP Top 10 is the most widely used north star for web application security.
              </p>
              <p className="mt-4 text-base leading-8 text-white/75">
                But most explanations are either too shallow or too academic. Developers need practical answers: what
                it looks like in a real codebase, how to spot it in review, and what to change this sprint.
              </p>
              <p className="mt-4 text-base leading-8 text-white/75">
                This article explains the <strong>latest OWASP Top 10:2025 list (current in 2026)</strong> in a
                developer-friendly way.
              </p>
              <p className="mt-4 rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3 text-sm leading-7 text-white/70">
                Important: This is defensive guidance for building and auditing secure applications.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-white">The 10-minute version</h2>
              <ol className="mt-4 list-decimal space-y-2 pl-5 text-base leading-8 text-white/75">
                <li>A01 Broken Access Control is still #1 because it is easy to ship and hard to test.</li>
                <li>Misconfiguration and supply chain risk are top-tier, not just ops issues.</li>
                <li>Injection is still here, but more contextual in APIs and dynamic query logic.</li>
                <li>Security fails when systems fail open.</li>
                <li>Logs are useless without alerting, searchability, and response workflows.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-white">What changed in the OWASP Top 10</h2>
              <p className="mt-4 text-base leading-8 text-white/75">What changed in 2026 reality is where teams get hurt most:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-8 text-white/75">
                <li>Configuration everywhere (cloud IAM, gateways, runtime policies)</li>
                <li>Dependencies everywhere (packages, containers, CI/CD tools)</li>
                <li>Stateful apps (tokens, multi-step flows, role-based screens)</li>
                <li>Production hides errors, making naive detection unreliable</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-white">A01: Broken Access Control</h2>
              <p className="mt-4 text-base leading-8 text-white/75">Users can do things they should not, across role and ownership boundaries.</p>
              <p className="mt-3 text-base leading-8 text-white/75"><strong>Code review red flags:</strong> ID-based endpoints without ownership checks, admin actions that only check isLoggedIn.</p>
              <p className="mt-3 text-base leading-8 text-white/75"><strong>Fix:</strong> central policy layer, default deny, role-boundary tests.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-white">A02: Security Misconfiguration</h2>
              <p className="mt-4 text-base leading-8 text-white/75">Security breaks because setup is wrong: debug mode, weak CORS, exposed storage, verbose errors.</p>
              <p className="mt-3 text-base leading-8 text-white/75"><strong>Fix:</strong> config as code, staging parity, automated checks for unsafe flags and exposures.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-white">A03: Software Supply Chain Failures</h2>
              <p className="mt-4 text-base leading-8 text-white/75">Build and dependency pipeline compromise through unpinned versions, weak CI permissions, and untrusted build steps.</p>
              <p className="mt-3 text-base leading-8 text-white/75"><strong>Fix:</strong> pin dependencies, generate SBOM, least-privilege CI tokens, signed releases.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-white">A04: Cryptographic Failures</h2>
              <p className="mt-4 text-base leading-8 text-white/75">Sensitive data exposure via weak hashing, poor key management, insecure token logic, and custom crypto mistakes.</p>
              <p className="mt-3 text-base leading-8 text-white/75"><strong>Fix:</strong> proven libraries, modern hashing, secure key storage and rotation.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-white">A05: Injection</h2>
              <p className="mt-4 text-base leading-8 text-white/75">Injection remains active in ORMs, dynamic filters, raw queries, and unsafe template output.</p>
              <p className="mt-3 text-base leading-8 text-white/75"><strong>Fix:</strong> parameterized queries, allowlists for dynamic identifiers, context-aware output encoding.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-white">A06: Insecure Design</h2>
              <p className="mt-4 text-base leading-8 text-white/75">Risk exists by design even when implementation is clean: weak workflow boundaries, missing rate limits, client-trusted state.</p>
              <p className="mt-3 text-base leading-8 text-white/75"><strong>Fix:</strong> lightweight threat modeling and security requirements during design.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-white">A07: Authentication Failures</h2>
              <p className="mt-4 text-base leading-8 text-white/75">Account takeover risks from weak reset flows, missing rate limits, session issues, and inconsistent MFA.</p>
              <p className="mt-3 text-base leading-8 text-white/75"><strong>Fix:</strong> protect reset flows, rotate sessions on privilege change, enforce MFA for privileged roles.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-white">A08: Software or Data Integrity Failures</h2>
              <p className="mt-4 text-base leading-8 text-white/75">Untrusted code/data treated as trusted through unsigned artifacts, unsafe modules, and deserialization risks.</p>
              <p className="mt-3 text-base leading-8 text-white/75"><strong>Fix:</strong> verify signatures/checksums and remove unsafe deserialization patterns.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-white">A09: Security Logging and Alerting Failures</h2>
              <p className="mt-4 text-base leading-8 text-white/75">Incidents go undetected when logs are incomplete, local-only, context-poor, and unalerted.</p>
              <p className="mt-3 text-base leading-8 text-white/75"><strong>Fix:</strong> centralize logs, standardize security events, and alert on high-risk patterns.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-white">A10: Mishandling of Exceptional Conditions</h2>
              <p className="mt-4 text-base leading-8 text-white/75">Security breaks under errors, partial failures, and resource exhaustion when systems fail open.</p>
              <p className="mt-3 text-base leading-8 text-white/75"><strong>Fix:</strong> global exception handling, fail-closed defaults, transaction rollback, quotas and timeouts.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-white">How to use OWASP Top 10 without paperwork</h2>
              <ol className="mt-4 list-decimal space-y-2 pl-5 text-base leading-8 text-white/75">
                <li>Map each category to your architecture</li>
                <li>Define small enforceable controls per category</li>
                <li>Automate config/dependency/secret/log checks</li>
                <li>Test workflows that matter (roles, money, exports, admin actions)</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-white">Sprint checklist: 20 practical changes</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-8 text-white/75">
                <li>Centralize authz checks and add role-boundary tests</li>
                <li>Disable debug in production and tighten CORS</li>
                <li>Pin dependencies, generate SBOM, enforce signed builds</li>
                <li>Upgrade password hashing and key handling</li>
                <li>Ban string-built SQL and allowlist dynamic identifiers</li>
                <li>Add threat modeling for new features</li>
                <li>Rate-limit auth paths and enforce privileged MFA</li>
                <li>Verify third-party artifacts and scripts</li>
                <li>Standardize security logging and alerts</li>
                <li>Enforce fail-closed and rollback patterns</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-white">FAQ</h2>
              <h3 className="mt-4 text-lg font-semibold text-white">Is OWASP Top 10 enough?</h3>
              <p className="mt-2 text-base leading-8 text-white/75">It is a strong priority map, not a full verification standard. Pair it with deeper controls and continuous testing.</p>
              <h3 className="mt-4 text-lg font-semibold text-white">How should startups use it?</h3>
              <p className="mt-2 text-base leading-8 text-white/75">Start with high-impact controls: access control, auth, dependency hygiene, secure config, and logging.</p>
              <h3 className="mt-4 text-lg font-semibold text-white">Why teams still get breached with a WAF?</h3>
              <p className="mt-2 text-base leading-8 text-white/75">Because WAF reduces risk but does not fix insecure code, misconfiguration, or broken workflows.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-white">References</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-8 text-white/75">
                <li>OWASP Top 10:2025 - https://owasp.org/Top10/2025/</li>
                <li>OWASP Cheat Sheet Series - https://cheatsheetseries.owasp.org/</li>
                <li>OWASP ASVS - https://github.com/OWASP/ASVS</li>
              </ul>
            </section>

            <section>
              <Card className="border-white/12 bg-white/[0.03] text-white shadow-none">
                <CardHeader>
                  <CardTitle className="text-2xl tracking-tight">Get Started</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base leading-8 text-white/75">
                    Run automated SQL security workflows with verification-first results.
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
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(articleUrl)}&text=${encodeURIComponent("OWASP Top 10 Explained for Developers (2026)")}`}
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
