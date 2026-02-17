import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ChangelogPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="mx-auto w-full max-w-5xl px-5 pb-20 pt-12 sm:pt-14 md:px-10 md:pt-16 lg:pt-20">
        <section className="mb-10">
          <p className="inline-flex items-center rounded-full border border-white/15 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-white/60">
            Changelog
          </p>
          <h1 className="mt-4 text-[clamp(2rem,5vw,3.4rem)] font-semibold leading-[1.05] tracking-tight text-white">
            Product Updates
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
            Release notes, feature updates, and platform changes will be published here.
          </p>
        </section>

        <section />
      </main>

      <Footer />
    </div>
  )
}
