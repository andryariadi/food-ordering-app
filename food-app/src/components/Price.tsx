type Props = {
  id: number;
  price: number;
  options?: { title: string; additionalPrice: number }[];
};

export default function Price({ id, price, options }: Props) {
  return (
    <>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">${price.toFixed(2)}</h2>
        <div className="flex gap-4">
          {options?.map((option) => (
            <button key={option.title} className="p-2 ring-1 ring-rose-600 rounded-md">
              {option.title}
            </button>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <div className="w-full flex justify-between p-3 ring-1 ring-rose-600">
            <span>Quantity</span>
            <div className="flex gap-4 items-center">
              <button>{"<"}</button>
              <span>1</span>
              <button>{">"}</button>
            </div>
          </div>
          <button className="bg-rose-600 text-white p-[0.80rem] w-56">Add to Cart</button>
        </div>
      </div>
    </>
  );
}
