"use client";

import { useEffect, useState } from "react";

type Props = {
  id: number;
  price: number;
  options?: { title: string; additionalPrice: number }[];
};

export default function Price({ id, price, options }: Props) {
  const [total, setTotal] = useState(price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    setTotal(quantity * (options ? price + options[selected].additionalPrice : price));
  }, [quantity, price, selected, options]);

  return (
    <>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">${total.toFixed(2)}</h2>
        <div className="flex gap-4">
          {options?.map((option, index) => (
            <button
              key={option.title}
              className="min-w-[6rem] p-2 ring-1 ring-rose-600 rounded-md"
              style={{
                background: index === selected ? "rgb(225 29 72)" : "white",
                color: index === selected ? "white" : "rgb(225 29 72)",
              }}
              onClick={() => {
                setSelected(index);
              }}
            >
              {option.title}
            </button>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <div className="w-full flex justify-between p-3 ring-1 ring-rose-600">
            <span>Quantity</span>
            <div className="flex gap-4 items-center">
              <button onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}>{"<"}</button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9))}>{">"}</button>
            </div>
          </div>
          <button className="bg-rose-600 text-white p-[0.80rem] w-56">Add to Cart</button>
        </div>
      </div>
    </>
  );
}
