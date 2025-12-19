import { Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../cart/cartSlice'

export default function ProductCard({ product }) {
  const dispatch = useDispatch()

  const originalPrice = product.discountPercentage
    ? (product.price / (1 - product.discountPercentage / 100)).toFixed(2)
    : null

  return (
    <div className="bg-white rounded-xl p-3 hover:shadow-md transition">
      
      {/* Image + Link */}
      <Link to={`/product/${product.id}`}>
        <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
          <img
            src={product.thumbnail || product.images?.[0]}
            alt={product.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform"
          />
        </div>
      </Link>

      {/* Product Info */}
      <div className="mt-3 space-y-1">
        <h3 className="font-bold text-sm line-clamp-1">
          {product.title}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating)
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500">
            {product.rating}
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-bold text-lg">
            ${product.price}
          </span>

          {originalPrice && (
            <>
              <span className="text-gray-400 line-through text-sm">
                ${originalPrice}
              </span>
              <span className="bg-red-100 text-red-600 text-xs px-2 py-0.5 rounded-full">
                -{Math.round(product.discountPercentage)}%
              </span>
            </>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-2 pt-2">
          <Link
            to={`/product/${product.id}`}
            className="flex-1 text-center border border-gray-200 rounded-full py-2 text-xs hover:bg-gray-50 transition"
          >
            View
          </Link>

          <button
            onClick={() => dispatch(addToCart(product))}
            className="flex-1 bg-black text-white rounded-full py-2 text-xs hover:bg-gray-800 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
