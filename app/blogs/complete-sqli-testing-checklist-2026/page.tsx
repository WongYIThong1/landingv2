"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays, Folder, Share2, UserRound } from "lucide-react"

export default function CompleteSqliTestingChecklistPage() {
  const articleUrl = "https://sqlbots.online/blogs/complete-sqli-testing-checklist-2026"
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
                Complete SQL Injection Testing Checklist (2026)
              </h1>
              <p className="mt-5 text-base leading-8 text-white/75">
                SQL injection (SQLi) is still one of the highest-impact web risks in 2026, not because teams do not
                know it exists, but because modern apps are complex.
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-8 text-white/75">
                <li>API-first architectures (REST/GraphQL)</li>
                <li>Authentication-heavy workflows</li>
                <li>Layered defenses (WAF/CDN/bot controls)</li>
                <li>Multi-service data access paths (microservices, queues, serverless)</li>
              </ul>
              <p className="mt-4 text-base leading-8 text-white/75">
                That complexity creates blind spots. A reliable SQLi assessment is less about trying lots of payloads
                and more about <strong>coverage, verification, and evidence</strong>.
              </p>
              <p className="mt-4 rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3 text-sm leading-7 text-white/70">
                Important: Use this checklist only for systems you explicitly own or have written permission to test.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-white">What this checklist is (and is not)</h2>
              <p className="mt-4 text-base leading-8 text-white/75">This is a professional, defensive checklist for authorized testing. It focuses on:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-8 text-white/75">
                <li>Mapping the real attack surface</li>
                <li>Testing the right places including authenticated flows</li>
                <li>Separating blocked from safe outcomes</li>
                <li>Verifying findings to reduce false positives</li>
                <li>Producing remediation-ready outputs</li>
              </ul>
              <p className="mt-4 text-base leading-8 text-white/75">It does not include weaponized payloads or exploitation instructions.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-white">Phase 0 - Scope and safety</h2>
              <ul className="mt-4 list-none space-y-2 pl-0 text-base leading-8 text-white/75">
                <li> Written authorization exists (scope, dates, targets, allowed methods).</li>
                <li> Identify data sensitivity (PII, credentials, payment, health, internal secrets).</li>
                <li> Define test boundaries (production vs staging, rate limits, time windows).</li>
                <li> Confirm no destructive actions unless explicitly approved.</li>
                <li> Establish incident contact path.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-white">Phase 1 - Inventory the real attack surface</h2>
              <h3 className="mt-4 text-lg font-semibold text-white">1.1 App topology and data flows</h3>
              <ul className="mt-3 list-none space-y-2 pl-0 text-base leading-8 text-white/75">
                <li> List all entry points: web app, API, mobile API, admin portal, partner endpoints.</li>
                <li> Identify data access paths across services and databases.</li>
                <li> Note middleware layers: CDN, WAF, reverse proxy, API gateway.</li>
                <li> Identify workers and queues that write to DB.</li>
              </ul>
              <h3 className="mt-5 text-lg font-semibold text-white">1.2 Authentication and roles</h3>
              <ul className="mt-3 list-none space-y-2 pl-0 text-base leading-8 text-white/75">
                <li> Enumerate roles (guest, user, staff, admin, support, vendor).</li>
                <li> Confirm session/token model (cookies, JWT, OAuth, API keys).</li>
                <li> Collect test accounts per role.</li>
              </ul>
              <h3 className="mt-5 text-lg font-semibold text-white">1.3 Endpoint and parameter map</h3>
              <ul className="mt-3 list-none space-y-2 pl-0 text-base leading-8 text-white/75">
                <li> URL and method</li>
                <li> Content type</li>
                <li> Auth requirement</li>
                <li> Parameter locations</li>
                <li> Type expectations</li>
              </ul>
              <p className="mt-4 text-base leading-8 text-white/75">High-value endpoints to always include:</p>
              <ul className="mt-3 list-none space-y-2 pl-0 text-base leading-8 text-white/75">
                <li> Search, filters, sorting, pagination</li>
                <li> Reports, exports, imports</li>
                <li> Admin settings panels</li>
                <li> Checkout or billing flows</li>
                <li> Advanced query features</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-white">Phase 2 - Baseline behavior and defensive controls</h2>
              <h3 className="mt-4 text-lg font-semibold text-white">2.1 Establish baseline responses</h3>
              <ul className="mt-3 list-none space-y-2 pl-0 text-base leading-8 text-white/75">
                <li> Record normal request and response per endpoint.</li>
                <li> Capture status, response shape, timing range, and error behavior.</li>
                <li> Note caching behavior and headers.</li>
              </ul>
              <h3 className="mt-5 text-lg font-semibold text-white">2.2 Detect blocked vs safe outcomes</h3>
              <ul className="mt-3 list-none space-y-2 pl-0 text-base leading-8 text-white/75">
                <li> Identify challenge, redirect, 403/429/503, and soft-block patterns.</li>
                <li> Track rate limits by IP, session, and route.</li>
                <li> Confirm degraded or empty response behavior.</li>
              </ul>
              <p className="mt-4 text-base leading-8 text-white/75">
                Rule: clean scan output is meaningless unless you can prove you tested the application, not just the WAF.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-white">Phase 3 - SQLi risk hotspots</h2>
              <h3 className="mt-4 text-lg font-semibold text-white">3.1 High-risk query construction patterns</h3>
              <ul className="mt-3 list-none space-y-2 pl-0 text-base leading-8 text-white/75">
                <li> Dynamic ORDER BY and column selection</li>
                <li> Flexible combined filtering</li>
                <li> Search everywhere features</li>
                <li> Report builders with custom grouping/sorting</li>
                <li> Raw SQL used for performance quick fixes</li>
              </ul>
              <h3 className="mt-5 text-lg font-semibold text-white">3.2 Business logic areas with hidden parameters</h3>
              <ul className="mt-3 list-none space-y-2 pl-0 text-base leading-8 text-white/75">
                <li> ID-driven admin actions</li>
                <li> Bulk operations</li>
                <li> Webhook receivers</li>
                <li> Import flows mapping into DB</li>
              </ul>
              <h3 className="mt-5 text-lg font-semibold text-white">3.3 API-first attack surface</h3>
              <ul className="mt-3 list-none space-y-2 pl-0 text-base leading-8 text-white/75">
                <li> REST endpoints with nested JSON filters</li>
                <li> GraphQL queries and variables</li>
                <li> Internal dashboard APIs</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-white">Phase 4 - Testing methodology (verification-first)</h2>
              <p className="mt-4 text-base leading-8 text-white/75">Outcomes per endpoint should be one of:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-8 text-white/75">
                <li>Not vulnerable (with evidence)</li>
                <li>Potentially vulnerable (needs follow-up)</li>
                <li>Blocked/challenged/rate-limited</li>
                <li>Inconclusive</li>
              </ul>
              <h3 className="mt-5 text-lg font-semibold text-white">4.1 Test planning</h3>
              <ul className="mt-3 list-none space-y-2 pl-0 text-base leading-8 text-white/75">
                <li> Confirm parameter intent and constraints.</li>
                <li> Choose safe strategy per endpoint type.</li>
                <li> Keep request patterns realistic.</li>
              </ul>
              <h3 className="mt-5 text-lg font-semibold text-white">4.2 Evidence and verification requirements</h3>
              <ul className="mt-3 list-none space-y-2 pl-0 text-base leading-8 text-white/75">
                <li> Repeatability under controlled retries</li>
                <li> Control comparison with benign variants</li>
                <li> Multi-signal validation (shape, code, content, timing)</li>
                <li> Confirm behavior comes from app, not WAF/cache</li>
              </ul>
              <h3 className="mt-5 text-lg font-semibold text-white">4.3 False-positive traps</h3>
              <ul className="mt-3 list-none space-y-2 pl-0 text-base leading-8 text-white/75">
                <li> CDN/full-page cache artifacts</li>
                <li> Templated error pages</li>
                <li> Timeout/autoscaling timing noise</li>
                <li> Bot-protection content variance</li>
              </ul>
              <h3 className="mt-5 text-lg font-semibold text-white">4.4 Coverage across roles and states</h3>
              <ul className="mt-3 list-none space-y-2 pl-0 text-base leading-8 text-white/75">
                <li> Unauthenticated and authenticated routes</li>
                <li> Multiple roles</li>
                <li> Real workflows</li>
                <li> Different data states and edge cases</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-white">Phase 5 - Impact analysis</h2>
              <ul className="mt-4 list-none space-y-2 pl-0 text-base leading-8 text-white/75">
                <li> Data exposure scope and affected records</li>
                <li> Privilege context of affected endpoint</li>
                <li> Write/modification risk</li>
                <li> Lateral movement potential via exposed secrets</li>
                <li> Compliance impact</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-white">Phase 6 - Report like a professional</h2>
              <p className="mt-4 text-base leading-8 text-white/75">For each finding include:</p>
              <ul className="mt-3 list-none space-y-2 pl-0 text-base leading-8 text-white/75">
                <li> Summary and risk rationale</li>
                <li> Affected endpoints and parameters</li>
                <li> Preconditions and required role/config</li>
                <li> Safe evidence with timestamps</li>
                <li> Reproduction steps (high-level and safe)</li>
                <li> Severity and business impact</li>
                <li> Concrete remediation</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-white">Phase 7 - Remediation checklist</h2>
              <h3 className="mt-4 text-lg font-semibold text-white">7.1 Code-level fixes</h3>
              <ul className="mt-3 list-none space-y-2 pl-0 text-base leading-8 text-white/75">
                <li> Parameterized queries everywhere</li>
                <li> No SQL string concatenation from user input</li>
                <li> Allowlists for enums, sorting keys, column identifiers</li>
                <li> Centralized safe query-building patterns</li>
              </ul>
              <h3 className="mt-5 text-lg font-semibold text-white">7.2 App-level hardening</h3>
              <ul className="mt-3 list-none space-y-2 pl-0 text-base leading-8 text-white/75">
                <li> Strict type and bounds validation</li>
                <li> Safe error handling</li>
                <li> Least-privilege DB accounts</li>
                <li> Monitoring suspicious query and endpoint usage</li>
              </ul>
              <h3 className="mt-5 text-lg font-semibold text-white">7.3 WAF positioning</h3>
              <ul className="mt-3 list-none space-y-2 pl-0 text-base leading-8 text-white/75">
                <li> WAF for defense-in-depth, not replacement for secure code</li>
                <li> Ensure WAF parsing matches app parsing</li>
                <li> Expose blocked/challenged telemetry</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-white">Phase 8 - Continuous SQLi testing</h2>
              <ul className="mt-4 list-none space-y-2 pl-0 text-base leading-8 text-white/75">
                <li> Add regression tests for sensitive endpoints</li>
                <li> Re-test after framework upgrades and major releases</li>
                <li> Monitor for new endpoints and parameters</li>
                <li> Track verdict trends over time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-white">Quick worksheet</h2>
              <p className="mt-4 text-base leading-8 text-white/75"><strong>Target</strong></p>
              <ul className="list-none space-y-1 pl-0 text-base leading-8 text-white/75">
                <li>Domain/App:</li>
                <li>Environment:</li>
                <li>WAF/CDN:</li>
              </ul>
              <p className="mt-4 text-base leading-8 text-white/75"><strong>Auth and roles</strong></p>
              <ul className="list-none space-y-1 pl-0 text-base leading-8 text-white/75">
                <li>Roles tested:</li>
                <li>Login methods:</li>
              </ul>
              <p className="mt-4 text-base leading-8 text-white/75"><strong>High-value endpoints covered</strong></p>
              <ul className="list-none space-y-1 pl-0 text-base leading-8 text-white/75">
                <li>Search/filters:</li>
                <li>Sorting/pagination:</li>
                <li>Reports/exports:</li>
                <li>Admin settings:</li>
                <li>APIs (REST/GraphQL):</li>
              </ul>
              <p className="mt-4 text-base leading-8 text-white/75"><strong>Outcomes</strong></p>
              <ul className="list-none space-y-1 pl-0 text-base leading-8 text-white/75">
                <li>Confirmed vulnerabilities:</li>
                <li>Blocked/challenged endpoints:</li>
                <li>Inconclusive endpoints:</li>
              </ul>
              <p className="mt-4 text-base leading-8 text-white/75"><strong>Top remediation actions</strong></p>
              <ol className="list-decimal space-y-1 pl-5 text-base leading-8 text-white/75">
                <li></li>
                <li></li>
                <li></li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-white">Closing thought</h2>
              <p className="mt-4 text-base leading-8 text-white/75">
                In 2026, reliable SQL injection testing is less about finding one payload and more about reaching the
                real attack surface, interpreting defenses correctly, and verifying outcomes with repeatable evidence.
              </p>
              <p className="mt-4 text-base leading-8 text-white/75">
                Use this checklist to make SQLi assessments consistent, defensible, and actionable.
              </p>
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
                  <p className="mt-1 text-sm text-white/85">Checklist</p>
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
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(articleUrl)}&text=${encodeURIComponent("Complete SQL Injection Testing Checklist (2026)")}`}
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
