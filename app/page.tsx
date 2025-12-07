import Link from "next/link";
import { categories } from "@/lib/categories";

export default function HomePage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-semibold">Welcome to the Demo Store</h1>

      <section>
        <h2 className="text-xl font-medium mb-4">Categories</h2>
        <div className="grid grid-cols-2 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className="block rounded-lg border p-6 hover:bg-accent"
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
