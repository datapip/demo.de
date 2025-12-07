"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useCart } from "@/components/cart/cart-context";
import PageView from "@/components/analytics/page-view";
import { Suspense } from "react";

export default function PaymentPage() {
  const { state } = useCart();

  const total = state.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Payment</h1>

      <pre>{JSON.stringify({ items: state.items, total }, null, 2)}</pre>

      <Link href="/checkout/success">
        <Button>Complete Purchase</Button>
      </Link>

      <Suspense fallback={null}>
        <PageView title="payment" />
      </Suspense>
    </div>
  );
}
