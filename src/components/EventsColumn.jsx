import EventCard from "./EventCard";
import { AudioWaveformIcon, Task01Icon, PinIcon } from "@hugeicons/core-free-icons";

export default function EventsColumn() {
  return (
    <section>
      <h2 className="mb-6 flex items-center gap-2 text-[26px] font-semibold text-[#161515]">
        My Events <span className="text-[22px]">🤩</span>
      </h2>

      <div className="flex flex-col gap-5">
        <EventCard
          tone="blue"
          avatar="https://i.pravatar.cc/48?img=51"
          type="Webinar"
          date="Tu, 25.03"
          description="Understanding medical research, critical appraisal skills, and applying evidence-based guidelines in practice"
          startAt="Start at 12:30"
        />

        <EventCard
          tone="magenta"
          icon={AudioWaveformIcon}
          type="Lesson"
          date="We, 26.03"
          description="Overview of healthcare delivery systems, health policy, and their impact on patient care."
        />

        <EventCard
          tone="yellow"
          icon={PinIcon}
          type="Task"
          date="Th, 27.03"
          description="Examination of major global health issues, including infectious diseases, non-communicable diseases, and health disparities."
        />

        <div className="translate-y-4 opacity-90">
          <EventCard
            tone="green"
            icon={PinIcon}
            type="Task"
            date="Fr, 28.03"
            description=""
          />
        </div>
      </div>
    </section>
  );
}
