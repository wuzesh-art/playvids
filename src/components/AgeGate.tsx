"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "dxai-age-ok";
const THIRTY_DAYS = 30 * 24 * 60 * 60 * 1000;

export default function AgeGate() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const ts = Number(stored);
      if (Number.isFinite(ts) && Date.now() - ts < THIRTY_DAYS) {
        setShow(false);
      }
    }
  }, []);

  const handleEnter = () => {
    localStorage.setItem(STORAGE_KEY, String(Date.now()));
    setShow(false);
  };

  const handleExit = () => {
    window.location.href = "https://www.google.com";
  };

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-base px-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="age-gate-title"
    >
      <div className="card-surface w-full max-w-md rounded-box p-8 text-center">
        <img
          src="/logo_icon.png"
          alt="downloadxAI"
          width={56}
          height={56}
          className="mx-auto h-14 w-14 rounded-panel"
        />
        <h2
          id="age-gate-title"
          className="mt-5 font-display text-2xl font-bold tracking-tight"
        >
          Age Verification
        </h2>
        <p className="mt-3 text-ink-secondary">
          This site is intended for adults 18+.
        </p>
        <div className="mt-6 flex flex-col gap-3">
          <button
            type="button"
            onClick={handleEnter}
            className="h-12 rounded-panel bg-brand-gradient px-6 font-display text-sm font-semibold text-white transition-all hover:brightness-110 active:scale-[.98]"
          >
            I am 18 or older — Enter
          </button>
          <button
            type="button"
            onClick={handleExit}
            className="h-12 rounded-panel border border-line px-6 font-display text-sm font-semibold text-ink-secondary transition-colors hover:border-line-strong hover:text-ink"
          >
            Exit
          </button>
        </div>
      </div>
    </div>
  );
}
