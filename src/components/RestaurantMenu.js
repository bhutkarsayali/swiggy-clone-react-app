import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useReastaurantMenu from "../utils/custom-hooks/useReastaurantMenu";
import { FaRegStar } from "react-icons/fa";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useReastaurantMenu(resId);

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
              <FaRegStar className="fill-green-500 stroke-green-500" />{" "}
              <span className="text-green-500 font-bold">{avgRating}</span>
            </span>
            <hr className="bg-yellow-800" />
            <span className="text-yellow-800 text-xs my-2">
              {totalRatingsString}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
