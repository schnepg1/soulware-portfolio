import { useState } from "react";
import { Play, ArrowLeft, ArrowRight, X } from "lucide-react";

export default function Guidian() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0b1020] text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.12),transparent_28%),linear-gradient(180deg,#0b1020_0%,#090d18_100%)]" />
      <div className="absolute inset-0 -z-10 opacity-25 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-white/5 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#/" className="flex items-center gap-2 text-slate-200 transition-colors hover:text-white">
            <ArrowLeft size={20} />
            <span className="font-medium">Back to product hub</span>
          </a>
          <div className="flex items-center gap-2 text-cyan-200">
            <span className="text-xl font-bold">Guidian</span>
          </div>
        </div>
      </nav>

      <section className="px-6 pb-12 pt-32">
        <div className="mx-auto max-w-4xl text-center">
          <span className="mb-6 inline-block rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200">
            Live product video
          </span>
          <h1 className="mb-6 bg-gradient-to-r from-white via-cyan-50 to-indigo-200 bg-clip-text text-4xl font-black text-transparent sm:text-6xl">
            Guidian
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-slate-300">
            A proactive AI goal assistant that keeps momentum moving with timely nudges, short check-ins, and a clean path back to focus.
          </p>
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="mx-auto max-w-2xl">
          {showVideo ? (
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl shadow-black/20 backdrop-blur-sm">
              <button
                onClick={() => setShowVideo(false)}
                className="absolute right-4 top-4 z-10 rounded-full border border-white/10 bg-black/40 p-2 backdrop-blur-md transition-colors hover:bg-black/60"
              >
                <X size={20} />
              </button>
              <video
                src="/videos/guidian-marketing.mp4"
                controls
                autoPlay
                className="aspect-[9/16] w-full bg-black"
              />
            </div>
          ) : (
            <button
              onClick={() => setShowVideo(true)}
              className="group relative aspect-[9/16] w-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl shadow-black/20 backdrop-blur-sm transition-all hover:scale-[1.01] hover:border-white/20 hover:bg-white/8"
            >
              <img
                src="/images/guidian-explainer-poster.jpg"
                alt="Guidian launch video preview"
                className="h-full w-full object-cover opacity-55 transition-opacity group-hover:opacity-40"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/20 transition-transform group-hover:scale-110">
                  <Play size={40} className="ml-1 text-slate-950" fill="currentColor" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/75 to-transparent p-6">
                <div className="text-3xl font-black text-white">GUIDIAN</div>
                <div className="text-lg text-slate-200">AI Goal Assistant</div>
              </div>
            </button>
          )}
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-2xl">
          <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { label: "Status", value: "Live" },
              { label: "Type", value: "AI product" },
              { label: "Video", value: "25 seconds" },
              { label: "Next step", value: "Open the app" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-sm">
                <div className="mb-1 text-sm text-slate-400">{stat.label}</div>
                <div className="font-semibold text-white">{stat.value}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <button
              onClick={() => setShowVideo(true)}
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-8 py-4 font-semibold text-cyan-100 backdrop-blur-sm transition hover:bg-cyan-400/15"
            >
              Watch launch video <ArrowRight size={20} />
            </button>
            <a
              href="https://guidian.replit.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-400 px-8 py-4 font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-300"
            >
              Open Guidian <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
