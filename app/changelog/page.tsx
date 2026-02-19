import { ChangelogReleaseCard } from "@/components/changelog-release"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { releases } from "@/data/changelog"

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
          {releases.map((release, index) => (
            <div key={release.version}>
              <ChangelogReleaseCard release={release} />
              {index < releases.length - 1 && <div className="my-10 h-px bg-white/10" />}
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  )
}
