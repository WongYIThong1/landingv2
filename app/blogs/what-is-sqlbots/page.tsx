"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays, Folder, Share2, UserRound } from "lucide-react"

export default function WhatIsSqlbotsBlogPage() {
  const articleUrl = "https://sqlbots.online/blogs/what-is-sqlbots"
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
                What Is SQLBots
              </h1>
              <p className="mt-5 text-base leading-8 text-white/75">
                <strong>SQLBots</strong> is an AI-powered platform that automates SQL security testing workflows from
                target input to <strong>verified findings</strong>, so security teams can detect SQL injection risks
                faster, with fewer false positives, and at scale.
              </p>
              <p className="mt-4 text-base leading-8 text-white/75">
                Modern web apps are dynamic, protected by WAFs, and full of noisy responses. SQLBots is built for that
                reality: <strong>automation + validation + scalable cloud execution</strong> in one workflow.
              </p>
            </section>

            <section id="what-is" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold tracking-tight text-white">What SQLBots Is</h2>
              <p className="mt-4 text-base leading-8 text-white/75">
                SQLBots is a <strong>workflow-first SQL security testing platform</strong>. Instead of running one-off
                checks and manually verifying results, SQLBots focuses on end-to-end automation:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-8 text-white/75">
                <li>
                  <strong>Scan</strong> targets and identify potential SQL injection signals
                </li>
                <li>
                  <strong>Verify</strong> responses using validation logic and confidence scoring
                </li>
                <li>
                  <strong>Extract & analyze</strong> structured results to help teams prioritize real risks
                </li>
                <li>
                  <strong>Run at scale</strong> using cloud execution built for high throughput
                </li>
              </ul>
            </section>

            <section id="who-for" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold tracking-tight text-white">Who SQLBots Is For</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-8 text-white/75">
                <li>
                  <strong>Security teams</strong> running ongoing vulnerability assessments
                </li>
                <li>
                  <strong>Bug bounty / pentest professionals</strong> testing authorized scopes
                </li>
                <li>
                  <strong>Engineering teams</strong> improving application security in CI/CD or scheduled audits
                </li>
                <li>
                  <strong>Security researchers</strong> who need repeatable workflows and clean evidence
                </li>
              </ul>
            </section>

            <section id="problem" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold tracking-tight text-white">
                The Problem: Why SQL Testing Is Hard at Scale
              </h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-8 text-white/75">
                <li>Pages and APIs change responses dynamically (A/B tests, personalization)</li>
                <li>WAF/bot protection introduces inconsistent behavior</li>
                <li>Rate limits and edge caching distort results</li>
                <li>
                  Many scanners produce <strong>false positives</strong> without robust verification
                </li>
              </ul>
            </section>

            <section id="automates" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold tracking-tight text-white">What SQLBots Automates</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-8 text-white/75">
                <li>
                  <strong>AI Injection Scanner</strong>: automatically executes SQL injection tests, adapts requests to
                  the target, and gathers response signals for multi-step verification.
                </li>
                <li>
                  <strong>Dumper (optional, authorized use only)</strong>: Extracts structured data outputs when
                  explicitly permitted
                </li>
                <li>
                  <strong>Dehasher (optional)</strong>: Helps teams assess exposure and password hygiene from
                  authorized sources
                </li>
                <li>
                  <strong>Proxyless Cloud Execution</strong>: Executes workflows at scale without paid proxies or
                  remote desktops
                </li>
              </ul>
            </section>

            <section id="engines" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold tracking-tight text-white">Core AI Engines in SQLBots</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-8 text-white/75">
                <li>
                  <strong>Strategy Engine</strong>
                </li>
                <li>
                  <strong>Payload Engine</strong>
                </li>
                <li>
                  <strong>Evasion Engine</strong>
                </li>
                <li>
                  <strong>AntiBan Engine</strong>
                </li>
              </ul>
            </section>

            <section id="capabilities" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold tracking-tight text-white">Key Capabilities</h2>
              <p className="mt-4 text-base leading-8 text-white/75">
                Verification-first results, high-throughput cloud execution, end-to-end workflow automation, and
                unified dashboard control.
              </p>
            </section>

            <section id="different" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold tracking-tight text-white">What Makes SQLBots Different</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-8 text-white/75">
                <li>
                  <strong>Finding real issues</strong>
                </li>
                <li>
                  <strong>Verifying signals at scale</strong>
                </li>
                <li>
                  <strong>Turning results into repeatable workflows</strong>
                </li>
              </ul>
            </section>

            <section id="responsible-use" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold tracking-tight text-white">Responsible Use & Authorization</h2>
              <p className="mt-4 text-base leading-8 text-white/75">
                SQLBots is intended for <strong>authorized security testing only</strong>: systems you own, systems you
                have explicit permission to test, and scopes that are legally and contractually approved.
              </p>
            </section>

            <section id="get-started" className="scroll-mt-24">
              <Card className="border-white/12 bg-white/[0.03] text-white shadow-none">
                <CardHeader>
                  <CardTitle className="text-2xl tracking-tight">Get Started</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base leading-8 text-white/75">
                    If you want SQL security testing that is faster, more repeatable, and easier to verify, SQLBots is
                    built for that.
                  </p>
                  <Link
                    href="https://dash.sqlbots.online/"
                    className="mt-6 inline-flex h-10 items-center rounded-lg bg-white px-4 text-sm font-medium text-black transition hover:bg-white/90"
                  >
                    Start a verified SQL security scan with SQLBots
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
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(articleUrl)}&text=${encodeURIComponent("What Is SQLBots")}`}
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
