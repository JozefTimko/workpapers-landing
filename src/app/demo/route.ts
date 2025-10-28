"use client";
import { useEffect } from "react";

export default function DemoRedirect() {
  useEffect(() => {
    window.location.replace("/?v=demo");
  }, []);
  return null;
}
