"use client";

import { useCart } from "@/components/cart/cart-context";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CheckoutPage() {
  const { state, removeItem } = useCart();

  const total = state.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Your Cart</h1>

      {state.items.length === 0 && <p>Your cart is empty.</p>}

      <ul className="space-y-4">
        {state.items.map((item) => (
          <li
            key={item.id}
            className="flex items-center justify-between border-b pb-2"
          >
            <div>
              <p>{item.name}</p>
              <p className="text-sm text-muted-foreground">
                {item.quantity} × €{item.price}
              </p>
            </div>
            <Button variant="destructive" onClick={() => removeItem(item.id)}>
              Remove
            </Button>
          </li>
        ))}
      </ul>

      {state.items.length > 0 && (
        <>
          <p className="text-lg font-semibold">Total: €{total.toFixed(2)}</p>

          <Link href="/checkout/shipping">
            <Button>Proceed to Shipping</Button>
          </Link>
        </>
      )}
    </div>
  );
}
