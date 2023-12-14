import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  return (
    <>
      <main className="flex items-center justify-center h-screen m-3">
        <div className="flex flex-col md:flex-row h-full md:h-[70%] md:w-full lg:w-[60%] 2xl:w-1/2 shadow-2xl rounded-md">
          <div className="relative h-full md:h-full w-full md:w-1/2">
            <Image src="/login.jpg" alt="login" fill className="object-cover" />
          </div>
          <div className="flex flex-col gap-8 p-10 md:w-1/2 justify-center">
            <h1 className="text-xl font-bold">Welcome</h1>
            <p>Log into your account or create a new one using social buttons</p>
            <button className="flex gap-4 p-4 ring-1 ring-rose-600 rounded-md">
              <Image src={"/google.png"} alt="google" width={20} height={20} className="object-contain" />
              <span>Sign in with Google</span>
            </button>
            <button className="flex gap-4 p-4 ring-1 ring-offset-cyan-500 rounded-md">
              <Image src={"/facebook.png"} alt="google" width={20} height={20} className="object-contain" />
              <span>Sign in with Facebook</span>
            </button>
            <p className="text-sm">
              Have a problem ?{" "}
              <Link href={"/contact"} className="text-rose-600 font-semibold">
                Contact us
              </Link>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
