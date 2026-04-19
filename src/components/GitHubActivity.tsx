import { useState, useEffect, useRef } from "react";

interface RepoCommit {
  repo: string;
  color: string;
  dailyCounts: number[];
}

const STORAGE_KEY = "github-activity-data";

const REPO_COLORS = [
  "#38bdf8", // sky
  "#a78bfa", // violet
  "#34d399", // emerald
  "#fb923c", // orange
  "#f472b6", // pink
  "#facc15", // yellow
  "#2dd4bf", // teal
  "#e879f9", // fuchsia
];

const REPOS = [
  "schnepg1/soulware-portfolio",
  "schnepg1/social-monetization-dashboard",
  "schnepg1/voice-session",
  "schnepg1/guidian-video",
  "schnepg1/paperclip",
];

function loadCached(): RepoCommit[] | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed) || !parsed.length) return null;
    const oneYearAgo = Date.now() - 365 * 24 * 60 * 60 * 1000;
    if (parsed[0]?.fetchedAt < oneYearAgo) return null;
    return parsed;
  } catch {
    return null;
  }
}

async function fetchAll(): Promise<RepoCommit[]> {
  const results: RepoCommit[] = [];
  for (let i = 0; i < REPOS.length; i++) {
    const repo = REPOS[i];
    const color = REPO_COLORS[i % REPO_COLORS.length];
    try {
      const url = `https://api.github.com/repos/${repo}/stats/commit_activity`;
      const res = await fetch(url, { headers: { Accept: "application/vnd.github.v3+json" } });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json: { week: string; total: number; days: number[] }[] = await res.json();
      const last52 = json.slice(-52);
      const dailyCounts = last52.flatMap((w) => w.days);
      results.push({ repo: repo.replace("schnepg1/", ""), color, dailyCounts });
    } catch {
      results.push({ repo: repo.replace("schnepg1/", ""), color, dailyCounts: new Array(365).fill(0) });
    }
    await new Promise((r) => setTimeout(r, 500));
  }
  return results;
}

const DAYS = 365;
const margin = { top: 24, right: 16, bottom: 52, left: 44 };

function buildAxes(maxCommits: number) {
  const numYTicks = Math.min(maxCommits, 6);
  const yLabels: { value: number; y: number }[] = [];
  for (let i = 0; i <= numYTicks; i++) {
    const value = Math.round((maxCommits / numYTicks) * i);
    yLabels.push({ value, y: margin.top + ((maxCommits - value) / Math.max(maxCommits, 1)) * (0) });
  }

  const now = new Date();
  const xLabels: { label: string; x: number }[] = [];
  let lastMonth = -1;
  for (let i = DAYS - 1; i >= 0; i--) {
    const d = new Date(now);
    d.setDate(d.getDate() - i);
    const m = d.getMonth();
    if (m !== lastMonth) {
      lastMonth = m;
      xLabels.push({ label: d.toLocaleDateString("en-US", { month: "short" }), x: DAYS - 1 - i });
    }
  }

  return { xLabels, yLabels };
}

