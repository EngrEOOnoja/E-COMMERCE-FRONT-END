import { Link } from 'react-router-dom'
import { ShoppingCart } from 'lucide-react'
import { useSelector } from 'react-redux'

export default function Header() {
  const count = useSelector(
    state => state.cart.items.reduce((a, b) => a + b.quantity, 0)
  )

  return (
    <header className="border-b bg-white px-4 py-4 flex justify-between">
      <Link to="/" className="font-black text-xl">SHOP.CO</Link>

      <Link to="/cart" className="relative">
        <ShoppingCart />
        {count > 0 && (
          <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full px-1">
            {count}
          </span>
        )}
      </Link>
    </header>
  )
}
