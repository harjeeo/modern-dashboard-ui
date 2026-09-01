import { HugeiconsIcon } from "@hugeicons/react";
import { PlayIcon, Clock01Icon, MusicNote02Icon } from "@hugeicons/core-free-icons";

const AVATARS = [
  "https://i.pravatar.cc/48?img=32",
  "https://i.pravatar.cc/48?img=45",
  "https://i.pravatar.cc/48?img=5",
];

export default function VideoCard() {
  return (
    <div className="relative overflow-hidden rounded-[26px] bg-gradient-to-br from-[#e9c9ff] via-[#eccafe] to-[#f3d3ff] p-5">
      <HugeiconsIcon
        icon={MusicNote02Icon}
        size={22}
        className="absolute left-10 top-8 text-white/70"
      />
      <HugeiconsIcon
        icon={MusicNote02Icon}
        size={16}
        className="absolute left-24 top-16 rotate-12 text-white/60"
      />

      <button className="absolute right-6 top-1/2 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#161515] shadow-md">
        <HugeiconsIcon icon={PlayIcon} size={20} strokeWidth={0} fill="currentColor" />
      </button>

      <h3 className="text-[21px] font-semibold leading-snug text-[#2c1a3d]">
        Pharmacology
        <br />
        Basics
      </h3>
      <p className="mt-1.5 max-w-[70%] text-[13.5px] leading-relaxed text-[#5b4470]">
        Learn basic medical language for effective communication.
      </p>

      <div className="mt-8 flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/70 px-3.5 py-1.5 text-[13px] font-medium text-[#2c1a3d] backdrop-blur">
          <HugeiconsIcon icon={Clock01Icon} size={14} />
          Watching 00:30
        </span>
        <div className="flex -space-x-2.5">
          {AVATARS.map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              className="h-8 w-8 rounded-full object-cover ring-2 ring-white/80"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
