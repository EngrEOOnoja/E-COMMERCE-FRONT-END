import { useSelector, useDispatch } from "react-redux";
import { removeItem, increaseQuantity, decreaseQuantity } from "./cartSlice";

export default function Cart() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  if (items.length === 0) return <p className="p-4">Cart is empty</p>;

  return (
    <div className="p-4 lg:p-12 space-y-4">
      {items.map(item => (
        <div key={item.id} className="flex justify-between items-center border-b py-2">
          <div className="flex items-center gap-4">
            <img src={item.thumbnail} alt={item.title} className="w-16 h-16 object-cover" />
            <div>
              <h2 className="font-bold">{item.title}</h2>
              <p>${item.price}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => dispatch(decreaseQuantity(item.id))} className="px-2 border">-</button>
            <span>{item.quantity}</span>
            <button onClick={() => dispatch(increaseQuantity(item.id))} className="px-2 border">+</button>
            <button onClick={() => dispatch(removeItem(item.id))} className="ml-4 text-red-500">Remove</button>
          </div>
        </div>
      ))}
    </div>
  );
}