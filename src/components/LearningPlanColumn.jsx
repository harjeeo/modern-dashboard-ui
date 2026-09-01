import CourseCard from "./CourseCard";
import VideoCard from "./VideoCard";

const ITEMS = [
  {
    key: "med-term",
    render: () => (
      <CourseCard
        title={"Medical\nTerminology"}
        description="Learn basic medical language for effective communication."
        status="completed"
        corner="add"
      />
    ),
  },
  { key: "pharma", render: () => <VideoCard /> },
  {
    key: "disease",
    render: () => (
      <CourseCard
        title={"Disease\nPathophysiology"}
        description="Study the cellular and molecular mechanisms of disease."
        locked
      />
    ),
  },
];

export default function LearningPlanColumn() {
  return (
    <section>
      <h2 className="mb-6 flex items-center gap-2 text-[26px] font-semibold text-[#161515]">
        My Learning Plan <span className="text-[22px]">📖</span>
      </h2>

      <div className="flex flex-col gap-5">
        {ITEMS.map((item, i) => (
          <div key={item.key} className="relative flex gap-4">
            <div className="relative flex w-4 flex-none flex-col items-center">
              <span className="mt-6 h-3 w-3 flex-none rounded-full bg-[#c9d98e]" />
              {i !== ITEMS.length - 1 && (
                <span className="mt-1.5 flex-1 border-l-2 border-dotted border-[#c9d98e]" />
              )}
            </div>
            <div className="min-w-0 flex-1">{item.render()}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
