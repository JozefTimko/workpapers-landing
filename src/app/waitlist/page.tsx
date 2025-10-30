"use client";
import { useEffect } from "react";
import { track } from "@vercel/analytics";

export default function WaitlistRedirect() {
  useEffect(() => {
    // Record the click (appears in Analytics → Events)
    try {
      track("redirect_click", { version: "waitlist", ref: document.referrer || "unknown" });
    } catch {}

    // Allow the analytics script to initialize, then redirect
    const t = setTimeout(() => {
      window.location.assign("/?v=waitlist");
    }, 250);

    return () => clearTimeout(t);
  }, []);

  return <span className="sr-only">Redirecting…</span>;
}
