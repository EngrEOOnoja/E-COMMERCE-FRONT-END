import { useGetProductsQuery } from "./ProductsApi";
import ProductCard from "../products/ProductCard";

export default function ProductList() {
  const { data, isLoading, isError } = useGetProductsQuery();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading products</p>;

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {data.products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
