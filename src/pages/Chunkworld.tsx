import { ArrowLeft, ArrowRight, ExternalLink, PlayCircle, Sparkles } from "lucide-react";

const links = [
  {
    label: "Playable alpha state demo",
    href: "https://iro-and-the-paralax-canvas-602677800413.us-west1.run.app",
    description: "Open the alpha build and try the interaction directly.",
    icon: PlayCircle,
    cta: "Play demo",
  },
  {
    label: "Concept presentation",
    href: "https://docs.google.com/presentation/d/1m4V_Jbxu101JGwSLl02IQSTO6d0cv01x/edit?usp=drive_link&ouid=106525825193135568398&rtpof=true&sd=true",
    description: "Read the direction, framing, and bigger picture behind the project.",
    icon: ExternalLink,
    cta: "Open deck",
  },
];

export default function Chunkworld() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0b1020] text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.14),transparent_30%),linear-gradient(180deg,#0b1020_0%,#090d18_100%)]" />
      <div className="absolute inset-0 -z-10 opacity-25 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <header className="mx-auto max-w-6xl px-6 py-6">
        <a href="#/" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 backdrop-blur-sm transition hover:border-white/20 hover:bg-white/8">
          <ArrowLeft className="h-4 w-4" />
          Back to product hub
        </a>
      </header>

      <section className="mx-auto max-w-6xl px-6 pb-16 pt-8 md:pt-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200 backdrop-blur-sm">
              <Sparkles className="h-4 w-4" />
              Experimental product
            </div>
            <h1 className="mt-6 text-5xl font-black tracking-tight text-white sm:text-6xl">
              Chunkworld
            </h1>
            <p className="mt-4 text-xl text-slate-300 sm:text-2xl">
              Iro and the parallax canvas, with two clear paths: play the alpha or open the concept deck.
            </p>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300">
              The page stays simple on purpose. Try the current build first, then read the direction behind it if you want the broader shape of the thing.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={links[0].href}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-2xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5 hover:bg-cyan-300"
              >
                Play alpha demo
                <PlayCircle className="h-4 w-4" />
              </a>
              <a
                href={links[1].href}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white transition hover:border-white/20 hover:bg-white/10"
              >
                View concept presentation
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>

          <aside className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur-sm">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {[
                { label: "Status", value: "Playable alpha" },
                { label: "Format", value: "Interactive web experience" },
                { label: "Best first click", value: "Play the demo" },
                { label: "Then", value: "Open the deck for the direction" },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-400">{item.label}</p>
                  <p className="mt-2 text-lg font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-2">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <article key={link.label} className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur-sm transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-400">{link.cta}</p>
                    <h2 className="mt-3 text-2xl font-bold text-white">{link.label}</h2>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/20 text-cyan-300">
                    <Icon className="h-6 w-6" />
                  </div>
                </div>
                <p className="mt-4 leading-7 text-slate-300">{link.description}</p>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5 hover:bg-cyan-300"
                >
                  {link.cta}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
