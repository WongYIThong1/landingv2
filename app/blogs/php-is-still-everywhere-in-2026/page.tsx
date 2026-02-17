"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays, Folder, Share2, UserRound } from "lucide-react"

export default function PhpStillEverywhereBlogPage() {
  const articleUrl = "https://sqlbots.online/blogs/php-is-still-everywhere-in-2026"
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
                PHP Is Still Everywhere in 2026
              </h1>
              <p className="mt-5 text-base leading-8 text-white/75">
                People love to say &quot;PHP is dead.&quot; In 2026, that is simply not what the internet looks like.
              </p>
              <p className="mt-4 text-base leading-8 text-white/75">
                In real pentest work, especially when scanning broad asset inventories or testing customer-facing web
                apps, <strong>PHP is still one of the most common server-side stacks you will encounter</strong>. And
                because it powers huge plugin-driven ecosystems, it often comes with a <strong>wide attack surface</strong>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-white">How big is PHP in 2026?</h2>
              <p className="mt-4 text-base leading-8 text-white/75">
                Depending on how you measure, PHP remains dominant on the public web:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-8 text-white/75">
                <li>
                  <strong>~72%</strong> of websites with a known server-side language use PHP (W3Techs, checked Feb 17,
                  2026)
                </li>
                <li>
                  Version split among PHP sites (W3Techs, checked Feb 17, 2026): <strong>PHP 8 ~56.5%</strong>,{" "}
                  <strong>PHP 7 ~34.4%</strong>, <strong>PHP 5 ~9.0%</strong>
                </li>
              </ul>
              <p className="mt-4 text-base leading-8 text-white/75">
                Even if PHP 5 is a minority, it still represents a large amount of real-world targets.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-white">Where PHP shows up most in 2026</h2>
              <div className="mt-4 space-y-6 text-base leading-8 text-white/75">
                <div>
                  <h3 className="text-lg font-semibold text-white">1) WordPress and the plugin economy</h3>
                  <ul className="mt-3 list-disc space-y-2 pl-5">
                    <li>WordPress powers ~42.6% of all websites (W3Techs, checked Feb 17, 2026)</li>
                    <li>WooCommerce powers ~8.6% of all websites (W3Techs, checked Feb 17, 2026)</li>
                  </ul>
                  <p className="mt-3">
                    For pentesters, risk is usually in third-party plugins/themes, permission complexity, and update
                    hygiene, not just in the core platform.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    2) E-commerce platforms (Magento / Adobe Commerce)
                  </h3>
                  <p className="mt-2">
                    Share may be smaller than WordPress, but targets are often high-value due to payment flows,
                    customer data, and operational integrations.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    3) Traditional CMS in enterprise environments (e.g., Drupal)
                  </h3>
                  <p className="mt-2">
                    Long-lived deployments and complex role systems can lead to permission drift, legacy modules, and
                    persistent misconfiguration.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">4) Custom backends built on PHP frameworks</h3>
                  <p className="mt-2">
                    Laravel, Symfony, CodeIgniter, and Yii still power many internal portals and business-critical
                    apps.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-white">
                Why pentesting PHP systems is still essential in 2026
              </h2>
              <div className="mt-4 space-y-4 text-base leading-8 text-white/75">
                <p>
                  <strong>Version lifecycle creates patch gaps:</strong> EOL versions stop receiving security fixes and
                  amplify risk across frameworks and dependencies.
                </p>
                <p>
                  <strong>Plugin-driven ecosystems expand attack surface:</strong> dozens of components can introduce
                  weak routes, file handlers, APIs, and privilege checks.
                </p>
                <p>
                  <strong>Misconfiguration remains common:</strong> exposed environment files, debug mode, backups in
                  web root, directory listing, and sensitive logs are recurring root causes.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-white">
                A modern pentest checklist for PHP websites (2026)
              </h2>
              <p className="mt-4 text-base leading-8 text-white/75">
                Only test systems you are explicitly authorized to test.
              </p>
              <ol className="mt-4 list-decimal space-y-3 pl-5 text-base leading-8 text-white/75">
                <li>Fingerprinting and inventory across stack, versions, and external components</li>
                <li>Authentication and session security checks</li>
                <li>Authorization and business logic validation</li>
                <li>Input handling tests across risky endpoints</li>
                <li>File upload and media processing controls</li>
                <li>Dependency and supply chain review</li>
                <li>Configuration and operational exposure checks</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-white">The bottom line</h2>
              <p className="mt-4 text-base leading-8 text-white/75">
                <strong>PHP did not disappear. It became more ecosystem-driven.</strong> In 2026, effective pentesting
                is about mapping components, tracking lifecycle risk, auditing dependencies, validating authorization,
                and catching operational exposure.
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
                  <p className="mt-1 text-sm text-white/85">Industry</p>
                </div>
                <div>
                  <p className="flex items-center gap-2 text-xs uppercase tracking-[0.12em] text-white/45">
                    <CalendarDays className="size-3.5" />
                    Published
                  </p>
                  <p className="mt-1 text-sm text-white/85">January 2026</p>
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
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(articleUrl)}&text=${encodeURIComponent("PHP Is Still Everywhere in 2026")}`}
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
