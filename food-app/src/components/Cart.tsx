import Image from "next/image";
import Link from "next/link";

export default function Cart() {
  return (
    <>
      <Link href="/cart" className="flex gap-2 items-center">
        <div className="relative w-8 h-8">
          <Image src="/cart.png" alt="cart" fill />
        </div>
        <span>Cart (3)</span>
      </Link>
    </>
  );
}
