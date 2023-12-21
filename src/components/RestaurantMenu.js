import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useReastaurantMenu from "../utils/custom-hooks/useReastaurantMenu";
import { FaRegStar } from "react-icons/fa";
import { RxLapTimer } from "react-icons/rx";
import { HiMiniCurrencyRupee } from "react-icons/hi2";
import RestaurentCategory from "./RestaurentCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useReastaurantMenu(resId);
  //state variable to update accordion expand collapse
  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;

  const {
    costForTwoMessage,
    cuisines,
    name,
    areaName,
    avgRating,
    totalRatingsString,
  } = resInfo?.cards[0]?.card?.card?.info;

  const { lastMileTravelString, slaString } =
    resInfo?.cards[0]?.card?.card?.info?.sla;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  const propDrilling = "prop Drilling Example (Sending downwards/to children)";

  return (
    <div className="w-8/12 m-auto p-4">
      <div className="flex justify-between">
        <div>
          <h2 className="font-bold text-yellow-800">{name}</h2>
          <h6 className="text-yellow-800 text-sm">{cuisines.join(",")}</h6>
          <h6 className="text-yellow-800 text-sm">
            {areaName} ,{lastMileTravelString}
          </h6>
        </div>
        <div>
          <div className="shadow-lg p-2 shadow-black">
            <span className="flex flex-wrap items-center gap-2 justify-center my-2">
              <FaRegStar className="fill-green-500 stroke-green-500" />
              <span className="text-green-500 font-bold">{avgRating}</span>
            </span>
            <hr className="bg-yellow-800" />
            <span className="text-yellow-800 text-xs my-2">
              {totalRatingsString}
            </span>
          </div>
        </div>
      </div>
      <hr className="bg-slate-500 border-dashed my-5" />
      <div className="flex flex-wrap gap-8">
        <span className="flex gap-2 items-center text-sm lowercase">
          <RxLapTimer className="text-sm" /> <span>{slaString}</span>
        </span>
        <span className="flex gap-2 items-center text-sm lowercase">
          <HiMiniCurrencyRupee className="text-sm h-4 w-4" />
          <span>{costForTwoMessage}</span>
        </span>
      </div>
      <hr className="bg-slate-500 border-dashed my-5" />

      {categories.map((category, index) => (
        <RestaurentCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          setShowIndex={() => setShowIndex(index)}
          showItems={index === showIndex ? true : false}
          propDrilling={propDrilling}
        ></RestaurentCategory>
      ))}
    </div>
  );
};

export default RestaurantMenu;
