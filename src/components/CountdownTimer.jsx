import { useEffect, useState } from "react";
import { COUNTDOWN_HOURS } from "../content";

// Evergreen countdown: each visitor gets their own fresh countdown
// starting the moment they land, held only in memory (no storage).
export default function CountdownTimer({ className = "" }) {
  const [deadline] = useState(() => Date.now() + COUNTDOWN_HOURS * 60 * 60 * 1000);
  const [remaining, setRemaining] = useState(deadline - Date.now());

  useEffect(() => {
    const id = setInterval(() => {
      setRemaining(Math.max(0, deadline - Date.now()));
    }, 1000);
    return () => clearInterval(id);
  }, [deadline]);

  const hours = Math.floor(remaining / (1000 * 60 * 60));
  const minutes = Math.floor((remaining / (1000 * 60)) % 60);
  const seconds = Math.floor((remaining / 1000) % 60);

  const pad = (n) => String(n).padStart(2, "0");

  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      {[
        { label: "Hours", value: hours },
        { label: "Minutes", value: minutes },
        { label: "Seconds", value: seconds },
      ].map((t) => (
        <div key={t.label} className="flex flex-col items-center">
          <div className="bg-brand-navy text-white text-2xl md:text-3xl font-bold rounded-lg px-4 py-2 min-w-[64px] text-center tabular-nums">
            {pad(t.value)}
          </div>
          <span className="text-xs uppercase tracking-wide text-gray-500 mt-1">
            {t.label}
          </span>
        </div>
      ))}
    </div>
  );
}
