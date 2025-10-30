"use client";
import { useEffect } from "react";
import { track } from "@vercel/analytics";

export default function DemoRedirect() {
  useEffect(() => {
    try {
      track("redirect_click", { version: "demo", ref: document.referrer || "unknown" });
    } catch {}

    const t = setTimeout(() => {
      window.location.assign("/?v=demo");
    }, 250);

    return () => clearTimeout(t);
  }, []);

  return <span className="sr-only">Redirecting…</span>;
}
