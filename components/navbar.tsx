"use client";

import Link from "next/link";
import CartIcon from "./cart/cart-icon";

export default function Navbar() {
  return (
    <header className="border-b">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-xl font-semibold">
          Demo Store
        </Link>

        <div className="flex items-center gap-6">
          <Link href="/category/groceries">Groceries</Link>
          <Link href="/category/electronics">Electronics</Link>
          <CartIcon />
        </div>
      </nav>
    </header>
  );
}
