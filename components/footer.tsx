export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20">
      <div className="mx-auto w-full max-w-[1400px] px-5 py-14 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <a href="#" className="inline-flex items-center gap-2.5 font-[var(--font-display)] text-base font-semibold tracking-tight text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="22"
                height="22"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 8V4H8" />
                <rect width="16" height="12" x="4" y="8" rx="2" />
                <path d="M2 14h2m16 0h2m-7-1v2m-6-2v2" />
              </svg>
              SQLBots
            </a>
            <p className="mt-3 max-w-xs text-sm leading-6 text-white/55">
              AI-powered SQL security automation for fast, accurate, and scalable testing workflows.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">Product</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              <li><a href="/#page1" className="transition hover:text-white">Overview</a></li>
              <li><a href="/#page2" className="transition hover:text-white">Features</a></li>
              <li><a href="/#page3" className="transition hover:text-white">AI Engines</a></li>
              <li><a href="/#page4" className="transition hover:text-white">Preview</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">Resources</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              <li><a href="#" className="transition hover:text-white">Documentations</a></li>
              <li><a href="/blogs" className="transition hover:text-white">Blogs</a></li>
              <li><a href="/changelog" className="transition hover:text-white">Changelog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">Important</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              <li><a href="https://discord.gg/EvvkPW6EKy" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">Contact</a></li>
              <li><a href="/terms" className="transition hover:text-white">Terms of Service</a></li>
              <li><a href="/privacy" className="transition hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/45 md:flex-row md:items-center">
          <p>&copy; {new Date().getFullYear()} SQLBots. All rights reserved.</p>
          <p>Built for secure, cloud-native SQL testing.</p>
        </div>
      </div>
    </footer>
  )
}
