"use client";
import { useEffect } from "react";

export default function EarlyAccessRedirect() {
  useEffect(() => {
    window.location.replace("/?v=earlyaccess");
  }, []);
  return null;
}
