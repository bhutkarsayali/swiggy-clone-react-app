import { useDispatch } from "react-redux";
import { CDN_URL } from "./../utils/constants/constants";
import { addItem } from "../utils/redux-utils/CartSlice";
import { useState } from "react";
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";

const ItemList = ({ items, propDrilling, hideAddBtn }) => {
  const [itemCount, setItemCount] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [myOrderList, setMyOrderList] = useState([]);

  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    const totalCount = itemCount + 1;
    const addedItem = addItem(item);
    dispatch(addItem(item));
    setItemCount(totalCount);
    setSelectedItem(addedItem.payload.card.info.name);
    // setMyOrderList([...myOrderList , addedItem.payload.card.info.name]);
    setMyOrderList([
      ...myOrderList,
      `Entry ${(myOrderList.length, addedItem.payload.card.info.name)}`,
    ]);

    console.log(addedItem.payload.card.info.name);
    console.log("mylist - > ", myOrderList);
  };

  return (
    <div className="">
      {!hideAddBtn && (
        <div className="fixed left-0 w-[200px] top-52 text-white">
          {itemCount > 0 && (
            <>
              <p className="text-md font-bold p-4 bg-blue-900 text-white opacity-90">
                My Order
              </p>
              {/* <ol className="p-5 list-disc">
            <li className="">
              {itemCount} - {selectedItem}
            </li>
          </ol> */}
              <ol className="p-5 list-none bg-blue-500 opacity-90">
                {myOrderList.map((entry, index) => (
                  <li key={index}>
                    {index + 1} - {entry}
                  </li>
                ))}
              </ol>
            </>
          )}
        </div>
      )}
      {items.map((item) => (
        <div
          data-testid="foodItems"
          key={item.card?.info?.id}
          className="flex justify-between items-center mb-3 p-3 bg-lime-200"
        >
          <div className="mr-5 w-9/12">
            <p className="font-bold text-orange-800">{item.card?.info?.name}</p>
            <p className=" text-orange-800">
              ₹
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

            {!hideAddBtn && (
              <button
                className="p-1 absolute mx-auto border border-green-900 rounded-md w-[80px] right-0 left-0 top-0 bg-green-900 opacity-80 shadow-lg text-white"
                onClick={() => handleAddItem(item)}
              >
                ADD +
              </button>
            )}
            <div>
              <CiSquarePlus />
              {item.card?.info?.name == selectedItem ? (
                <p>
                  {itemCount} {selectedItem}
                </p>
              ) : (
                "incorrect"
              )}

              <CiSquareMinus />
            </div>
            {/* {propDrilling} */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
