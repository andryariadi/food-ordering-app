import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import Cart from "./Cart";

export default function Navbar() {
  const user = false;
  return (
    <>
      <nav className="h-20 flex justify-between items-center p-4 text-rose-600 font-bold text-lg border-b-2 border-b-rose-600">
        <div className="hidden md:flex gap-4">
          <Link href="/" className=" hover:text-xl transition-all duration-300">
            Home
          </Link>
          <Link href="/menu" className=" hover:text-xl transition-all duration-300">
            Menu
          </Link>
          <Link href="/contact" className=" hover:text-xl transition-all duration-300">
            Contact
          </Link>
        </div>
        <div className="text-2xl font-bold">
          <Link href="/">
            <Image src="/mcfood.svg" alt="logo" width={180} height={180} />
          </Link>
        </div>
        <div className="md:hidden">
          <Menu />
        </div>
        <div className="hidden md:flex gap-4 items-center">
          <div className="flex items-center gap-2 bg-amber-500 p-1 rounded-md cursor-pointer hover:text-xl transition-all duration-300">
            <Image src="/phone.png" width={20} height={20} alt="phone" />
            <p>+62 123 456</p>
          </div>
          <div className="hover:text-xl transition-all duration-300">{user ? <Link href="/orders">Order</Link> : <Link href="/login">Login</Link>}</div>
          <Cart />
        </div>
      </nav>
    </>
  );
}
