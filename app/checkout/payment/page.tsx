"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useCart } from "@/components/cart/cart-context";
import PageView from "@/components/analytics/page-view";
import { Suspense, useEffect } from "react";
import { addPayment } from "@/lib/tracking";

export default function PaymentPage() {
  const { state } = useCart();

  const total = state.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  useEffect(() => addPayment("credit card", state.items), [state.items]);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Payment</h1>

      <pre>
        {JSON.stringify(
          {
            items: state.items.map(({ id, name, price, quantity }) => ({
              id,
              name,
              price,
              quantity,
            })),
            total,
          },
          null,
          2
        )}
      </pre>

      <Link href="/checkout/success">
        <Button>Complete Purchase</Button>
      </Link>

      <Suspense fallback={null}>
        <PageView title="payment" />
      </Suspense>
    </div>
  );
}
