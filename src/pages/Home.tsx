import { ArrowRight, Bot, Code2, ExternalLink, Grid2x2, Mail, PlayCircle, Sparkles } from "lucide-react";

const products = [
  {
    name: "Guidian",
    status: "Live",
    eyebrow: "AI focus assistant",
    description:
      "A proactive goal assistant that helps people stay on track with timely nudges, simple check-ins, and a lightweight momentum loop.",
    tags: ["Productivity", "AI", "Live app"],
    icon: Bot,
    primary: { label: "Open product page", href: "#/guidian" },
    secondary: { label: "Launch app", href: "https://guidian.replit.app" },
  },
  {
    name: "Chunkworld",
    status: "Alpha",
    eyebrow: "Iro + parallax canvas",
    description:
      "An experimental interactive world with a playable alpha and a concept deck for the bigger idea behind it.",
    tags: ["Interactive", "Canvas", "Concept deck"],
    icon: Code2,
    primary: { label: "Open product page", href: "#/chunkworld" },
    secondary: { label: "View alpha demo", href: "https://iro-and-the-paralax-canvas-602677800413.us-west1.run.app" },
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b1020] text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.12),transparent_28%),linear-gradient(180deg,#0b1020_0%,#090d18_100%)]" />
      <div className="absolute inset-0 -z-10 opacity-25 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <a href="#/" className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm transition hover:border-white/20 hover:bg-white/8">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-indigo-500 text-sm font-bold text-slate-950">
            PS
          </span>
          <span className="text-sm font-medium text-slate-200">Soulware product hub</span>
        </a>

        <a
          href="mailto:soulwaresolution@gmail.com"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 backdrop-blur-sm transition hover:border-cyan-400/40 hover:bg-cyan-400/10"
        >
          <Mail className="h-4 w-4" />
          Contact
        </a>
      </header>

      <section className="mx-auto max-w-6xl px-6 pb-12 pt-12 md:pb-16 md:pt-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
            <Sparkles className="h-4 w-4" />
            Product hub
          </div>
          <h1 className="mt-6 text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
            AI tools and interactive products in one place.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            Clear cards. Direct links. Live apps, alpha demos, and concept decks. Pick a product and jump straight in.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#products"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5"
            >
              Explore products
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="mailto:soulwaresolution@gmail.com"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white transition hover:border-white/20 hover:bg-white/10"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>

      <section id="products" className="mx-auto max-w-6xl px-6 pb-16">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.24em] text-slate-400">
              <Grid2x2 className="h-4 w-4" />
              Featured products
            </div>
            <h2 className="mt-3 text-3xl font-bold text-white">The current lineup</h2>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <article
                key={product.name}
                className="group rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur-sm transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/7 md:p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="inline-flex items-center rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-200">
                      {product.status}
                    </div>
                    <p className="mt-4 text-sm uppercase tracking-[0.22em] text-slate-400">{product.eyebrow}</p>
                    <h3 className="mt-2 text-3xl font-bold text-white">{product.name}</h3>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-300 transition group-hover:scale-105 group-hover:text-cyan-200">
                    <Icon className="h-6 w-6" />
                  </div>
                </div>

                <p className="mt-6 max-w-xl text-base leading-7 text-slate-300">
                  {product.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-medium text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={product.primary.href}
                    className="inline-flex items-center gap-2 rounded-2xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-300"
                  >
                    {product.primary.label}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href={product.secondary.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 font-semibold text-white transition hover:border-white/20 hover:bg-white/10"
                  >
                    {product.name === "Guidian" ? <PlayCircle className="h-4 w-4" /> : <ExternalLink className="h-4 w-4" />}
                    {product.secondary.label}
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm md:col-span-2">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-400">What visitors can do here</p>
            <h2 className="mt-3 text-2xl font-bold text-white">Open the live thing, the alpha, or the story behind it.</h2>
            <p className="mt-4 max-w-2xl text-slate-300 leading-7">
              Each product gets a short description and a clear action. If it is live, open the app. If it is alpha, play the demo. If it is conceptual, read the deck.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-400/15 to-indigo-500/10 p-6 backdrop-blur-sm">
            <p className="text-sm uppercase tracking-[0.24em] text-cyan-200">Available now</p>
            <div className="mt-4 space-y-3 text-sm text-slate-200">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-3">Guidian is live and ready.</div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-3">Chunkworld has a playable alpha and concept deck.</div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black/20">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <a href="mailto:soulwaresolution@gmail.com" className="inline-flex items-center gap-2 text-slate-300 transition hover:text-white">
            soulwaresolution@gmail.com
          </a>
          <span className="text-slate-500">Soulware</span>
        </div>
      </footer>
    </main>
  );
}
