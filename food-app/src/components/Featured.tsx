import { featuredProducts } from "@/data";
import Image from "next/image";

export default function Featured() {
  return (
    <>
      <div className="card-container overflow-x-scroll text-rose-600">
        {/* WRAPPER */}
        <div className="w-max flex">
          {/* CARD */}
          {featuredProducts.map((product) => (
            <div key={product.id} className="w-screen md:w-[50vw] xl:w-[33vw] h-[60vh] xl:h-[90vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-50 transition-all duration-300">
              {product.img && (
                <div className="relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500">
                  <Image src={product.img} alt="featured" fill className="object-contain" />
                </div>
              )}
              <div className="flex-1 flex flex-col items-center justify-center text-center gap-4 py-5">
                <h1 className="text-xl xl:text-2xl 2xl:text-3xl font-bold uppercase">{product.title}</h1>
                <p className="p-4 2xl:p-8">{product.desc}</p>
                <span className="text-xl font-bold">${product.price}</span>
                <button className="bg-rose-600 text-white p-2 rounded-md">Add to Cart</button>
              </div>
            </div>
          ))}
          {/* END CARD */}
        </div>
        {/* END WRAPPER */}
      </div>
    </>
  );
}
