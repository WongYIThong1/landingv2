"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays, Folder, Share2, UserRound } from "lucide-react"

export default function HowModernWafsDetectSqliPage() {
  const articleUrl = "https://sqlbots.online/blogs/how-modern-wafs-detect-sqli-2026"
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
                How Modern WAFs Detect SQL Injection (SQLi) in 2026
              </h1>
              <p className="mt-5 text-base leading-8 text-white/75">
                Web Application Firewalls (WAFs) used to be simple: match a few bad strings, block the request.
              </p>
              <p className="mt-4 text-base leading-8 text-white/75">In 2026, that is not how serious defenses work.</p>
              <p className="mt-4 text-base leading-8 text-white/75">
                Modern WAFs combine <strong>request parsing</strong>, <strong>context awareness</strong>, and <strong>behavior scoring</strong> across sessions and routes. They do not just ask "does this request contain a suspicious keyword?" They ask:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-8 text-white/75">
                <li>Does this request look like a real user?</li>
                <li>Does this parameter look like it should contain SQL?</li>
                <li>Is this traffic pattern consistent with automation?</li>
                <li>Does this request deviate from the normal shape of this endpoint?</li>
              </ul>
              <p className="mt-4 text-base leading-8 text-white/75">
                This article explains how modern WAFs detect SQLi at a conceptual level, useful for defenders, auditors, and anyone doing <strong>authorized</strong> security testing.
              </p>
              <p className="mt-4 rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3 text-sm leading-7 text-white/70">
                Note: This is defensive information. Do not use it to attack systems you do not own or have explicit permission to test.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-white">1) Detection moved from signatures to signals</h2>
              <h3 className="mt-4 text-lg font-semibold text-white">Old model: keyword matching</h3>
              <p className="mt-3 text-base leading-8 text-white/75">Classic WAF logic focused on blocking obvious patterns:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-8 text-white/75">
                <li>SQL keywords in parameters</li>
                <li>Common operators and comment markers</li>
                <li>Known payload fragments</li>
              </ul>
              <p className="mt-3 text-base leading-8 text-white/75">That approach still exists, but alone it produces high false positives and false negatives.</p>
              <h3 className="mt-5 text-lg font-semibold text-white">Modern model: multi-signal scoring</h3>
              <p className="mt-3 text-base leading-8 text-white/75">Modern WAFs combine many signals into a decision, often a risk score:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-8 text-white/75">
                <li>Content signals (pattern + syntax)</li>
                <li>Protocol validity (is the request well-formed?)</li>
                <li>Endpoint context (what is this parameter supposed to be?)</li>
                <li>Behavior signals (how the client behaves over time)</li>
                <li>Reputation signals (is this client known-bad?)</li>
              </ul>
              <p className="mt-3 text-base leading-8 text-white/75">Instead of block if keyword exists, it is often allow, challenge, throttle, or block based on confidence.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-white">2) Canonicalization: WAFs normalize inputs before analyzing</h2>
              <p className="mt-4 text-base leading-8 text-white/75">Modern WAFs typically normalize request data before detection:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-8 text-white/75">
                <li>URL decoding and repeated decoding safety</li>
                <li>Unicode normalization</li>
                <li>Decoding common content encodings within policy</li>
                <li>Normalization of whitespace and separators</li>
                <li>Consistent parsing of JSON, form bodies, query strings</li>
              </ul>
              <p className="mt-3 text-base leading-8 text-white/75">Detection happens on normalized representation, not only raw bytes.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-white">3) Context-aware parsing: Does SQL even belong here?</h2>
              <p className="mt-4 text-base leading-8 text-white/75">A major upgrade in WAF effectiveness comes from understanding parameter intent.</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-8 text-white/75">
                <li>`page=2` is numeric</li>
                <li>`sort=price_desc` should match an allowlist</li>
                <li>`id=123` should be strict integer</li>
                <li>JSON bodies should match expected schema</li>
              </ul>
              <p className="mt-3 text-base leading-8 text-white/75">Modern WAFs use type expectations, length bounds, shape checks, and schema-aware validation.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-white">4) Behavioral detection: automation stands out</h2>
              <p className="mt-4 text-base leading-8 text-white/75">Many SQLi attempts fail because the WAF flags the client as a bot before deep payload analysis.</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-8 text-white/75">
                <li>Request rate and burst patterns</li>
                <li>Navigation realism</li>
                <li>Header consistency and fingerprint stability</li>
                <li>Cookie and session continuity</li>
                <li>Human timing vs machine timing</li>
              </ul>
              <p className="mt-3 text-base leading-8 text-white/75">Not every block looks like a block. Distinguish not vulnerable, blocked/challenged, and rate-limited.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-white">5) Cross-request correlation: one request is rarely enough</h2>
              <p className="mt-4 text-base leading-8 text-white/75">Modern WAFs correlate patterns across session, IP range, identity or cookie, device fingerprint, and routes.</p>
              <p className="mt-3 text-base leading-8 text-white/75">Spraying payloads quickly usually lowers signal quality because it triggers automation scoring.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-white">6) Deep inspection for APIs: JSON and GraphQL changed the game</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-8 text-white/75">
                <li>JSON bodies and nested fields</li>
                <li>GraphQL queries and variables</li>
                <li>REST endpoints with structured payloads</li>
              </ul>
              <p className="mt-3 text-base leading-8 text-white/75">APIs allow stronger checks: schema expectations, allowlists, depth/size controls, and anomaly detection.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-white">7) Anomaly detection: this endpoint never looked like that before</h2>
              <p className="mt-4 text-base leading-8 text-white/75">Some WAFs build baselines and flag deviations in parameters, entropy, header/content combinations, and route-level spikes.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-white">8) Response-aware signals: confirmation without leaking details</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-8 text-white/75">
                <li>Consistent error patterns without stack traces</li>
                <li>Status code changes across similar requests</li>
                <li>Redirect behavior anomalies</li>
              </ul>
              <p className="mt-3 text-base leading-8 text-white/75">Modern systems often hide errors, so simplistic error-string detection is unreliable.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-white">9) Why WAFs still are not a complete SQLi solution</h2>
              <p className="mt-4 text-base leading-8 text-white/75">WAFs are a risk-reduction layer, not the core fix.</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-8 text-white/75">
                <li>Parameterized queries</li>
                <li>Strict input validation</li>
                <li>Least-privilege database accounts</li>
                <li>Safe error handling</li>
                <li>Secure-by-design data access layers</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-white">What this means for pentesting in 2026</h2>
              <ol className="mt-4 list-decimal space-y-3 pl-5 text-base leading-8 text-white/75">
                <li>Treat blocked as its own outcome</li>
                <li>Test the real application surface</li>
                <li>Use verification-driven conclusions</li>
                <li>Report in a way developers can fix</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-white">Closing thought</h2>
              <p className="mt-4 text-base leading-8 text-white/75">
                Modern WAFs detect SQLi by combining normalized parsing, context validation, and behavior scoring.
                Reliable outcomes need state-aware coverage, behavior-aware interpretation, and verification-first verdicts.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-white">Optional CTA</h2>
              <p className="mt-4 text-base leading-8 text-white/75">If your workflow includes frequent SQLi testing across many targets, use pipelines that:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-8 text-white/75">
                <li>Classify outcomes (blocked vs not vulnerable)</li>
                <li>Verify findings instead of guessing</li>
                <li>Handle authenticated APIs and real workflows</li>
                <li>Scale execution with clear telemetry</li>
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
                  <p className="mt-1 text-sm text-white/85">Defense</p>
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
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(articleUrl)}&text=${encodeURIComponent("How Modern WAFs Detect SQL Injection (SQLi) in 2026")}`}
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
