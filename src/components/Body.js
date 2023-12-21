import { Button } from "flowbite-react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import {
  RESTAURANT_API,
  RESTAURANT_API_LATTITUDE,
  RESTAURANT_API_LONGITUDE,
} from "../utils/constants/constants";
import useOnlineStatus from "../utils/custom-hooks/useOnlineStatus";
import { Link } from "react-router-dom";

const Body = () => {
  //get and update list of restaurents
  const [listOfRestaurents, setListOfRestaurents] = useState([]);
  //search functionality
  const [searchText, setSearchText] = useState("");
  //filter by search and top ratings
  const [filteredListOfRestaurents, setFilteredListOfRestaurents] = useState(
    []
  );
  // get current location using geolocation API
  const [position, setPosition] = useState({
    lattitude: null,
    longitude: null,
  });

  const [hideAddBtn, setHideAddBtn] = useState(false);
  //get list of restaurents
  useEffect(() => {
    fetchData();
    getGeolocation();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_API);
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
    console.log(filteredListOfRestaurents);
  };

  const getGeolocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setPosition({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    } else {
      console.log("Geolocation is not available in your browser.");
    }
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

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

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
          data-testid="searchInput"
        />
        <button
          type="submit"
          className="flex-none rounded-md bg-blue-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-lg hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          onClick={() => {
            let filterdRestaurents = listOfRestaurents.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            console.log(filterdRestaurents);
            setFilteredListOfRestaurents(filterdRestaurents);
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

      {position.latitude && position.longitude ? (
        <p className="float-right">
          Latitude: {position.latitude}, Longitude: {position.longitude}
        </p>
      ) : (
        <p>Loading...</p>
      )}

      <div className="flex flex-wrap justify-center mt-14">
        {filteredListOfRestaurents.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            {restaurant.info.veg ? (
              <RestaurantCardPromoted
                resData={restaurant}
              ></RestaurantCardPromoted>
            ) : (
              <RestaurantCard resData={restaurant}></RestaurantCard>
            )}
          </Link>
        ))}
        {/* {listOfRestaurents.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))} */}
      </div>
    </div>
  );
};

export default Body;
