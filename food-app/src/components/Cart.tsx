import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

export default function Cart() {
  return (
    <Link href="/cart" className="flex gap-2 items-center">
      <div className="relative flex items-center">
        <div className="flex items-center justify-center absolute right-[-5px] top-[0] text-[10px] bg-amber-400 h-5 w-5 rounded-full text-white">
          <span>5</span>
        </div>
        <div>
          <FaShoppingCart size={30} />
        </div>
      </div>
    </Link>
  );
}
