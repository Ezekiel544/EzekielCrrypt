"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [mounted, setMounted] = useState(false);
  const [exiting, setExiting] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    setMounted(true);
    const exitTimer = setTimeout(() => setExiting(true), 3500);
    const hideTimer = setTimeout(() => setHidden(true), 4200);
    return () => {
      clearTimeout(exitTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!mounted || hidden) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "#f5f5f5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        overflow: "hidden",
        animation: exiting ? "preloaderWipe 0.7s cubic-bezier(0.76,0,0.24,1) forwards" : "none",
      }}
    >
      <style>{`
        @keyframes letterFall {
          0%   { opacity: 0; transform: translateY(-120px) rotateX(60deg); }
          60%  { opacity: 1; transform: translateY(10px) rotateX(-5deg); }
          80%  { transform: translateY(-4px) rotateX(2deg); }
          100% { opacity: 1; transform: translateY(0) rotateX(0); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateX(-50%) translateY(10px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
        @keyframes barProgress {
          0%   { width: 0%; }
          60%  { width: 70%; }
          100% { width: 100%; }
        }
        @keyframes preloaderWipe {
          to { clip-path: inset(0 0 100% 0); }
        }
      `}</style>

      {/* Letters */}
      <div style={{ display: "flex", gap: "6px", alignItems: "flex-end" }}>
        {["E", "Z", "E", "K", "I", "E", "L"].map((letter, i) => (
          <span
            key={i}
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(48px, 8vw, 80px)",
              fontWeight: 700,
              color: "#0a0a0a",
              display: "inline-block",
              opacity: 0,
              animation: `letterFall 0.5s cubic-bezier(0.175,0.885,0.32,1.275) forwards`,
              animationDelay: `${0.1 + i * 0.1}s`,
            }}
          >
            {letter}
          </span>
        ))}
      </div>

      {/* Tagline */}
      <p
        style={{
          position: "absolute",
          bottom: "30%",
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: "'Courier New', monospace",
          fontSize: "13px",
          letterSpacing: "6px",
          color: "#0a0a0a",
          textTransform: "uppercase",
          opacity: 0,
          whiteSpace: "nowrap",
          animation: "fadeUp 0.5s ease forwards 1.1s",
        }}
      >
        &gt; Full Stack Developer
      </p>

      {/* Progress bar — dark */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          height: "3px",
          background: "#0a0a0a",
          width: "0%",
          animation: "barProgress 1.6s cubic-bezier(0.4,0,0.2,1) forwards 0.1s",
        }}
      />
    </div>
  );
}