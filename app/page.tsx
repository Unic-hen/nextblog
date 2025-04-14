"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/home");
  }, [router]);

  return null; // 或者可以显示一个加载动画
}
