"use client";
import { useEffect } from "react";

export default function WaitlistRedirect() {
  useEffect(() => {
    // record the pageview, then jump
    window.location.replace("/?v=waitlist");
  }, []);
  return null; // no flash, just an instant redirect
}
