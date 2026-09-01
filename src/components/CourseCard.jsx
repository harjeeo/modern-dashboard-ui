import { HugeiconsIcon } from "@hugeicons/react";
import {
  Add01Icon,
  Tick02Icon,
  Cancel01Icon,
  MoreHorizontalIcon,
  Clock01Icon,
  LockIcon,
  Recycle03Icon,
} from "@hugeicons/core-free-icons";

const STATUS_STYLES = {
  completed: "bg-[#c9f0a0] text-[#2c3a12]",
  upcoming: "bg-[#eceae4] text-[#4a473f]",
};

function StatusBadge({ status }) {
  if (status === "completed") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#c9f0a0] px-3.5 py-1.5 text-[13px] font-medium text-[#2c3a12]">
        Completed <span>🍯</span>
      </span>
    );
  }
  if (status === "upcoming") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#eceae4] px-3.5 py-1.5 text-[13px] font-medium text-[#4a473f]">
        Upcoming <HugeiconsIcon icon={Recycle03Icon} size={13} />
      </span>
    );
  }
  return null;
}

const CORNER_ICON = {
  add: Add01Icon,
  spark: null,
  lock: LockIcon,
};

export default function CourseCard({ title, description, status, corner, locked }) {
  return (
    <div className="relative rounded-[26px] bg-white p-5 shadow-[0_1px_2px_rgba(20,20,20,0.04)] ring-1 ring-black/[0.04]">
      {corner === "add" && (
        <span className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full bg-[#d7f0a2] text-[#33430f]">
          <HugeiconsIcon icon={Add01Icon} size={17} strokeWidth={2} />
        </span>
      )}
      {corner === "spark" && (
        <span className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full bg-[#d7f0a2] text-[#33430f] text-[15px]">
          ✻
        </span>
      )}
      {locked && (
        <span className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full bg-[#eceae4] text-[#8a8678]">
          <HugeiconsIcon icon={LockIcon} size={15} />
        </span>
      )}

      <h3 className="whitespace-pre-line pr-10 text-[19px] font-semibold leading-snug text-[#161515]">
        {title}
      </h3>
      <p className="mt-1.5 text-[13.5px] leading-relaxed text-[#8a8678]">
        {description}
      </p>

      {status && (
        <div className="mt-4 flex items-center justify-between">
          <StatusBadge status={status} />
          {status === "completed" && (
            <div className="flex items-center gap-2">
              <button className="flex h-8 w-8 items-center justify-center rounded-full bg-[#eceae4] text-[#4a473f]">
                <HugeiconsIcon icon={MoreHorizontalIcon} size={16} />
              </button>
              <button className="flex h-8 w-8 items-center justify-center rounded-full bg-[#eceae4] text-[#4a473f]">
                <HugeiconsIcon icon={Cancel01Icon} size={14} />
              </button>
              <button className="flex h-8 w-8 items-center justify-center rounded-full bg-[#161515] text-white">
                <HugeiconsIcon icon={Tick02Icon} size={15} />
              </button>
            </div>
          )}
          {status === "upcoming" && (
            <button className="flex h-8 w-8 items-center justify-center rounded-full bg-[#eceae4] text-[#4a473f]">
              <HugeiconsIcon icon={MoreHorizontalIcon} size={16} />
            </button>
          )}
        </div>
      )}
    </div>
  );
}
