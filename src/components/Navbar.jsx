import { HugeiconsIcon } from "@hugeicons/react";
import {
  Mortarboard02Icon,
  UserGroupIcon,
  Clock01Icon,
  Mail01Icon,
  DashboardSquare01Icon,
  ArrowDown01Icon,
} from "@hugeicons/core-free-icons";

const TABS = [
  { key: "learning", label: "Learning Plan", icon: Mortarboard02Icon, hasLabel: true },
  { key: "people", icon: UserGroupIcon, hasLabel: false },
  { key: "clock", icon: Clock01Icon, hasLabel: false },
  { key: "mail", icon: Mail01Icon, hasLabel: false },
  { key: "grid", icon: DashboardSquare01Icon, hasLabel: false },
];

const TAB_H = 20; // px, radius of the concave connector / tab corner

function Notch({ side }) {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute bottom-0"
      style={{
        [side]: -TAB_H,
        width: TAB_H,
        height: TAB_H,
        background:
          side === "left"
            ? `radial-gradient(circle at top left, transparent ${TAB_H}px, var(--panel-bg) ${TAB_H}px)`
            : `radial-gradient(circle at top right, transparent ${TAB_H}px, var(--panel-bg) ${TAB_H}px)`,
      }}
    />
  );
}

export default function Navbar({ active, onChange }) {
  return (
    <header className="relative z-10 bg-black">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-8 py-5">
        <div className="text-2xl font-extrabold tracking-tight text-white">Dei</div>

        <nav className="flex items-center gap-1">
          {TABS.map((tab) => {
            const isActive = active === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => onChange(tab.key)}
                className={[
                  "relative flex items-center gap-2 px-5 py-2.5 text-[15px] font-medium transition-colors",
                  isActive
                    ? "rounded-t-full rounded-b-none text-black"
                    : "rounded-full text-white/70 hover:text-white",
                ].join(" ")}
                style={isActive ? { background: "var(--panel-bg)" } : undefined}
              >
                <HugeiconsIcon icon={tab.icon} size={19} strokeWidth={1.8} />
                {tab.hasLabel && <span>{tab.label}</span>}
                {isActive && (
                  <>
                    <Notch side="left" />
                    <Notch side="right" />
                  </>
                )}
              </button>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/64?img=13"
            alt="Ellington Thom"
            className="h-10 w-10 rounded-full object-cover ring-2 ring-fuchsia-400/60"
          />
          <div className="leading-tight">
            <p className="text-[14px] font-semibold text-white">Ellington Thom</p>
            <p className="text-[12px] text-white/50">annette@gmail.com</p>
          </div>
          <HugeiconsIcon icon={ArrowDown01Icon} size={16} className="text-white/60" />
        </div>
      </div>
    </header>
  );
}
