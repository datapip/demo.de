import { getProductById } from "@/lib/products";
import ProductPageClient from "./product-client";

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const product = await getProductById(id);

  if (!product) {
    return <p>Product not found.</p>;
  }

  return <ProductPageClient product={product} />;
}
