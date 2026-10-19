"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "dxai-cookie-ok";

export default function CookieBar() {
  const [mounted, setMounted] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setMounted(true);
      setShow(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(STORAGE_KEY, "1");
    setShow(false);
    // inject analytics here after consent, only when implemented
    // e.g. load Umami / GA script in this branch once analytics are added
    setTimeout(() => setMounted(false), 500);
  };

  if (!mounted) return null;

  return (
    <div
      aria-hidden={!show}
      className={`fixed inset-x-0 bottom-0 z-[90] px-4 pb-4 transition-all duration-500 ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0"
      }`}
    >
      <div className="card-surface mx-auto flex max-w-3xl flex-col items-center gap-3 rounded-panel px-5 py-4 sm:flex-row sm:justify-between">
        <p className="text-sm text-ink-secondary">
          We use cookies to improve your experience.{" "}
          <a
            href="/privacy"
            className="text-ink underline decoration-[#7C3AED]/60 underline-offset-4 transition-colors hover:decoration-[#22D3EE]"
          >
            Learn more
          </a>
        </p>
        <button
          type="button"
          onClick={handleAccept}
          className="h-10 shrink-0 rounded-card bg-brand-gradient px-5 font-display text-sm font-semibold text-white transition-all hover:brightness-110 active:scale-[.98]"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
