export default function Price({ price }: { price: number }) {
  return <div className="text-amber-500 text-3xl font-bold">${price.toFixed(2)}</div>;
}
