"use client"

import { useEffect, useState } from "react"

export default function WhatsAppButton() {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    // Shake every 4 seconds
    const interval = setInterval(() => {
      setAnimate(true)
      setTimeout(() => setAnimate(false), 800)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <style>{`
        @keyframes whatsapp-shake {
          0%   { transform: rotate(0deg) scale(1); }
          15%  { transform: rotate(-15deg) scale(1.1); }
          30%  { transform: rotate(15deg) scale(1.1); }
          45%  { transform: rotate(-10deg) scale(1.1); }
          60%  { transform: rotate(10deg) scale(1.1); }
          75%  { transform: rotate(-5deg) scale(1); }
          100% { transform: rotate(0deg) scale(1); }
        }
        @keyframes whatsapp-pulse {
          0%   { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.6); }
          70%  { box-shadow: 0 0 0 12px rgba(37, 211, 102, 0); }
          100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
        }
        .whatsapp-btn {
          animation: whatsapp-pulse 2s infinite;
          transition: background-color 0.2s;
        }
        .whatsapp-btn:hover {
          background-color: #1ebe5d !important;
          transform: scale(1.1);
        }
        .whatsapp-btn.shake {
          animation: whatsapp-shake 0.8s ease, whatsapp-pulse 2s infinite;
        }
      `}</style>
      <a
        href="https://wa.me/2349037000396"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className={`whatsapp-btn${animate ? " shake" : ""}`}
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          zIndex: 99999,
          backgroundColor: "#25D366",
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          textDecoration: "none",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          width="26"
          height="26"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.855L.057 23.55a.75.75 0 0 0 .916.937l5.9-1.54A11.955 11.955 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.704 9.704 0 0 1-4.989-1.378l-.356-.214-3.696.968.984-3.595-.233-.37A9.712 9.712 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
        </svg>
      </a>
    </>
  )
}