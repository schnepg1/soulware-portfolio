import { useState } from "react";
import { Play, ArrowLeft, ArrowRight, X } from "lucide-react";

const stats = [
  { label: "Status", value: "Live" },
  { label: "Type", value: "AI product" },
  { label: "Video", value: "25 seconds" },
  { label: "Next step", value: "Open the app" },
];

export default function Guidian() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fcfaf7] text-slate-900">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(194,65,12,0.1),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(101,163,13,0.07),transparent_30%),linear-gradient(180deg,#fcfaf7_0%,#f4efe7_100%)]" />
      <div className="absolute inset-0 -z-10 opacity-60 bg-[linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <nav className="sticky top-0 z-50 border-b border-orange-900/8 bg-white/55 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a
            href="#/"
            className="inline-flex items-center gap-2 rounded-full border border-orange-900/8 bg-white/70 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:border-orange-700/20 hover:text-orange-700"
          >
            <ArrowLeft size={18} />
            <span>Back to product hub</span>
          </a>
          <div className="inline-flex items-center gap-2 rounded-full border border-lime-600/15 bg-lime-600/8 px-4 py-2 text-sm font-bold uppercase tracking-[0.24em] text-lime-700">
            <span className="h-2 w-2 rounded-full bg-lime-600 shadow-[0_0_10px_rgba(101,163,13,0.4)]" />
            Guidian
          </div>
        </div>
      </nav>

      <section className="px-6 pb-24 pt-14 md:pt-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-700/10 bg-orange-700/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-orange-800">
              <Play className="h-4 w-4" />
              Live product video
            </div>
            <h1 className="mt-8 text-5xl font-black tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
              Guidian
            </h1>
            <p className="mt-6 max-w-xl text-xl leading-8 text-slate-600">
              A proactive AI goal assistant that keeps momentum moving with timely nudges, short check-ins, and a clean path back to focus.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[1.75rem] border border-slate-200 bg-white/65 p-5 shadow-[0_20px_45px_rgba(15,23,42,0.05)] backdrop-blur-lg"
                >
                  <div className="text-xs font-bold uppercase tracking-[0.24em] text-slate-400">{stat.label}</div>
                  <div className="mt-3 text-lg font-black tracking-tight text-slate-900">{stat.value}</div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button
                onClick={() => setShowVideo(true)}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white/70 px-8 py-4 font-black text-slate-700 shadow-[0_16px_40px_rgba(15,23,42,0.05)] transition hover:-translate-y-0.5 hover:bg-white"
              >
                Watch launch video <ArrowRight size={20} />
              </button>
              <a
                href="https://guidian.replit.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-orange-600 px-8 py-4 font-black text-white shadow-[0_18px_40px_rgba(194,65,12,0.22)] transition hover:-translate-y-0.5 hover:bg-orange-700"
              >
                Open Guidian <ArrowRight size={20} />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-orange-500/12 via-transparent to-lime-600/10 blur-2xl" />
            {showVideo ? (
              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/80 bg-white/80 p-3 shadow-[0_40px_90px_rgba(15,23,42,0.12)] backdrop-blur-xl">
                <button
                  onClick={() => setShowVideo(false)}
                  className="absolute right-7 top-7 z-10 rounded-full border border-black/10 bg-black/55 p-2 text-white backdrop-blur-md transition-colors hover:bg-black/70"
                >
                  <X size={20} />
                </button>
                <video
                  src="/videos/guidian-marketing.mp4"
                  controls
                  autoPlay
                  className="aspect-[9/16] w-full rounded-[2rem] bg-black object-cover"
                />
              </div>
            ) : (
              <button
                onClick={() => setShowVideo(true)}
                className="group relative w-full overflow-hidden rounded-[2.5rem] border border-white/80 bg-white/80 p-3 shadow-[0_40px_90px_rgba(15,23,42,0.12)] backdrop-blur-xl transition hover:-translate-y-1"
              >
                <div className="relative aspect-[9/16] overflow-hidden rounded-[2rem]">
                  <img
                    src="/images/guidian-explainer-poster.jpg"
                    alt="Guidian launch video preview"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.08),rgba(15,23,42,0.28))]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white text-orange-700 shadow-[0_20px_50px_rgba(15,23,42,0.18)] transition group-hover:scale-110">
                      <Play size={40} className="ml-1" fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent p-7 text-left">
                    <div className="text-3xl font-black uppercase tracking-tight text-white">GUIDIAN</div>
                    <div className="text-base font-medium text-white/90">AI Goal Assistant</div>
                  </div>
                </div>
              </button>
            )}
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white/40">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-10 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <span className="font-bold uppercase tracking-[0.28em] text-slate-400">Guidian</span>
          <a href="mailto:soulwaresolution@gmail.com" className="transition hover:text-orange-700">
            soulwaresolution@gmail.com
          </a>
        </div>
      </footer>
    </main>
  );
}
