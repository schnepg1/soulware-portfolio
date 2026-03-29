import { ArrowLeft, ArrowRight, ExternalLink, PlayCircle, Sparkles } from "lucide-react";

const links = [
  {
    label: "Playable alpha state demo",
    href: "https://iro-and-the-paralax-canvas-v2-602677800413.us-west1.run.app/",
    description: "Open the alpha build and try the interaction directly.",
    icon: PlayCircle,
    cta: "Play demo",
  },
  {
    label: "Concept presentation",
    href: "https://docs.google.com/presentation/d/1m4V_Jbxu101JGwSLl02IQSTO6d0cv01x/edit?usp=drive_link&ouid=106525825193135568398&rtpof=true&sd=true",
    description: "Read the direction, framing, and bigger picture behind the project.",
    icon: ExternalLink,
    cta: "Open presentation",
  },
];

export default function Chunkworld() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fcfaf7] text-slate-900">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(194,65,12,0.08),transparent_34%),radial-gradient(circle_at_top_right,rgba(101,163,13,0.06),transparent_28%),linear-gradient(180deg,#fcfaf7_0%,#f4efe7_100%)]" />
      <div className="absolute inset-0 -z-10 opacity-60 bg-[linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <header className="mx-auto max-w-7xl px-6 py-6">
        <a
          href="#/"
          className="inline-flex items-center gap-2 rounded-full border border-orange-900/8 bg-white/60 px-4 py-2 text-sm font-semibold text-slate-600 backdrop-blur-md transition hover:border-orange-700/20 hover:bg-white/75 hover:text-orange-700"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to product hub
        </a>
      </header>

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-8 md:pt-14">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-lime-600/15 bg-lime-600/8 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-lime-700 backdrop-blur-sm">
              <Sparkles className="h-4 w-4" />
              Experimental product
            </div>
            <h1 className="mt-6 text-5xl font-black tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
              Chunkworld
            </h1>
            <p className="mt-5 max-w-2xl text-xl leading-8 text-slate-600 sm:text-2xl">
              Iro and the parallax canvas, with two clear paths: play the alpha or open the concept deck.
            </p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-500">
              The page stays simple on purpose. Try the current build first, then read the direction behind it if you want the broader shape of the thing.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={links[0].href}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-2xl bg-orange-600 px-6 py-4 font-black text-white shadow-[0_18px_40px_rgba(194,65,12,0.22)] transition hover:-translate-y-0.5 hover:bg-orange-700"
              >
                Play alpha demo
                <PlayCircle className="h-4 w-4" />
              </a>
              <a
                href={links[1].href}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/70 px-6 py-4 font-black text-slate-700 shadow-[0_16px_40px_rgba(15,23,42,0.04)] transition hover:-translate-y-0.5 hover:bg-white"
              >
                View concept presentation
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>

          <aside className="rounded-[2.25rem] border border-slate-200 bg-white/65 p-6 shadow-[0_32px_70px_rgba(15,23,42,0.06)] backdrop-blur-xl">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {[
                { label: "Status", value: "Playable alpha" },
                { label: "Format", value: "Interactive web experience" },
                { label: "Best first click", value: "Play the demo" },
                { label: "Then", value: "Open the deck for the direction" },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`rounded-[1.5rem] border p-5 ${item.label === "Best first click"
                      ? "border-lime-600/15 bg-lime-600/8"
                      : item.label === "Status"
                        ? "border-orange-600/10 bg-orange-600/6"
                        : "border-slate-200 bg-white/70"
                    }`}
                >
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-slate-400">{item.label}</p>
                  <p className="mt-3 text-lg font-black tracking-tight text-slate-900">{item.value}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-6 md:grid-cols-2">
          {links.map((link, index) => {
            const Icon = link.icon;
            const isDemo = index === 0;
            return (
              <article key={link.label} className="group relative rounded-[2rem] p-px transition duration-500 hover:-translate-y-1.5">
                <div
                  className={`absolute inset-0 rounded-[2rem] bg-gradient-to-br opacity-0 blur-[1px] transition duration-500 group-hover:opacity-100 ${isDemo
                      ? "from-orange-600/30 via-transparent to-lime-400/10"
                      : "from-lime-600/30 via-transparent to-orange-400/10"
                    }`}
                />
                <div className="relative rounded-[calc(2rem-1px)] border border-slate-200 bg-white/70 p-8 shadow-[0_24px_60px_rgba(15,23,42,0.05)] backdrop-blur-xl transition duration-500 group-hover:bg-white group-hover:shadow-[0_36px_75px_rgba(15,23,42,0.08)]">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className={`text-sm font-bold uppercase tracking-[0.24em] ${isDemo ? "text-orange-700" : "text-lime-700"}`}>
                        {link.cta}
                      </p>
                      <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-900">{link.label}</h2>
                    </div>
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.06)] ${isDemo ? "text-orange-700" : "text-lime-700"
                        }`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  <p className="mt-5 text-lg leading-8 text-slate-600">{link.description}</p>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className={`mt-8 inline-flex items-center gap-2 rounded-2xl px-5 py-3.5 font-black text-white shadow-[0_16px_40px_rgba(15,23,42,0.1)] transition hover:-translate-y-0.5 ${isDemo ? "bg-orange-600 hover:bg-orange-700" : "bg-lime-600 hover:bg-lime-700"
                      }`}
                  >
                    {link.cta}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white/40">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-10 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <span className="font-bold uppercase tracking-[0.28em] text-slate-400">Chunkworld</span>
          <a href="mailto:soulwaresolution@gmail.com" className="transition hover:text-orange-700">
            soulwaresolution@gmail.com
          </a>
        </div>
      </footer>
    </main>
  );
}
