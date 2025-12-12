import React, { useEffect, useRef, useState } from "react";

export const MiniEyes: React.FC = () => {
  const size = 30;
  const pupilSize = 8;
  const maxOffset = 6;

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
    <div className="flex gap-2 items-center">
      {/* Left eye */}
      <div
        ref={leftEyeRef}
        className="relative flex items-center justify-center rounded-full bg-white dark:bg-zinc-100 shadow-md border border-zinc-200 dark:border-zinc-300"
        style={{ width: size, height: size }}
      >
        <div
          className="absolute rounded-full"
          style={{
            width: pupilSize * 2.2,
            height: pupilSize * 2.2,
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
              boxShadow: "0 0 4px rgba(215,25,33,0.4)",
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
            width: size * 0.18,
            height: size * 0.18,
            borderRadius: "999px",
            background: "rgba(255,255,255,0.8)",
            filter: "blur(2px)",
          }}
        />
      </div>

      {/* Right eye */}
      <div
        ref={rightEyeRef}
        className="relative flex items-center justify-center rounded-full bg-white dark:bg-zinc-100 shadow-md border border-zinc-200 dark:border-zinc-300"
        style={{ width: size, height: size }}
      >
        <div
          className="absolute rounded-full"
          style={{
            width: pupilSize * 2.2,
            height: pupilSize * 2.2,
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
              boxShadow: "0 0 4px rgba(215,25,33,0.4)",
              ...getPupilStyle(rightEyeRef.current),
            }}
          />
        </div>

        <div
          style={{
            position: "absolute",
            right: size * 0.2,
            top: size * 0.2,
            width: size * 0.18,
            height: size * 0.18,
            borderRadius: "999px",
            background: "rgba(255,255,255,0.8)",
            filter: "blur(2px)",
          }}
        />
      </div>
    </div>
  );
};
