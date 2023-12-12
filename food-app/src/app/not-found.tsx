import Image from "next/image";

export default function NotFound() {
  return (
    <>
      <div className="flex justify-center h-screen">
        <Image src="/error.svg" alt="404" width={500} height={500} className="mb-[90px]" />
      </div>
    </>
  );
}
