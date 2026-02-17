"use client";

import { useEffect, useState } from "react";
import { GlobeDemo } from "@/components/ui/globe-demo";
import { TypingAnimation } from "@/registry/magicui/typing-animation";
import { FeatureCard } from "@/components/optimization-card";
import { EngineCard } from "@/components/engine-card";
import { HubLines } from "@/components/hub-lines";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { NumberTicker } from "@/registry/magicui/number-ticker";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  const [typingDone, setTypingDone] = useState(false);
  const [showGlobe, setShowGlobe] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const idleWindow = window as Window & {
      requestIdleCallback?: (
        callback: IdleRequestCallback,
        options?: IdleRequestOptions,
      ) => number;
      cancelIdleCallback?: (handle: number) => void;
    };

    const preloadGlobeBundle = async () => {
      try {
        await import("@/components/ui/globe");
      } catch {
        // Ignore preloading errors and let runtime lazy-load when needed.
      }
    };

    const runPreload = () => {
      if (!cancelled) {
        void preloadGlobeBundle();
      }
    };

    let idleHandle: number | undefined;
    let timeoutHandle: number | undefined;

    if (idleWindow.requestIdleCallback) {
      idleHandle = idleWindow.requestIdleCallback(() => {
        runPreload();
      }, { timeout: 1200 });
    } else {
      timeoutHandle = window.setTimeout(runPreload, 220);
    }

    return () => {
      cancelled = true;
      if (idleHandle !== undefined) {
        idleWindow.cancelIdleCallback?.(idleHandle);
      }
      if (timeoutHandle !== undefined) {
        window.clearTimeout(timeoutHandle);
      }
    };
  }, []);

  useEffect(() => {
    if (!typingDone) {
      return;
    }
    setShowGlobe(true);
  }, [typingDone]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="mx-auto w-full max-w-[1400px] px-5 pb-10 pt-12 sm:pt-14 md:px-10 md:pt-16 lg:px-20 lg:pt-20">
        <section id="page1" className="w-full lg:grid lg:grid-cols-[minmax(0,1.2fr)_minmax(480px,0.8fr)] lg:items-start lg:gap-8">
          <div className="w-full max-w-4xl">
            <p className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.03] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-white/60">
              AI SQL Security Automation Platform
            </p>

            <h1 className="mt-3 text-[clamp(1.6rem,3.6vw,3rem)] font-semibold leading-[1.1] tracking-tight text-white">
              <TypingAnimation animationKey="hero-headline-v3" onComplete={() => setTypingDone(true)}>
                Smarter SQL security testing with automated verification.
              </TypingAnimation>
            </h1>

            <div className="mt-4 space-y-2.5 text-[clamp(0.88rem,1.05vw,0.98rem)] leading-6 text-white/72">
              <p className="flex items-start gap-2.5">
                <svg viewBox="0 0 24 24" className="mt-1 h-4 w-4 shrink-0 text-white/85" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 18V5" />
                  <path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4" />
                  <path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5" />
                  <path d="M17.997 5.125a4 4 0 0 1 2.526 5.77" />
                  <path d="M18 18a4 4 0 0 0 2-7.464" />
                  <path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517" />
                  <path d="M6 18a4 4 0 0 1-2-7.464" />
                  <path d="M6.003 5.125a4 4 0 0 0-2.526 5.77" />
                </svg>
                <span>
                  <span className="mr-1 text-[1em] font-extrabold text-white">AI-powered</span> - automatic payload selection and verification.
                </span>
              </p>
              <p className="flex items-start gap-2.5">
                <svg viewBox="0 0 24 24" className="mt-1 h-4 w-4 shrink-0 text-white/85" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 10V7a5 5 0 0 1 10 0v3" />
                  <rect x="4" y="10" width="16" height="10" rx="2" />
                </svg>
                <span>
                  <span className="mr-1 text-[1em] font-extrabold text-white">Proxyless</span> - no paid proxies or RDP needed.
                </span>
              </p>
              <p className="flex items-start gap-2.5">
                <svg viewBox="0 0 24 24" className="mt-1 h-4 w-4 shrink-0 text-white/85" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M8 10h8" />
                  <path d="M8 14h5" />
                </svg>
                <span>
                  <span className="mr-1 text-[1em] font-extrabold text-white">End-to-end</span> - from target input to final output.
                </span>
              </p>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              <a
                href="#"
                className="inline-flex h-8 items-center justify-center rounded-lg bg-white px-3.5 text-[13px] font-medium text-black transition hover:bg-white/90"
              >
                Get Started Now
              </a>
              <a
                href="#"
                className="inline-flex h-8 items-center justify-center rounded-lg border border-white/20 px-3.5 text-[13px] font-medium text-white/85 transition hover:bg-white/10 hover:text-white"
              >
                Learnmore
              </a>
            </div>
          </div>

          <aside
            className="mt-8 w-full max-w-[560px] transform-gpu transition-all duration-700 ease-out lg:mt-0 lg:translate-x-10 xl:translate-x-16"
          >
            <div
              className={`transition-all duration-700 ease-out ${showGlobe ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
                }`}
            >
              {showGlobe ? (
                <GlobeDemo />
              ) : (
                <div className="h-[360px] w-full sm:h-[420px] lg:h-[460px]" aria-hidden />
              )}
            </div>
          </aside>
        </section>

        <section className="w-full border-b border-white/5 py-24" id="page2">
          <div className="mx-auto grid w-full max-w-7xl grid-cols-2 gap-y-16 px-4 sm:grid-cols-4 lg:px-8">
            {[
              { label: "Vuln Detected", value: 165, suffix: "k+" },
              { label: "Databases Dumped", value: 13, suffix: "k+" },
              { label: "Injection Accuracy", value: 92, suffix: "%" },
              { label: "Uptime", value: 100, suffix: "%" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center justify-center ${index !== 3 ? 'sm:border-r sm:border-white/10' : ''}`}
              >
                <div className="flex items-baseline text-4xl font-bold tracking-tight text-white leading-none">
                  <NumberTicker value={stat.value} />
                  <span>{stat.suffix}</span>
                </div>
                <div className="mt-4 text-[11px] font-medium uppercase tracking-widest text-white/50">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-32 w-full max-w-7xl px-4 text-center">
            <p className="inline-flex items-baseline gap-2 whitespace-nowrap">
              <span className="text-[clamp(1.5rem,2.5vw,2rem)] font-semibold leading-tight tracking-tight text-white">
                What&apos;s in SQLbots?
              </span>
              <span className="text-[clamp(1rem,1.5vw,1.2rem)] font-normal text-white/60">
                Everything you need for automated SQL security testing.
              </span>
            </p>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 text-left">
              <FeatureCard
                title="AI-Powered SQL Injection Detection"
                subtitle="AI automatically tests targets, analyzes responses, and confirms real SQL vulnerabilities."
              />
              <FeatureCard
                title="Fully Cloud-Executed Testing"
                subtitle="Run everything in the cloud — no RDP, no proxies, no setup required."
              />
              <FeatureCard
                title="User-Friendly"
                subtitle="Launch powerful SQL injection testing with zero setup, no proxy configuration, and no manual AI tuning required."
              />
            </div>
          </div>
        </section>

        <section id="page3" className="w-full py-24 border-b border-white/5">
          <div className="mx-auto w-full max-w-[1600px] px-6">
            <h2 className="text-[clamp(1.4rem,2.2vw,1.8rem)] font-bold tracking-tight text-white mb-20 text-center">
              The AI Engines Behind SQLBots
            </h2>

            <div className="relative mx-auto mt-20">
              <HubLines />
              {/* Central Hub - Compact AI Engine Hub */}
              <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 items-center justify-center">
                <div className="px-6 py-3 rounded-xl border border-white/20 bg-zinc-900/90 backdrop-blur-xl shadow-2xl flex items-center gap-2.5 transition-all duration-300 hover:border-white/30">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/50">
                    <rect width="16" height="16" x="4" y="4" rx="2" /><rect width="6" height="6" x="9" y="9" rx="1" /><path d="M15 2v2" /><path d="M15 20v2" /><path d="M2 15h2" /><path d="M2 9h2" /><path d="M20 15h2" /><path d="M20 9h2" /><path d="M9 2v2" /><path d="M9 20v2" />
                  </svg>
                  <span className="text-sm font-bold tracking-[0.2em] text-white">
                    AI ENGINE
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-x-[30%] gap-y-24 sm:grid-cols-2 whitespace-normal">
                {/* Top Left */}
                <EngineCard
                  title="Strategy Engine"
                  subtitle="Automatically determines what to do next at every stage of the attack lifecycle."
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 18V5m3 8a4.17 4.17 0 0 1-3-4a4.17 4.17 0 0 1-3 4m8.598-6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5" />
                      <path d="M17.997 5.125a4 4 0 0 1 2.526 5.77" />
                      <path d="M18 18a4 4 0 0 0 2-7.464" />
                      <path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517" />
                      <path d="M6 18a4 4 0 0 1-2-7.464" />
                      <path d="M6.003 5.125a4 4 0 0 0-2.526 5.77" />
                    </svg>
                  }
                />
                {/* Top Right */}
                <EngineCard
                  title="Evasion Engine"
                  subtitle="Automatically finds ways around WAFs and security protections using AI."
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="18" height="18" x="3" y="3" rx="2" /><path d="M12 9v6m4 0v6m0-18v6M3 15h18M3 9h18M8 15v6M8 3v6" />
                    </svg>
                  }
                />

                {/* Mobile version of Central Hub */}
                <div className="lg:hidden flex justify-center py-8">
                  <div className="px-6 py-3 rounded-lg border border-white/20 bg-zinc-900/90 flex items-center gap-2.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/50">
                      <rect width="16" height="16" x="4" y="4" rx="2" /><rect width="6" height="6" x="9" y="9" rx="1" /><path d="M15 2v2" /><path d="M15 20v2" /><path d="M2 15h2" /><path d="M2 9h2" /><path d="M20 15h2" /><path d="M20 9h2" /><path d="M9 2v2" /><path d="M9 20v2" />
                    </svg>
                    <span className="text-xs font-bold tracking-widest text-white">
                      AI ENGINE
                    </span>
                  </div>
                </div>

                {/* Bottom Left */}
                <EngineCard
                  title="AntiBan Engine"
                  subtitle="AI monitors target responses and adjusts behavior to prevent blocks."
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path fill="none" d="m2 2l20 20M5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01c2.35-.82 4.48-1.97 5.9-3.71M9.309 3.652A12.3 12.3 0 0 0 11.24 2.28a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7a10 10 0 0 1-.08 1.264" />
                    </svg>
                  }
                />
                {/* Bottom Right */}
                <EngineCard
                  title="Payload Engine"
                  subtitle="AI automatically generates optimized SQL injection payloads for the target."
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="13" r="9" /><path d="M14.35 4.65L16.3 2.7a2.41 2.41 0 0 1 3.4 0l1.6 1.6a2.4 2.4 0 0 1 0 3.4l-1.95 1.95M22 2l-1.5 1.5" />
                    </svg>
                  }
                />
                <EngineCard
                  title="AI Preset Analysis"
                  subtitle="Smart presets automatically detect valuable data patterns."
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 3h18v18H3z" />
                      <path d="M7 8h10" />
                      <path d="M7 12h6" />
                      <path d="M7 16h8" />
                    </svg>
                  }
                />
                <EngineCard
                  title="AI Website Classification"
                  subtitle="Automatically analyzes the target and identifies the website type"
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M3 12h18" />
                      <path d="M12 3c3 3 3 15 0 18" />
                      <path d="M12 3c-3 3-3 15 0 18" />
                    </svg>
                  }
                />
              </div>
            </div>
          </div>
        </section>

        <section id="page4" className="w-full py-24 border-b border-white/5 min-h-[600px]">
          <div className="mx-auto w-full max-w-[980px] px-6">
            <p className="mb-5 text-center text-3xl font-bold tracking-tight text-white" style={{ fontFamily: "Inter, sans-serif" }}>
              Preview
            </p>
            <div className="min-h-[520px] overflow-hidden rounded-xl">
              <img
                src="https://ubyttekkpuihhbkogznd.supabase.co/storage/v1/object/public/avatars/renw.png"
                alt="Dashboard preview"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section id="faq" className="w-full py-24 border-b border-white/5">
          <div className="mx-auto w-full max-w-5xl px-6">
            <h2 className="text-[clamp(1.4rem,2.2vw,1.8rem)] font-bold tracking-tight text-white text-center">
              F.A.Q
            </h2>
            <Accordion
              type="single"
              collapsible
              defaultValue="infra"
              className="mx-auto mt-12 w-full max-w-3xl rounded-2xl border border-white/10 bg-white/[0.02] px-6"
            >
              <AccordionItem value="infra" className="border-white/10">
                <AccordionTrigger className="text-left text-white">Do I need proxies, servers, or RDP to run SQLBots?</AccordionTrigger>
                <AccordionContent className="text-white/65">
                  No. SQLBots runs fully in the cloud. You simply submit a target and the automated workflow handles everything.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="speed" className="border-white/10">
                <AccordionTrigger className="text-left text-white">How fast are scans and dumps?</AccordionTrigger>
                <AccordionContent className="text-white/65">
                  SQLBots uses high-throughput cloud execution designed for large-scale automated testing. Performance metrics such as requests per second and workflow speed are monitored in real time.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="difference" className="border-white/10">
                <AccordionTrigger className="text-left text-white">How is SQLBots different from traditional SQL testing tools?</AccordionTrigger>
                <AccordionContent className="text-white/65">
                  Traditional tools require manual payload tuning and proxy setups. SQLBots uses multiple AI engines to automatically generate payloads, avoid bans, bypass protections, and optimize extraction. This reduces false positives and manual effort.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="beginners" className="border-white/10">
                <AccordionTrigger className="text-left text-white">Can beginners use SQLBots?</AccordionTrigger>
                <AccordionContent className="text-white/65">
                  Yes. SQLBots is designed to automate complex SQL testing tasks. Even users without deep experience can run workflows and analyze results easily.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="security" className="border-white/10">
                <AccordionTrigger className="text-left text-white">Is my data and target information secure?</AccordionTrigger>
                <AccordionContent className="text-white/65">
                  All workflows run in isolated environments and results are accessible only to your account.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="db-types" className="border-white/10">
                <AccordionTrigger className="text-left text-white">Does SQLBots support multiple database types?</AccordionTrigger>
                <AccordionContent className="text-white/65">
                  SQLBots supports common database systems and automatically adapts payload strategies based on the detected backend.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="waf-bypass" className="border-white/10">
                <AccordionTrigger className="text-left text-white">Does SQLBots try WAF bypass automatically?</AccordionTrigger>
                <AccordionContent className="text-white/65">
                  Yes. The Evasion Engine automatically attempts protection bypass techniques during the workflow. No manual tuning required.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="realtime-monitor" className="border-white/10">
                <AccordionTrigger className="text-left text-white">Can I monitor workflow progress in real time?</AccordionTrigger>
                <AccordionContent className="text-white/65">
                  Yes. The dashboard shows workflow progress, extraction status, and execution metrics in real time.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="multi-targets" className="border-white/10">
                <AccordionTrigger className="text-left text-white">Can I run multiple targets at the same time?</AccordionTrigger>
                <AccordionContent className="text-white/65">
                  Yes. SQLBots supports concurrent workflows depending on your plan limits.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="false-positives" className="border-white/10">
                <AccordionTrigger className="text-left text-white">Does SQLBots reduce false positives?</AccordionTrigger>
                <AccordionContent className="text-white/65">
                  Yes. AI verification checks responses and filters unreliable results to improve accuracy.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="large-databases" className="border-white/10">
                <AccordionTrigger className="text-left text-white">Can SQLBots handle large databases?</AccordionTrigger>
                <AccordionContent className="text-white/65">
                  Yes. The system is designed for large-scale extraction and optimized for high-volume datasets.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>

      <Footer />
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}

