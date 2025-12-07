import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ReactElement } from "react";

export default function ProductCard({
  product,
}: {
  product: {
    id: string;
    name: string;
    price: number;
    category: string;
    image: ReactElement;
  };
}) {
  return (
    <div className="border rounded-lg p-4 flex flex-col gap-4">
      <div className="mx-auto h-32">{product.image}</div>

      <h3 className="text-lg font-medium">{product.name}</h3>
      <p className="text-muted-foreground">€{product.price}</p>

      <Link href={`/product/${product.id}`} className="mt-auto">
        <Button className="w-full">View Product</Button>
      </Link>
    </div>
  );
}
