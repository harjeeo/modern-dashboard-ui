import { useState } from "react";
import Navbar from "./components/Navbar";
import LearningPlanColumn from "./components/LearningPlanColumn";
import CenterColumn from "./components/CenterColumn";
import EventsColumn from "./components/EventsColumn";

export default function App() {
  const [active, setActive] = useState("learning");

  return (
    <div className="min-h-screen bg-black" style={{ "--panel-bg": "#f4f3ef" }}>
      <div className="mx-auto max-w-[1400px]">
        <Navbar active={active} onChange={setActive} />

        <main
          className="relative grid grid-cols-[1.05fr_1fr_0.85fr] gap-0 rounded-t-[32px] bg-[var(--panel-bg)] px-8 pb-16 pt-10"
        >
          <div className="pr-8">
            <LearningPlanColumn />
          </div>
          <div className="px-8">
            <CenterColumn />
          </div>
          <div className="relative pl-8">
            <span className="absolute left-0 top-2 bottom-2 w-px bg-black/[0.06]" />
            <div className="rounded-[28px] bg-[#ecebe6] p-5 -mr-2">
              <EventsColumn />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
