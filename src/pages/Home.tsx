import { useEffect, useState } from "react";
import { ArrowRight, Bot, Code2, ExternalLink, Grid2x2, Mail, MessageCircle, PlayCircle, Sparkles, X } from "lucide-react";

const products = [
  {
    name: "Guidian ",
    status: "Live",
    eyebrow: "Webapp - AI voice focus assistant",
    description:
      "A proactive voiced goal assistant that helps you stay on track with timely nudges, simple check-ins, and a lightweight momentum loop.",
    tags: ["Productivity", "AI", "Live app"],
    icon: Bot,
    primary: { label: "Open product page", href: "#/guidian" },
    secondary: { label: "Launch app", href: "https://guidian.replit.app" },
  },
  {
    name: "Chunkworld",
    status: "Alpha",
    eyebrow: "Hybrid - Browser Game / Social Platform",
    description:
      "An experimental interactive world with a playable alpha and a concept deck for the bigger idea behind it.",
    tags: ["Interactive", "Canvas", "Concept deck"],
    icon: Code2,
    primary: { label: "Open product page", href: "#/chunkworld" },
    secondary: { label: "View alpha demo", href: "https://chunk-world-602677800413.us-west1.run.app" },
  },
];

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    if (!isContactOpen) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsContactOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isContactOpen]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fcfaf7] text-slate-900">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(194,65,12,0.08),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(101,163,13,0.06),transparent_28%),linear-gradient(180deg,#fcfaf7_0%,#f4efe7_100%)]" />
      <div className="absolute inset-0 -z-10 opacity-60 bg-[linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <a
          href="#/"
          className="inline-flex items-center gap-3 rounded-full border border-orange-900/8 bg-white/50 px-4 py-2 text-slate-700 shadow-[0_10px_30px_rgba(15,23,42,0.04)] backdrop-blur-md transition hover:border-orange-900/15 hover:bg-white/70"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-lime-600 text-sm font-bold text-white">
            PS
          </span>
          <span className="text-s font-bold tracking-[0.24em] text-slate-600">SoulwareSolution</span>
        </a>

        <button
          type="button"
          onClick={() => setIsContactOpen(true)}
          className="inline-flex items-center gap-2 rounded-full border border-orange-900/8 bg-white/50 px-4 py-2 text-sm font-semibold text-slate-600 shadow-[0_10px_30px_rgba(15,23,42,0.04)] backdrop-blur-md transition hover:border-orange-700/20 hover:bg-white/70 hover:text-orange-700"
        >
          <Mail className="h-6 w-10" />
          Contact
        </button>
      </header>

      <section className="mx-auto max-w-7xl px-6 pb-14 pt-12 md:pb-20 md:pt-20">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-700/10 bg-orange-700/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-orange-800">
            <Sparkles className="h-4 w-4" />
            Product hub
          </div>
          <h1 className="mt-8 text-5xl font-black tracking-tight text-slate-900 sm:text-6xl lg:text-8xl lg:leading-[0.95]">
            Software that elevates your
            <span className="block text-orange-700">soul.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            - helping procrastinators achieve their goals, <br />
            - reinventing the way we browse the web.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#products"
              className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-6 py-4 font-extrabold text-white shadow-[0_16px_40px_rgba(15,23,42,0.12)] transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              Explore products
              <ArrowRight className="h-4 w-4" />
            </a>
            <button
              type="button"
              onClick={() => setIsContactOpen(true)}
              className="inline-flex items-center gap-2 rounded-2xl border border-orange-900/8 bg-white/50 px-6 py-4 font-extrabold text-slate-700 shadow-[0_16px_40px_rgba(15,23,42,0.04)] backdrop-blur-md transition hover:-translate-y-0.5 hover:border-orange-900/15 hover:bg-white/75"
            >
              Get in touch
            </button>
          </div>
        </div>
      </section>

      <section id="products" className="mx-auto max-w-7xl px-6 pb-20">
        <div className="mb-10 flex items-center gap-4">
          <div className="h-px flex-1 bg-slate-200" />
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-slate-400">
            <Grid2x2 className="h-4 w-4" />
            Featured products
          </div>
          <div className="h-px w-24 bg-slate-200" />
        </div>

        <div className="mb-8">
          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">Our projects</h2>
          <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
            Live software, playable alpha demos, and the product thinking behind them.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {products.map((product, index) => {
            const Icon = product.icon;
            const isGuidian = index === 0;
            const glowClass = isGuidian
              ? "from-lime-600/30 via-transparent to-orange-400/10 group-hover:from-lime-600/35 group-hover:to-orange-400/15"
              : "from-orange-600/30 via-transparent to-lime-400/10 group-hover:from-orange-600/35 group-hover:to-lime-400/15";
            const statusClass = isGuidian
              ? "border-lime-600/20 bg-lime-600/10 text-lime-700"
              : "border-orange-600/20 bg-orange-600/10 text-orange-700";
            const iconClass = isGuidian
              ? "text-lime-700 group-hover:border-lime-500 group-hover:bg-lime-600 group-hover:text-white"
              : "text-orange-700 group-hover:border-orange-500 group-hover:bg-orange-600 group-hover:text-white";

            return (
              <article key={product.name} className="group relative rounded-[2rem] p-px transition duration-500 hover:-translate-y-1.5">
                <div
                  className={`absolute inset-0 rounded-[2rem] bg-gradient-to-br ${glowClass} opacity-0 blur-[1px] transition duration-500 group-hover:opacity-100`}
                />
                <div className="relative flex h-full flex-col rounded-[calc(2rem-1px)] border border-slate-200 bg-white/55 p-8 shadow-[0_24px_60px_rgba(15,23,42,0.05)] backdrop-blur-xl transition duration-500 group-hover:border-white/90 group-hover:bg-white/78 group-hover:shadow-[0_40px_80px_-24px_rgba(15,23,42,0.14)] md:p-10">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-[0.22em] ${statusClass}`}>
                        {product.status}
                      </div>
                      <h3 className="mt-3 text-4xl font-black tracking-tight text-slate-900">{product.name}</h3>
                      <p className="mt-5 text-xs font-bold uppercase tracking-[0.28em] text-slate-400">{product.eyebrow}</p>
                    </div>
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-white text-2xl shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition duration-500 ${iconClass}`}
                    >
                      <Icon className="h-7 w-7" />
                    </div>
                  </div>

                  <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">{product.description}</p>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {product.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-xl border border-slate-200 bg-white/70 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-slate-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-10 flex flex-wrap gap-3">
                    <a
                      href={product.primary.href}
                      className={`inline-flex items-center gap-2 rounded-2xl px-5 py-3.5 font-black text-white shadow-[0_16px_40px_rgba(15,23,42,0.1)] transition hover:-translate-y-0.5 ${isGuidian ? "bg-lime-600 hover:bg-lime-700" : "bg-orange-600 hover:bg-orange-700"}`}
                    >
                      {product.primary.label}
                      <ArrowRight className="h-4 w-4" />
                    </a>
                    <a
                      href={product.secondary.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/70 px-5 py-3.5 font-black text-slate-700 transition hover:-translate-y-0.5 hover:bg-white"
                    >
                      {product.name === "Guidian" ? <PlayCircle className="h-4 w-4" /> : <ExternalLink className="h-4 w-4" />}
                      {product.secondary.label}
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-6 md:grid-cols-12">
          <div className="rounded-[2rem] border border-slate-200 bg-white/60 p-8 shadow-[0_24px_60px_rgba(15,23,42,0.05)] backdrop-blur-xl md:col-span-7 md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-slate-400">What visitors can do here</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900">
              Open the live thing, the alpha, or the story behind it.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Each product gets a short description and a clear action. If it is live, open the app. If it is alpha, play the demo. If it is conceptual, read the deck.
            </p>
          </div>
          <div className="rounded-[2rem] border border-orange-200/50 bg-gradient-to-br from-orange-100/70 to-lime-100/35 p-8 shadow-[0_24px_60px_rgba(194,65,12,0.07)] md:col-span-5 md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-orange-700">Available now</p>
            <div className="mt-6 space-y-4 text-sm text-slate-700">
              <div className="flex items-center gap-3 rounded-2xl border border-white/60 bg-white/70 p-4">
                <span className="h-2.5 w-2.5 rounded-full bg-lime-600 shadow-[0_0_10px_rgba(101,163,13,0.35)]" />
                <span className="font-bold uppercase tracking-[0.14em]">Guidian is live and ready.</span>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-white/60 bg-white/70 p-4">
                <span className="h-2.5 w-2.5 rounded-full bg-orange-600 shadow-[0_0_10px_rgba(194,65,12,0.35)]" />
                <span className="font-bold uppercase tracking-[0.14em]">Chunkworld has a playable alpha and concept deck.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white/40">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-10 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <a
            href="mailto:soulwaresolution@gmail.com"
            className="inline-flex items-center gap-3 text-slate-600 transition hover:text-orange-700"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white">
              <Mail className="h-4 w-4" />
            </span>
            soulwaresolution@gmail.com
          </a>
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400">Soulware</span>
        </div>
      </footer>

      {isContactOpen ? (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-slate-950/18 px-6 py-8 backdrop-blur-sm sm:items-center">
          <button type="button" aria-label="Close contact card" className="absolute inset-0" onClick={() => setIsContactOpen(false)} />
          <div className="relative w-full max-w-sm rounded-[2rem] border border-slate-200 bg-white/80 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.14)] backdrop-blur-xl sm:p-7">
            <div className="absolute inset-0 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_top_left,rgba(194,65,12,0.14),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(101,163,13,0.12),transparent_32%)]" />

            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-orange-700">Get in touch</p>
                <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-900">Reach Soulware directly.</h2>
              </div>
              <button
                type="button"
                onClick={() => setIsContactOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-white/80 text-slate-500 transition hover:border-orange-200 hover:text-orange-700"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              Use email for direct contact, or join the Discord if you want to continue the conversation there.
            </p>

            <div className="mt-6 space-y-4">
              <div className="rounded-[1.5rem] border border-slate-200 bg-white/75 p-4 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-slate-400">Email</p>
                <p className="mt-2 break-all text-base font-bold text-slate-900">soulwaresolution@gmail.com</p>
                <a
                  href="mailto:soulwaresolution@gmail.com"
                  className="mt-4 inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-4 py-3 text-sm font-extrabold text-white transition hover:bg-slate-800"
                >
                  <Mail className="h-4 w-4" />
                  Open mail app
                </a>
              </div>

              <div className="rounded-[1.5rem] border border-orange-200/60 bg-gradient-to-br from-orange-100/75 to-lime-100/40 p-4 shadow-[0_12px_30px_rgba(194,65,12,0.08)]">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-orange-700">Discord</p>
                <p className="mt-2 text-sm leading-7 text-slate-700">Join the Soulware Discord community.</p>
                <a
                  href="https://discord.gg/BqznQyqxus"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-4 inline-flex items-center gap-2 rounded-2xl border border-white/70 bg-white/80 px-4 py-3 text-sm font-extrabold text-slate-800 transition hover:-translate-y-0.5 hover:bg-white"
                >
                  <MessageCircle className="h-4 w-4" />
                  Open Discord
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}
