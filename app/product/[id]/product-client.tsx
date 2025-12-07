"use client";

import { useCart } from "@/components/cart/cart-context";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ReactElement } from "react";
import { toast } from "sonner";

export type ProductClientProps = {
  product: {
    id: string;
    name: string;
    price: number;
    image: ReactElement;
  };
};

export default function ProductPageClient({ product }: ProductClientProps) {
  const { addItem } = useCart();

  const handleAdd = () => {
    toast.success("Item added to cart");

    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
    });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-semibold">{product.name}</h1>

        <div className="border-2 border-accent rounded-md items-center justify-center p-6">
          {product.image}
        </div>
      </div>

      <div className="space-y-6">
        <p className="font-semibold">Details</p>

        <ul className="pl-6 text-sm list-disc">
          <li>Bulletpoint 1</li>
          <li>Bulletpoint 2</li>
          <li>Bulletpoint 3</li>
          <li>Bulletpoint 4</li>
          <li>Bulletpoint 5</li>
        </ul>

        <p className="text-xl font-medium">€{product.price}</p>

        <Button onClick={handleAdd}>Add to Cart</Button>
      </div>
    </div>
  );
}
