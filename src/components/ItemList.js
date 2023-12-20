import { useDispatch } from "react-redux";
import { CDN_URL } from "./../utils/constants/constants";
import { addItem } from "../utils/redux-utils/CartSlice";

const ItemList = ({ items, propDrilling }) => {

  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="">
      {items.map((item) => (
        <div
          data-testid="foodItems"
          key={item.card?.info?.id}
          className="flex justify-between items-center mb-3 p-3 bg-lime-200"
        >
          <div className="mr-5 w-9/12">
            <p className="font-bold text-orange-800">{item.card?.info?.name}</p>
            <p className=" text-orange-800">
              ₹{" "}
              {item.card?.info?.price
                ? item.card?.info?.price / 100
                : item.card?.info?.defaultPrice / 100}
            </p>
            <p className="text-sm mt-1 mb-4  text-orange-800">
              {item.card?.info?.description}
            </p>
          </div>
          <div className="w-3/12 h-auto relative">
            <img
              className="max-h-100"
              src={CDN_URL + item.card?.info?.imageId}
            />
            <button
              className="p-1 absolute mx-auto border border-green-900 rounded-md w-[80px] right-0 left-0 top-0 bg-green-900 opacity-80 shadow-lg text-white"
              onClick={() => handleAddItem(item)}
            >
              ADD +
            </button>
            {/* {propDrilling} */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
