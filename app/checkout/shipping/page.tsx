"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useCart } from "@/components/cart/cart-context";

export default function ShippingPage() {
  const { state } = useCart();

  const total = state.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Shipping Details</h1>

      <pre>{JSON.stringify({ items: state.items, total }, null, 2)}</pre>

      <Link href="/checkout/payment">
        <Button>Proceed to Payment</Button>
      </Link>
    </div>
  );
}
