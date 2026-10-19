"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

type Status = "idle" | "error" | "analyzing" | "notify" | "notified";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isPlayvidsUrl(raw: string): boolean {
  const trimmed = raw.trim();
  if (!trimmed) return false;
  let candidate = trimmed;
  if (!/^https?:\/\//i.test(candidate)) {
    candidate = `https://${candidate}`;
  }
  try {
    const url = new URL(candidate);
    return /(^|\.)playvids\.[a-z]{2,}$/i.test(url.hostname);
  } catch {
    return false;
  }
}

export default function DownloaderBox() {
  const [url, setUrl] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (timerRef.current) clearTimeout(timerRef.current);
    if (!isPlayvidsUrl(url)) {
      setStatus("error");
      setErrorMsg(
        "Please paste a valid Playvids video URL (e.g. https://www.playvids.com/...)."
      );
      return;
    }
    setErrorMsg("");
    setStatus("analyzing");
    timerRef.current = setTimeout(() => {
      setStatus("notify");
    }, 1000);
  };

  const handleNotify = (e: FormEvent) => {
    e.preventDefault();
    if (!EMAIL_RE.test(email.trim())) {
      setEmailError("Please enter a valid email address.");
      return;
    }
    setEmailError("");
    const key = "downloadxai-notify-emails";
    const existing: string[] = JSON.parse(
      localStorage.getItem(key) ?? "[]"
    );
    if (!existing.includes(email.trim())) {
      existing.push(email.trim());
      localStorage.setItem(key, JSON.stringify(existing));
    }
    setStatus("notified");
  };

  const inputBorder =
    status === "error"
      ? "border-accent-pink animate-shake"
      : "border-line focus-within:border-line-strong";

  return (
    <div className="mx-auto w-full max-w-2xl">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 sm:flex-row"
        noValidate
      >
        <input
          type="text"
          inputMode="url"
          autoComplete="off"
          spellCheck={false}
          value={url}
          onChange={(e) => {
            setUrl(e.target.value);
            if (status === "error") {
              setStatus("idle");
              setErrorMsg("");
            }
          }}
          placeholder="Paste a Playvids video URL here…"
          aria-label="Playvids video URL"
          aria-invalid={status === "error"}
          className={`h-14 flex-1 rounded-panel border bg-surface px-4 font-mono text-sm text-ink placeholder:text-ink-muted outline-none transition-colors ${inputBorder}`}
        />
        <button
          type="submit"
          disabled={status === "analyzing"}
          className="h-14 shrink-0 rounded-panel bg-brand-gradient px-8 font-display text-base font-semibold text-white shadow-lg shadow-purple-900/30 transition-all hover:brightness-110 active:scale-[.98] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto w-full"
        >
          {status === "analyzing" ? "Analyzing…" : "Download ↓"}
        </button>
      </form>

      {status === "error" && (
        <p className="mt-3 text-left text-sm text-accent-pink" role="alert">
          {errorMsg}
        </p>
      )}

      {status === "analyzing" && (
        <div
          className="mt-6 flex items-center justify-center gap-3 text-ink-secondary"
          role="status"
          aria-live="polite"
        >
          <span className="h-5 w-5 animate-spin rounded-full border-2 border-line-strong border-t-transparent" />
          <span className="text-sm">Analyzing your video URL…</span>
        </div>
      )}

      {(status === "notify" || status === "notified") && (
        <div className="card-surface mx-auto mt-6 max-w-xl rounded-box p-6">
          <p className="text-balance text-center text-base font-medium text-ink">
            🚀 The downloader is launching soon — leave your email to get
            notified.
          </p>
          {status === "notify" ? (
            <form
              onSubmit={handleNotify}
              className="mt-4 flex flex-col gap-3 sm:flex-row"
              noValidate
            >
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (emailError) setEmailError("");
                }}
                placeholder="you@example.com"
                aria-label="Email address"
                className="h-12 flex-1 rounded-card border border-line bg-surface-2 px-4 font-mono text-sm text-ink placeholder:text-ink-muted outline-none transition-colors focus:border-line-strong"
              />
              <button
                type="submit"
                className="h-12 shrink-0 rounded-card bg-brand-gradient px-6 font-display text-sm font-semibold text-white transition-all hover:brightness-110 active:scale-[.98]"
              >
                Notify me
              </button>
            </form>
          ) : (
            <p className="mt-4 text-center text-sm font-medium text-accent-lime">
              ✓ You&apos;re on the list! We&apos;ll email you at launch.
            </p>
          )}
          {status === "notify" && emailError && (
            <p className="mt-2 text-left text-sm text-accent-pink" role="alert">
              {emailError}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
