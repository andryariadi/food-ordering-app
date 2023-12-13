import { singleProduct } from "@/data";
import Image from "next/image";

export default function DetailProduct() {
  return (
    <>
      <main className="h-screen flex flex-col md:flex-row p-4 lg:px-20 xl:px-40">
        {singleProduct.img && (
          <div className="relative">
            <Image src={singleProduct.img} alt="pizza" width={500} height={500} className="object-contain" />
          </div>
        )}
        <div>
          <h1>{singleProduct.title}</h1>
          <p>{singleProduct.desc}</p>
        </div>
      </main>
    </>
  );
}
