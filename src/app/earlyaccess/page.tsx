"use client";
import { useEffect } from "react";
import { track } from "@vercel/analytics";

export default function EarlyAccessRedirect() {
  useEffect(() => {
    try {
      track("redirect_click", { version: "earlyaccess", ref: document.referrer || "unknown" });
    } catch {}

    const t = setTimeout(() => {
      window.location.assign("/?v=earlyaccess");
    }, 250);

    return () => clearTimeout(t);
  }, []);

  return <span className="sr-only">Redirecting…</span>;
}
