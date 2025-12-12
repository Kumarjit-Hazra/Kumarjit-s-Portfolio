import React, { useEffect, useRef, useState } from "react";

export const EyesCard: React.FC = () => {
  const size = 120;
  const pupilSize = 24;
  const maxOffset = 18;

  const containerRef = useRef<HTMLDivElement>(null);
  const [pointer, setPointer] = useState({ x: null as number | null, y: null as number | null });

  useEffect(() => {
    function handleMove(e: MouseEvent | TouchEvent) {
      const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const y = 'touches' in e ? e.touches[0].clientY : e.clientY;
      setPointer({ x, y });
    }

    function handleLeave() {
      setPointer({ x: null, y: null });
    }

    window.addEventListener("mousemove", handleMove as EventListener);
    window.addEventListener("touchmove", handleMove as EventListener, { passive: true });
    window.addEventListener("mouseleave", handleLeave);
    window.addEventListener("touchend", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove as EventListener);
      window.removeEventListener("touchmove", handleMove as EventListener);
      window.removeEventListener("mouseleave", handleLeave);
      window.removeEventListener("touchend", handleLeave);
    };
  }, []);

  function getPupilStyle(eyeEl: HTMLDivElement | null) {
    if (!eyeEl || pointer.x === null || pointer.y === null) {
      return { transform: "translate(0px, 0px)" };
    }

    const rect = eyeEl.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    const dx = pointer.x - cx;
    const dy = pointer.y - cy;

    const dist = Math.sqrt(dx * dx + dy * dy) || 1;
    const ratio = Math.min(maxOffset / dist, 1);
    const px = dx * ratio;
    const py = dy * ratio;

    return {
      transform: `translate(${px}px, ${py}px)`,
      transition: "transform 80ms linear",
    };
  }

  const leftEyeRef = useRef<HTMLDivElement>(null);
  const rightEyeRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="h-full w-full bg-zinc-50 dark:bg-nothing-panel rounded-3xl border border-zinc-200 dark:border-zinc-800 flex items-center justify-center p-6 relative overflow-hidden group"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-100 to-transparent dark:from-zinc-800/50 dark:to-transparent opacity-50" />
      
      <div className="flex gap-4 items-center relative z-10">
        {/* Left eye */}
        <div
          ref={leftEyeRef}
          className="relative flex items-center justify-center rounded-full bg-white dark:bg-zinc-100 shadow-lg border-2 border-zinc-200 dark:border-zinc-300"
          style={{ width: size, height: size }}
        >
          <div
            className="absolute rounded-full"
            style={{
              width: pupilSize * 2.4,
              height: pupilSize * 2.4,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              className="rounded-full"
              style={{
                width: pupilSize,
                height: pupilSize,
                background: "radial-gradient(circle at 30% 30%, #D71921, #000)",
                boxShadow: "inset -4px -4px 8px rgba(255,255,255,0.1), 0 0 12px rgba(215,25,33,0.3)",
                ...getPupilStyle(leftEyeRef.current),
              }}
            />
          </div>

          {/* Highlight */}
          <div
            style={{
              position: "absolute",
              right: size * 0.2,
              top: size * 0.2,
              width: size * 0.15,
              height: size * 0.15,
              borderRadius: "999px",
              background: "rgba(255,255,255,0.7)",
              filter: "blur(4px)",
            }}
          />
        </div>

        {/* Spacer */}
        <div className="w-4 h-4 rounded-full bg-transparent" />

        {/* Right eye */}
        <div
          ref={rightEyeRef}
          className="relative flex items-center justify-center rounded-full bg-white dark:bg-zinc-100 shadow-lg border-2 border-zinc-200 dark:border-zinc-300"
          style={{ width: size, height: size }}
        >
          <div
            className="absolute rounded-full"
            style={{
              width: pupilSize * 2.4,
              height: pupilSize * 2.4,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              className="rounded-full"
              style={{
                width: pupilSize,
                height: pupilSize,
                background: "radial-gradient(circle at 30% 30%, #D71921, #000)",
                boxShadow: "inset -4px -4px 8px rgba(255,255,255,0.1), 0 0 12px rgba(215,25,33,0.3)",
                ...getPupilStyle(rightEyeRef.current),
              }}
            />
          </div>

          <div
            style={{
              position: "absolute",
              right: size * 0.2,
              top: size * 0.2,
              width: size * 0.15,
              height: size * 0.15,
              borderRadius: "999px",
              background: "rgba(255,255,255,0.7)",
              filter: "blur(4px)",
            }}
          />
        </div>
      </div>

      {/* Label */}
      <div className="absolute bottom-4 left-0 right-0 text-center">
        <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">
          Watching You
        </span>
      </div>
    </div>
  );
};
