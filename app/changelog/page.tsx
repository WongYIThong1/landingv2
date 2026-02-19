import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const latestRelease = {
  version: "v1.0.0",
  date: "February 19, 2026",
  improved: [
    {
      title: "Dumper Speed Optimization",
      description:
        "Enhanced extraction performance for faster database dumping and improved stability on large databases.",
    },
  ],
  added: [
    {
      title: "Timeout AI Engine",
      description:
        "New AI-driven timeout adjustment system that automatically optimizes request timing to improve dumping success and help extract databases more completely.",
    },
    {
      title: "Long Task Detection Notice",
      description:
        "SQLBots now warns when a target domain may require extended processing time, so users know in advance that the workflow may run longer.",
    },
  ],
}

export default function ChangelogPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="mx-auto w-full max-w-4xl px-5 pb-20 pt-12 sm:pt-14 md:px-10 md:pt-16 lg:pt-20">
        <section className="mb-12 border-b border-white/10 pb-8">
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-white/45">
            Changelog
          </p>
          <h1 className="mt-3 text-[clamp(1.8rem,4.2vw,2.8rem)] font-semibold leading-[1.1] tracking-tight text-white">
            Product Updates
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-white/60">
            Release notes, feature updates, and platform changes will be published here.
          </p>
        </section>

        <section>
          <article className="border-l border-white/15 pl-5 sm:pl-6">
            <div className="flex items-baseline gap-3">
              <h2 className="text-base font-semibold text-white">{latestRelease.version}</h2>
              <p className="text-xs text-white/45">{latestRelease.date}</p>
            </div>

            <div className="mt-6 space-y-6">
              <section>
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-white/50">Improved</p>
                <ul className="mt-3 space-y-4">
                  {latestRelease.improved.map((item) => (
                    <li key={item.title}>
                      <h3 className="text-sm font-medium text-white">{item.title}</h3>
                      <p className="mt-1 text-sm leading-7 text-white/65">{item.description}</p>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-white/50">Added</p>
                <ul className="mt-3 space-y-4">
                  {latestRelease.added.map((item) => (
                    <li key={item.title}>
                      <h3 className="text-sm font-medium text-white">{item.title}</h3>
                      <p className="mt-1 text-sm leading-7 text-white/65">{item.description}</p>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </article>
        </section>
      </main>

      <Footer />
    </div>
  )
}
