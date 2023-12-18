import { useEffect, useState } from "react";
import { RESTAURANT_MENU_API } from "../constants/constants";

const useReastaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  //fetch data
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(RESTAURANT_MENU_API + resId);
    const json = await data.json();
    setResInfo(json.data);
  };
  return resInfo;
};

export default useReastaurantMenu;
