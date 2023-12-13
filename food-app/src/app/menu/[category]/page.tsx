import { pizzas } from "@/data";
import Image from "next/image";
import Link from "next/link";

export default function CategoryPage() {
  return (
    <>
      <main className="flex flex-wrap">
        {pizzas.map((item) => (
          <Link href={`/product/${item.id}`} key={item.id} className="w-full sm:w-1/2 lg:w-1/3 h-[60vh] border-r-2 border-b-2 border-rose-600 p-4 flex flex-col justify-between group even:bg-fuchsia-50">
            {item.img && (
              <div className="relative h-[80%]">
                <Image src={item.img} alt="pizza" fill className="object-contain" />
              </div>
            )}
            <div className="flex items-center justify-between font-bold text-rose-600">
              <h1 className="text-2xl uppercase p-2">{item.title}</h1>
              <p className="text-xl group-hover:hidden">${item.price}</p>
              <button className="hidden bg-rose-600 text-white p-2 rounded-md group-hover:block">Add to Cart</button>
            </div>
          </Link>
        ))}
      </main>
    </>
  );
}
