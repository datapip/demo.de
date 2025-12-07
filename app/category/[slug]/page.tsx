import { getProductsByCategory } from "@/lib/products";
import ProductCard from "@/components/product-card";

export default async function CategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;

  const products = getProductsByCategory(slug);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold capitalize">{slug}</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
