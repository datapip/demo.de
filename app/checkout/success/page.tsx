"use client";

import PageView from "@/components/analytics/page-view";
import { useCart } from "@/components/cart/cart-context";
import { Suspense, useEffect } from "react";

export default function SuccessPage() {
  const { state, clearCart } = useCart();

  useEffect(() => {
    // Clear cart after successful purchase
    clearCart();
  }, [clearCart]);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Thank You!</h1>
      <p>Your order is completed.</p>

      <pre>{JSON.stringify(state.items, null, 2)}</pre>

      <Suspense fallback={null}>
        <PageView title="thank-you" />
      </Suspense>
    </div>
  );
}
