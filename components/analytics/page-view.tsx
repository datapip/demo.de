"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { pageView } from "@/lib/tracking";

type PageViewTrackerProps = {
  title: string;
};

export default function PageView({ title }: PageViewTrackerProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const fullPath =
      pathname + (searchParams.toString() ? `?${searchParams.toString()}` : "");
    pageView(fullPath, title ?? document.title);
  }, [pathname, searchParams, title]);

  return null;
}
