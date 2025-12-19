import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../products/productsApi";
import { useDispatch } from "react-redux";
import { addToCart } from "../cart/cartSlice";

export default function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data: product, error, isLoading } = useGetProductByIdQuery(id);
  const [quantity, setQuantity] = useState(1);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading product.</div>;

  const handleAddToCart = () => {
    dispatch(addToCart({ product, quantity }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 lg:py-12 grid lg:grid-cols-2 gap-8">
      <div className="bg-gray-100 rounded-lg overflow-hidden">
        <img
          src={product.thumbnail || product.images?.[0]}
          alt={product.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="space-y-4">
        <h1 className="text-3xl font-black">{product.title}</h1>
        <p className="text-gray-600">{product.description}</p>
        <div className="flex items-center gap-4">
          <span className="font-bold text-2xl">${product.price}</span>
          {product.discountPercentage && (
            <span className="bg-red-100 text-red-600 text-xs px-2 py-0.5 rounded-full font-medium">
              -{Math.round(product.discountPercentage)}%
            </span>
          )}
        </div>

        <div className="flex items-center gap-4 mt-4">
          <button
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="px-3 py-1 border rounded"
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            onClick={() => setQuantity((q) => q + 1)}
            className="px-3 py-1 border rounded"
          >
            +
          </button>
        </div>

        <button
          onClick={handleAddToCart}
          className="bg-black text-white px-6 py-3 rounded-full mt-4 hover:bg-gray-800 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
