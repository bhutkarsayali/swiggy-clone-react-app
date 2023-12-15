import { Button } from "flowbite-react";
import RestaurentCard from "./RestaurentCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { RESTAURENT_API } from "../utils/constants/constants";
import useOnlineStatus from "../utils/custom-hooks/useOnlineStatus";

const Body = () => {
  //get and update list of restaurents
  const [listOfRestaurents, setListOfRestaurents] = useState([]);
  //search functionality
  const [searchText, setSearchText] = useState("");
  //filter by search and top ratings
  const [filteredListOfRestaurents, setFilteredListOfRestaurents] = useState(
    []
  );

  //get list of restaurents
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(RESTAURENT_API);

    const jsonData = await data.json();
    console.log(jsonData);
    setListOfRestaurents(
      jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredListOfRestaurents(
      jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    console.log(listOfRestaurents);
  };

  // check online status of users internet
  const onlineStatusofUser = useOnlineStatus();
  if (onlineStatusofUser === false) {
    return (
      <h1 className="text-center p-5">
        User is offline Please check your internet connection
      </h1>
    );
  }

  return listOfRestaurents.length === 0 ? (
    <Shimmer></Shimmer>
  ) : (
    <div className="w-11/12 mx-auto my-5 relative">
      <div className="mt-6 flex max-w-md gap-x-4 justify-center mx-auto">
        <label htmlFor="email-address" className="sr-only">
          Search
        </label>
        <input
          id="email-address"
          name="search"
          type="text"
          className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-blue-800 shadow-lg ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
          placeholder="Search Menu/Restaurent"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          type="submit"
          className="flex-none rounded-md bg-blue-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-lg hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          onClick={() => {
            const text = searchText.toLowerCase();
            let filterdRestaurents = listOfRestaurents.filter((res) =>
            res.info.name.toLowerCase().includes(text)
            );
            console.log(filterdRestaurents);
            setListOfRestaurents(filterdRestaurents);
          }}
        >
          Search
        </button>
      </div>
      <Button
        color="warning"
        className="mb-2 absolute right-0 top-0"
        onClick={() => {
          const filterdList = listOfRestaurents.filter(
            (res) => res.info.avgRating > 4.2
          );
          setFilteredListOfRestaurents(filterdList);
        }}
      >
        Top Rated Restaurents
      </Button>
      <div className="flex flex-wrap justify-center mt-14">
        {filteredListOfRestaurents.map((restaurant) => (
          <RestaurentCard key={restaurant.info.id} resData={restaurant} />
        ))}
        {/* {listOfRestaurents.map((restaurant) => (
          <RestaurentCard key={restaurant.info.id} resData={restaurant} />
        ))} */}
      </div>
    </div>
  );
};

export default Body;
