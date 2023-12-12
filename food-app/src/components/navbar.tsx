import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <nav className="h-20 flex justify-between items-center p-4 text-red-500 border-b-2 border-b-red-500">
        <div className="text-2xl font-bold">
          <Link href="/">
            <Image src="/mcfood.svg" alt="logo" width={180} height={180} />
          </Link>
        </div>
        <div>
          <Menu />
        </div>
      </nav>
    </>
  );
}
