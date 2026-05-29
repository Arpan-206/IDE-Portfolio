"use client";

import dynamic from "next/dynamic";
import IDESkeleton from "@/components/IDESkeleton";

const IDE = dynamic(() => import("@/components/IDE"), {
  ssr: false,
  loading: () => <IDESkeleton />,
});

export default function Home() {
  return <IDE />;
}
