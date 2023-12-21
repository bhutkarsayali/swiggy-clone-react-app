import React, { useState } from "react";

const CravingsList = () => {
  const [cravedItemsList, setCravedItemList] = useState([]);
  const [input, setInput] = useState("");
  const AddCravedItemToList = (e) => {
    if (input.length) {
      const item = {
        id: Math.random(),
        itemName: input,
      };
      setCravedItemList([...cravedItemsList, item]);
      setInput("");
      console.log(cravedItemsList.length);
    }
  };
  return (
    <div>
      <h6 className="text-xl mb-4">What do you crave for ??</h6>
      <div className="flex">
        <input
          value={input}
          type="text"
          name="item"
          onChange={(e) => setInput(e.target.value)}
          className="max-w-xs h-8"
        />
        <button
          onClick={AddCravedItemToList}
          type="button"
          className="h-8 ml-3 -mt-1 px-3 border-none text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm text-center"
        >
          Add Me
        </button>
      </div>
      <ul className="my-4">
        {cravedItemsList.map((item, index) => (
          <li key={index} className="list-decimal text-left">
            {item.itemName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CravingsList;
