"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, [router]);

  return (
    <>
      <div className="flex justify-center h-screen">
        <Image src="/error.svg" alt="404" width={500} height={500} className="mb-[90px]" />
      </div>
    </>
  );
}
