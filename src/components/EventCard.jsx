import { HugeiconsIcon } from "@hugeicons/react";
import { Clock01Icon, PinIcon } from "@hugeicons/core-free-icons";

const TONES = {
  blue: {
    wrap: "bg-[#d3e8ff]",
    chip: "bg-white/70 text-[#0f3a66]",
  },
  magenta: {
    wrap: "bg-[#dcc9f4]",
    chip: "bg-white/50 text-[#3a1a4d]",
  },
  yellow: {
    wrap: "bg-[#ffe9a8]",
    chip: "bg-white/60 text-[#5c4a08]",
  },
  green: {
    wrap: "bg-[#c9f0a0]",
    chip: "bg-white/60 text-[#2c3a12]",
  },
};

export default function EventCard({
  icon,
  avatar,
  type,
  date,
  description,
  tone = "blue",
  startAt,
  pinned,
}) {
  const t = TONES[tone];
  return (
    <div className={`rounded-[24px] p-5 ${t.wrap}`}>
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {avatar ? (
            <img src={avatar} alt="" className="h-7 w-7 rounded-full object-cover" />
          ) : (
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/60">
              <HugeiconsIcon icon={icon ?? PinIcon} size={14} />
            </span>
          )}
          <span className="text-[14px] font-semibold text-[#161515]">{type}</span>
        </div>
        <span className="text-[12.5px] font-medium text-[#161515]/60">{date}</span>
      </div>

      <p className="text-[13.5px] leading-relaxed text-[#161515]/75">{description}</p>

      {startAt && (
        <div className={`mt-4 flex items-center justify-center gap-1.5 rounded-full py-2 text-[12.5px] font-medium ${t.chip}`}>
          <HugeiconsIcon icon={Clock01Icon} size={13} />
          {startAt}
        </div>
      )}
    </div>
  );
}
