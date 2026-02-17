type MenuChild = {
  title: string
  subtitle: string
  href?: string
}

type MenuItem = {
  label: string
  href?: string
  children?: MenuChild[]
}

const menuItems: MenuItem[] = [
  {
    label: "Product",
    children: [
      { title: "Overview", subtitle: "Core introduction and value proposition", href: "/#page1" },
      { title: "Capabilities", subtitle: "Security features and key metrics", href: "/#page2" },
      { title: "AI Engines", subtitle: "Multi-engine automation architecture", href: "/#page3" },
      { title: "Preview", subtitle: "Dashboard interface preview", href: "/#page4" },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  {
    label: "Resources",
    children: [
      { title: "Docs", subtitle: "Unavailable" },
      { title: "Blog", subtitle: "Product updates and insights", href: "/blogs" },
      { title: "Changelog", subtitle: "Track every release and fix", href: "/changelog" },
    ],
  },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/85 backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-[1400px] flex-row items-center justify-between px-5 py-2 md:px-10 lg:px-20">
        <div className="flex flex-row items-center gap-16">
          <a href="/" className="inline-flex items-center gap-2.5 font-[var(--font-display)] text-base font-semibold tracking-tight text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ opacity: 1 }}
            >
              <path d="M12 8V4H8" />
              <rect width="16" height="12" x="4" y="8" rx="2" />
              <path d="M2 14h2m16 0h2m-7-1v2m-6-2v2" />
            </svg>
            SQLBots
          </a>

          <ul className="hidden flex-row items-center gap-8 md:flex">
            {menuItems.map((item) => (
              <li key={item.label}>
                <div className="group relative">
                  {item.children ? (
                    <>
                      <button
                        type="button"
                        className="inline-flex items-center gap-2 text-[13px] font-medium text-white/55 transition hover:text-white"
                      >
                        <span>{item.label}</span>
                        <svg
                          viewBox="0 0 10 6"
                          className="h-1.5 w-auto text-white/40 transition-transform duration-200 group-hover:rotate-180"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        >
                          <path d="M1 1L5 5L9 1" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>

                      <div className="invisible absolute left-0 top-full z-50 w-64 pt-2 opacity-0 transition duration-150 group-hover:visible group-hover:opacity-100">
                        <div className="rounded-xl border border-white/10 bg-[#101012] p-1.5 shadow-[0_10px_26px_rgba(0,0,0,0.35)]">
                          <p className="px-2 pb-1 pt-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/30">
                            {item.label}
                          </p>
                          {item.children.map((child) => (
                            <a
                              key={child.title}
                              href={child.href ?? "#"}
                              className="block rounded-lg px-2.5 py-2 transition hover:bg-white/[0.06]"
                            >
                              <p className="text-[13px] font-medium text-white/90">{child.title}</p>
                              <p className="mt-0.5 line-clamp-1 text-[11px] text-white/45">{child.subtitle}</p>
                            </a>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <a href={item.href ?? "#"} className="inline-flex items-center text-[13px] font-medium text-white/55 transition hover:text-white">
                      {item.label}
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://dash.sqlbots.online/"
            className="inline-flex h-7 items-center justify-center rounded-lg bg-white px-3 text-[13px] font-medium text-black transition hover:bg-white/90"
          >
            Get started
          </a>
          <button
            type="button"
            className="inline-flex size-7 items-center justify-center rounded-md text-white md:hidden"
            aria-label="Open menu"
          >
            <svg viewBox="0 0 18 14" className="h-3.5 w-[18px]" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M1 1H17" strokeLinecap="round" />
              <path d="M1 7H17" strokeLinecap="round" />
              <path d="M1 13H17" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  )
}
