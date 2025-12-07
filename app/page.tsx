import Link from "next/link";
import { categories } from "@/lib/categories";
import PageView from "@/components/analytics/page-view";
import { Suspense } from "react";

export default function HomePage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-semibold">Welcome to the Demo Store</h1>

      <section>
        <h2 className="text-xl font-medium mb-4">Categories</h2>
        <div className="grid grid-cols-2 gap-4">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/category/${category.slug}`}
              className="block rounded-lg border p-6 hover:bg-accent"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </section>

      <Suspense fallback={null}>
        <PageView title="home" />
      </Suspense>
    </div>
  );
}
