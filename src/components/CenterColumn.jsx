import { HugeiconsIcon } from "@hugeicons/react";
import { Search01Icon } from "@hugeicons/core-free-icons";
import StatCard from "./StatCard";
import CourseCard from "./CourseCard";

export default function CenterColumn() {
  return (
    <section className="flex flex-col gap-5">
      <div className="relative">
        <HugeiconsIcon
          icon={Search01Icon}
          size={18}
          className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-[#a3a096]"
        />
        <input
          type="text"
          placeholder="Search"
          className="w-full rounded-full bg-white py-3.5 pl-12 pr-5 text-[14px] text-[#161515] placeholder:text-[#a3a096] ring-1 ring-black/[0.04] outline-none focus:ring-black/10"
        />
      </div>

      <div className="flex gap-4">
        <StatCard value="26" label="Total" />
        <StatCard value="2" label="Completed" tone="green" emoji="🎉" />
        <StatCard value="23" label="Upcoming" />
      </div>

      <CourseCard
        title={"Anatomy and\nPhysiology"}
        description="Understand the structure and function of the human body."
        status="completed"
        corner="spark"
      />

      <CourseCard
        title={"Medical Ethics and\nProfessionalism"}
        description="Understand ethical principles and professionalism in healthcare."
        status="upcoming"
        locked
      />
    </section>
  );
}
