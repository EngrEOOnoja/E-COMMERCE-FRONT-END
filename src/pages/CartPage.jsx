import Cart from '../features/cart/Cart'

export default function CartPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-black mb-6">Your Cart</h1>
      <Cart />
    </div>
  )
}
