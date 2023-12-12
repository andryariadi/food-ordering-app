import Link from "next/link";
import Menu from "./Menu";

export default function Navbar() {
  return (
    <>
      <nav className="h-12 flex justify-between items-center p-4 text-red-500 border-b-2 border-b-red-500">
        <div className="text-2xl font-bold">
          <Link href="/">McFOOD</Link>
        </div>
        <div>
          <Menu />
        </div>
      </nav>
    </>
  );
}
