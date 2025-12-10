"use client";

import PageView from "@/components/analytics/page-view";
import { CartItem, useCart } from "@/components/cart/cart-context";
import { purchaseSuccess } from "@/lib/tracking";
import { Suspense, useEffect, useState } from "react";

export default function SuccessPage() {
  const { state, clearCart } = useCart();
  const [purchase, setPurchase] = useState<CartItem[]>(state.items);

  useEffect(() => {
    // Clear cart after successful purchase
    clearCart();
  }, [clearCart]);

  useEffect(() => {
    const id = Math.random().toString(36).slice(2, 16);
    const total = state.items.reduce((acc, item) => acc + item.price, 0);
    const value = Math.round(total * 100) / 100;
    purchaseSuccess(id, state.items, value, "EUR");
  }, [state.items]);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Thank You!</h1>
      <p>Your order is completed.</p>

      <pre>
        {JSON.stringify(
          {
            items: purchase.map(({ id, name, price, quantity }) => ({
              id,
              name,
              price,
              quantity,
            })),
          },
          null,
          2
        )}
      </pre>

      <Suspense fallback={null}>
        <PageView title="thank-you" />
      </Suspense>
    </div>
  );
}
