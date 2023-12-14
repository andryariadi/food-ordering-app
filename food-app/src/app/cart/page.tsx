import Image from "next/image";

export default function CartPage() {
  return (
    <>
      <main className="flex flex-col lg:flex-row h-screen justify-center items-center text-rose-600 mt-5">
        <div className="container-cart flex-1 h-full w-full p-4 flex flex-col md:flex-row justify-center md:flex-wrap overflow-y-scroll lg:p-20 xl:p-30">
          <div className="w-full flex items-center justify-between mb-2">
            <Image src="/temporary/p1.png" alt="pizza" width={100} height={100} className="object-contain" />
            <div>
              <h1 className="text-2xl font-bold uppercase">Silician</h1>
              <span>Large</span>
            </div>
            <h2 className="font-bold">$24.90</h2>
            <span className="cursor-pointer">X</span>
          </div>
          <div className="w-full flex items-center justify-between mb-2">
            <Image src="/temporary/p1.png" alt="pizza" width={100} height={100} className="object-contain" />
            <div>
              <h1 className="text-2xl font-bold uppercase">Silician</h1>
              <span>Large</span>
            </div>
            <h2 className="font-bold">$24.90</h2>
            <span className="cursor-pointer">X</span>
          </div>
          <div className="w-full flex items-center justify-between mb-2">
            <Image src="/temporary/p1.png" alt="pizza" width={100} height={100} className="object-contain" />
            <div>
              <h1 className="text-2xl font-bold uppercase">Silician</h1>
              <span>Large</span>
            </div>
            <h2 className="font-bold">$24.90</h2>
            <span className="cursor-pointer">X</span>
          </div>
        </div>
        <div className="bg-fuchsia-50 flex-1 h-full w-full p-4 flex flex-col gap-4 justify-center lg:p-20 xl:p-30 2xl:text-xl 2xl:gap-6">
          <div className="flex justify-between">
            <span>Subtotal (3 items)</span>
            <span>$74.70</span>
          </div>
          <div className="flex justify-between">
            <span>Service Cost</span>
            <span>$00.0</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery Cost</span>
            <span className="text-teal-600">FREE!</span>
          </div>
          <hr className="border-rose-600 my-2" />
          <div className="flex justify-between">
            <span>TOTAL (INCL. VAT)</span>
            <span className="font-bold">$74.70</span>
          </div>
          <button className="bg-rose-600 text-white p-2 rounded-md self-end">CheckOut</button>
        </div>
      </main>
    </>
  );
}
