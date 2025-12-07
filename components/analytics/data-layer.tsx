"use client";

import { useEffect } from "react";

export function DataLayer() {
  useEffect(() => {
    if (!window.dataLayer) {
      window.dataLayer = [];
    }

    window.dataLayer.push({
      event: "initialized",
      timestamp: Date.now(),
    });
  }, []);

  return null;
}
