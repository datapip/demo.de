// components/CartIcon.tsx
"use client";

import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useCart } from "./cart-context";
import { Button } from "../ui/button";

export default function CartIcon() {
  const { state } = useCart();
  const count = state.items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Button variant="outline" asChild>
      <Link href="/checkout" className="relative border rounded">
        <ShoppingCart className="h-4 w-4" />

        {count > 0 && (
          <span
            className="
          absolute -top-2 -right-2 
          bg-black text-white 
          rounded-full text-xs 
          h-5 w-5 flex items-center justify-center
        "
          >
            {count}
          </span>
        )}
      </Link>
    </Button>
  );
}
