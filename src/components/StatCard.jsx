export default function StatCard({ value, label, tone = "light", emoji }) {
  const toneStyles =
    tone === "green"
      ? "bg-[#c9f0a0] text-[#2c3a12]"
      : "bg-white text-[#161515] ring-1 ring-black/[0.04]";

  return (
    <div
      className={`relative flex flex-1 flex-col items-center justify-center gap-1 rounded-[22px] py-5 ${toneStyles}`}
    >
      {emoji && <span className="absolute right-3 top-3 text-lg">{emoji}</span>}
      <span className="text-[28px] font-bold leading-none">{value}</span>
      <span className="text-[13px] font-medium opacity-70">{label}</span>
    </div>
  );
}
