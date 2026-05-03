import { Link } from "react-router-dom";
import { DEPLOYER_ADDRESS, shortenAddress } from "@/lib/contract";

interface Props {
  address: string;
  isFuji: boolean;
}

function WavyWhiteBorder() {
  const svg = encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="16" viewBox="0 0 48 16">
      <path d="M0 8 Q12 0 24 8 T48 8" fill="none" stroke="white" stroke-width="5" stroke-linecap="round"/>
    </svg>`
  );

  const bg = `url("data:image/svg+xml,${svg}")`;

  return (
    <div className="pointer-events-none absolute inset-0 rounded-2xl">
      <div
        className="absolute left-5 right-5 top-0 h-4"
        style={{ backgroundImage: bg, backgroundRepeat: "repeat-x", backgroundSize: "48px 16px" }}
      />
      <div
        className="absolute left-5 right-5 bottom-0 h-4"
        style={{ backgroundImage: bg, backgroundRepeat: "repeat-x", backgroundSize: "48px 16px" }}
      />
      <div
        className="absolute left-0 top-5 bottom-5 w-4"
        style={{
          backgroundImage: bg,
          backgroundRepeat: "repeat-y",
          backgroundSize: "16px 48px",
          transform: "rotate(180deg)",
        }}
      />
      <div
        className="absolute right-0 top-5 bottom-5 w-4"
        style={{
          backgroundImage: bg,
          backgroundRepeat: "repeat-y",
          backgroundSize: "16px 48px",
        }}
      />
    </div>
  );
}

function StatusPill({
  active,
  children,
}: {
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 font-mono text-[10px] tracking-widest uppercase ${
        active
          ? "bg-emerald-500/15 text-emerald-300 border border-emerald-400/40"
          : "bg-muted text-muted-foreground border border-border"
      }`}
    >
      {children}
    </span>
  );
}

export default function RoleIdentityPanel({ address, isFuji }: Props) {
  const isConnected = !!address;
  const isAdmin =
    !!address && address.toLowerCase() === DEPLOYER_ADDRESS.toLowerCase();

  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      {/* Patient */}
      <div className="relative rounded-2xl border-4 border-dashed border-yellow-400 bg-yellow-400/10 p-5 shadow-lg shadow-yellow-400/10">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="font-mono text-xs tracking-widest uppercase text-yellow-300">
              Role 01
            </p>
            <h2 className="font-heading text-2xl mt-2 text-yellow-100">
              Patient / Contributor
            </h2>
          </div>
          <div className="text-3xl">👁️</div>
        </div>

        <p className="text-sm text-yellow-100/80 mt-3 leading-6">
          用户提交眼健康 evidence，选择 private 或 shared，并保留数据控制权。
        </p>

        <div className="mt-4 space-y-2 text-sm">
          <p>• Register wallet</p>
          <p>• Submit sample eye-health evidence</p>
          <p>• Choose private / shared</p>
          <p>• Receive reward or visibility</p>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          <StatusPill active={isConnected}>Wallet {isConnected ? "Connected" : "Needed"}</StatusPill>
          <StatusPill active={isFuji}>Fuji {isFuji ? "Ready" : "Needed"}</StatusPill>
        </div>

        <Link
          to="/"
          className="mt-5 inline-flex w-full justify-center rounded-xl border border-yellow-300/60 bg-yellow-300/10 px-4 py-3 font-mono text-xs tracking-widest uppercase text-yellow-100 hover:bg-yellow-300/20 transition-all"
        >
          Go to M1 Submit Evidence
        </Link>
      </div>

      {/* Admin */}
      <div className="relative rounded-2xl bg-white/5 p-5 shadow-lg shadow-white/10 overflow-hidden">
        <WavyWhiteBorder />

        <div className="relative z-10">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="font-mono text-xs tracking-widest uppercase text-white/70">
                Role 02
              </p>
              <h2 className="font-heading text-2xl mt-2 text-white">
                Admin / Curator
              </h2>
            </div>
            <div className="text-3xl">🧪</div>
          </div>

          <p className="text-sm text-white/75 mt-3 leading-6">
            管理员筛选 shared + appraised + quality-qualified evidence，并创建 cohort。
          </p>

          <div className="mt-4 space-y-2 text-sm text-white/90">
            <p>• Review shared evidence inventory</p>
            <p>• Appraise quality score</p>
            <p>• Create cohort</p>
            <p>• Add eligible evidence to cohort</p>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            <StatusPill active={isConnected}>Wallet {isConnected ? "Connected" : "Needed"}</StatusPill>
            <StatusPill active={isAdmin}>Admin {isAdmin ? "Matched" : "Not Current Wallet"}</StatusPill>
          </div>

          <a
            href="#manager-panel"
            className="mt-5 inline-flex w-full justify-center rounded-xl border border-white/60 bg-white/10 px-4 py-3 font-mono text-xs tracking-widest uppercase text-white hover:bg-white/20 transition-all"
          >
            Open Cohort Manager
          </a>
        </div>
      </div>

      {/* Buyer */}
      <div className="relative rounded-2xl border-4 border-solid border-emerald-400 bg-emerald-400/10 p-5 shadow-lg shadow-emerald-400/10">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="font-mono text-xs tracking-widest uppercase text-emerald-300">
              Role 03
            </p>
            <h2 className="font-heading text-2xl mt-2 text-emerald-100">
              Buyer / Researcher
            </h2>
          </div>
          <div className="text-3xl">🔬</div>
        </div>

        <p className="text-sm text-emerald-100/80 mt-3 leading-6">
          研究方或机构买家选择 cohort，先 approve MockUSDC，再 purchase license。
        </p>

        <div className="mt-4 space-y-2 text-sm">
          <p>• Select cohort</p>
          <p>• Check evidence count and quality</p>
          <p>• Approve MockUSDC</p>
          <p>• Purchase cohort license</p>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          <StatusPill active={isConnected}>
            {isConnected ? shortenAddress(address) : "Wallet Needed"}
          </StatusPill>
          <StatusPill active={isFuji}>Fuji {isFuji ? "Ready" : "Needed"}</StatusPill>
        </div>

        <a
          href="#buyer-panel"
          className="mt-5 inline-flex w-full justify-center rounded-xl border border-emerald-300/60 bg-emerald-300/10 px-4 py-3 font-mono text-xs tracking-widest uppercase text-emerald-100 hover:bg-emerald-300/20 transition-all"
        >
          Open Buyer Panel
        </a>
      </div>
    </section>
  );
}