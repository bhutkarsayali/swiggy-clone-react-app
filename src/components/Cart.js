import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { clearCart } from "../utils/redux-utils/CartSlice";
import ItemList from "./ItemList";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClickToClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="cart text-center m-30 p-5">
      <h1 className="font-bold text-xl">Cart Details</h1>
      <div className="w-9/12 m-auto">
        {cartItems.length === 0 ? (
          <p className="my-10">Your cart is empty. Add items to the cart</p>
        ) : (
          <button
            className="bg-black p-2 m-2 text-white font-bold shadow-xl"
            onClick={handleClickToClearCart}
          >
            Clear Cart
          </button>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
