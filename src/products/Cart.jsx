import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, increaseQuantity, decreaseQuantity } from "../redux/slices/cartSlice";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  if (cartItems.length === 0)
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-black">Your cart is empty</h2>
      </div>
    );

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 lg:py-12 space-y-6">
      <h2 className="text-3xl font-black">Your Cart</h2>

      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.product.id}
            className="flex items-center justify-between bg-white rounded-lg p-4"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.product.thumbnail || item.product.images?.[0]}
                alt={item.product.title}
                className="w-20 h-20 object-cover rounded"
              />
              <div>
                <h3 className="font-bold">{item.product.title}</h3>
                <p className="text-gray-600">${item.product.price}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => dispatch(decreaseQuantity(item.product.id))}
                className="px-3 py-1 border rounded"
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => dispatch(increaseQuantity(item.product.id))}
                className="px-3 py-1 border rounded"
              >
                +
              </button>
            </div>

            <button
              onClick={() => dispatch(removeFromCart(item.product.id))}
              className="text-red-500 font-bold"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="text-right mt-6">
        <h3 className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</h3>
        <button className="bg-black text-white px-6 py-3 rounded-full mt-4 hover:bg-gray-800 transition-colors">
          Checkout
        </button>
      </div>
    </div>
  );
}