export default function GitHubActivity() {
  const [data, setData] = useState<RepoCommit[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cached = loadCached();
    if (cached) {
      setData(cached);
      return;
    }
    setLoading(true);
    fetchAll().then((r) => {
      const withTs = r.map((d) => ({ ...d, fetchedAt: Date.now() }));
      localStorage.setItem(STORAGE_KEY, JSON.stringify(withTs));
      setData(withTs);
      setLoading(false);
    }).catch(() => {
      setError("Failed to load commit data.");
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (!data || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const totalW = 760;
    const totalH = 260;
    canvas.width = totalW * dpr;
    canvas.height = totalH * dpr;
    canvas.style.width = totalW + "px";
    canvas.style.height = totalH + "px";
    ctx.scale(dpr, dpr);

    const chartW = totalW - margin.left - margin.right;
    const chartH = totalH - margin.top - margin.bottom;

    let maxCommits = 0;
    for (const repo of data) {
      for (let d = 0; d < DAYS; d++) {
        if ((repo.dailyCounts[d] ?? 0) > maxCommits) maxCommits = repo.dailyCounts[d] ?? 0;
      }
    }
    if (maxCommits === 0) maxCommits = 1;

    const { xLabels, yLabels } = buildAxes(maxCommits);
    const barPx = chartW / DAYS;

    // Background
    ctx.fillStyle = "rgba(11,16,32,0.6)";
    ctx.fillRect(margin.left, margin.top, chartW, chartH);

    // Grid lines
    ctx.strokeStyle = "rgba(255,255,255,0.06)";
    ctx.lineWidth = 1;
    for (let i = 0; i <= 6; i++) {
      const y = margin.top + (i / 6) * chartH;
      ctx.beginPath();
      ctx.moveTo(margin.left, y);
      ctx.lineTo(margin.left + chartW, y);
      ctx.stroke();
    }

    // Y axis labels
    ctx.fillStyle = "rgba(148,163,184,0.8)";
    ctx.font = "bold 11px system-ui, sans-serif";
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    for (const { value, y: _y } of yLabels) {
      const yPos = margin.top + ((maxCommits - value) / maxCommits) * chartH;
      ctx.fillText(String(value), margin.left - 6, yPos);
      ctx.beginPath();
      ctx.strokeStyle = "rgba(255,255,255,0.04)";
      ctx.moveTo(margin.left, yPos);
      ctx.lineTo(margin.left + chartW, yPos);
      ctx.stroke();
    }

    // X axis labels
    ctx.fillStyle = "rgba(148,163,184,0.7)";
    ctx.font = "11px system-ui, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    for (const { label, x } of xLabels) {
      const xPos = margin.left + x * barPx + barPx / 2;
      ctx.fillText(label, xPos, totalH - margin.bottom + 6);
    }

    // Stacked bars
    for (let d = 0; d < DAYS; d++) {
      let stackY = margin.top + chartH;
      for (const repo of data) {
        const count = repo.dailyCounts[d] ?? 0;
        if (count === 0) continue;
        const barH = Math.max((count / maxCommits) * chartH, 2);
        const xPos = margin.left + d * barPx;
        ctx.fillStyle = repo.color;
        ctx.fillRect(xPos, stackY - barH, Math.max(barPx - 1, 1), barH);
        stackY -= barH;
      }
    }
  }, [data]);

  const handleRefresh = async () => {
    setSaving(true);
    localStorage.removeItem(STORAGE_KEY);
    setData(null);
    setLoading(true);
    setError(null);
    try {
      const r = await fetchAll();
      const withTs = r.map((d) => ({ ...d, fetchedAt: Date.now() }));
      localStorage.setItem(STORAGE_KEY, JSON.stringify(withTs));
      setData(withTs);
    } catch {
      setError("Refresh failed.");
    } finally {
      setLoading(false);
      setSaving(false);
    }
  };

  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white/60 p-8 shadow-[0_24px_60px_rgba(15,23,42,0.05)] backdrop-blur-xl">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-slate-400">Open Source</p>
          <h2 className="mt-1 text-2xl font-black tracking-tight text-slate-900">Commit Activity</h2>
          <p className="mt-1 text-sm text-slate-500">Last 365 days — stacked by project</p>
        </div>
        <button
          onClick={handleRefresh}
          disabled={saving || loading}
          className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-slate-700 disabled:opacity-50"
        >
          {saving ? "Saving…" : "Refresh &amp; Save"}
        </button>
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}

      {data && (
        <div className="mb-5 flex flex-wrap gap-4">
          {data.map((repo) => (
            <div key={repo.repo} className="flex items-center gap-2">
              <span className="inline-block h-3 w-3 rounded-sm" style={{ backgroundColor: repo.color }} />
              <span className="text-xs font-medium text-slate-600">{repo.repo}</span>
            </div>
          ))}
        </div>
      )}

      {loading && (
        <div className="flex h-64 items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-cyan-500 border-t-transparent" />
        </div>
      )}

      {!loading && data && (
        <div className="overflow-x-auto">
          <canvas ref={canvasRef} style={{ width: "760px", height: "260px" }} className="w-full rounded-xl" />
        </div>
      )}
    </div>
  );
}
