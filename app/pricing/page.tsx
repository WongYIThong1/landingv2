import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    description: "Start with core access and explore the workflow.",
    cta: "Get Started",
    ctaHref: "https://dash.sqlbots.online/",
    highlight: false,
    features: ["0 Credits", "0 Storage", "0 Slots"],
  },
  {
    name: "Pro",
    price: "$160",
    originalPrice: "$250",
    discountLabel: "Save $90",
    period: "/month",
    description: "For operators who need high-capacity automation.",
    cta: "Upgrade To Pro",
    ctaHref: "https://discord.gg/eeMupKEX",
    highlight: true,
    features: [
      "3 task slots",
      "2000 credits",
      "5GB Storage",
      "Evasion Engine",
      "AntiBan Engine",
      "AI Preset Analysis",
      "Payload Engine",
      "AI Website Classification",
      "Dehasher",
      "Antipublic",
    ],
  },
  {
    name: "Pro+",
    price: "$400",
    period: "/month",
    description: "For advanced teams running large-scale workflows.",
    cta: "Unavailable",
    ctaHref: "https://discord.gg/eeMupKEX",
    unavailable: true,
    highlight: false,
    features: [
      "6 task slots",
      "6000 credits",
      "10GB Storage",
      "Evasion Engine",
      "AntiBan Engine",
      "AI Preset Analysis",
      "Payload Engine",
      "AI Website Classification",
      "Dehasher",
      "Antipublic",
      "Fastest Access To New AI Engine",
    ],
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="mx-auto w-full max-w-6xl px-5 pb-20 pt-12 sm:pt-14 md:px-10 md:pt-16 lg:pt-20">
        <section className="border-b border-white/10 pb-14">
          <p className="inline-flex items-center rounded-full border border-white/15 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-white/60">
            Pricing
          </p>
          <h1 className="mt-4 text-[clamp(2rem,5vw,3.6rem)] font-semibold leading-[1.03] tracking-tight text-white">
            Clean Pricing, Clear Capacity
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
            Start free, upgrade when you need more workflows, credits, and automation engines.
          </p>
        </section>

        <section className="pt-10">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={`border py-0 text-white shadow-none ${
                  plan.highlight ? "border-white/30 bg-white/[0.06]" : "border-white/12 bg-transparent"
                } ${plan.unavailable ? "opacity-75" : ""}`}
              >
                <CardHeader className="gap-3 px-6 pt-6">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">{plan.name}</p>
                    {plan.discountLabel ? (
                      <span className="rounded-full border border-emerald-300/30 bg-emerald-400/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-emerald-200">
                        {plan.discountLabel}
                      </span>
                    ) : null}
                  </div>
                  <CardTitle className="flex items-end gap-1 text-4xl font-semibold tracking-tight">
                    {plan.price}
                    <span className="pb-1 text-sm font-normal text-white/50">{plan.period}</span>
                    {plan.originalPrice ? (
                      <span className="pb-1 pl-2 text-sm font-normal text-white/35 line-through">{plan.originalPrice}</span>
                    ) : null}
                  </CardTitle>
                  <p className="text-sm text-white/65">{plan.description}</p>
                </CardHeader>

                <CardContent className="px-6 pb-0">
                  {plan.unavailable ? (
                    <span className="inline-flex h-10 w-full cursor-not-allowed items-center justify-center rounded-lg border border-white/15 bg-white/[0.02] text-sm font-medium text-white/45">
                      {plan.cta}
                    </span>
                  ) : (
                    <a
                      href={plan.ctaHref}
                      className={`inline-flex h-10 w-full items-center justify-center rounded-lg text-sm font-medium transition ${
                        plan.highlight
                          ? "bg-white text-black hover:bg-white/90"
                          : "border border-white/20 bg-white/[0.03] text-white hover:bg-white/[0.08]"
                      }`}
                    >
                      {plan.cta}
                    </a>
                  )}
                </CardContent>

                <CardFooter className="px-6 pb-6 pt-6">
                  <ul className="w-full space-y-2.5 border-t border-white/10 pt-5">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-white/75">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                        >
                          <path d="m5 12 5 5L20 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
