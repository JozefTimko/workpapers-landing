"use client";
import { useEffect } from "react";
export default function WaitlistRedirect() {
  useEffect(() => { window.location.replace("/?v=waitlist"); }, []);
  return null;
}
