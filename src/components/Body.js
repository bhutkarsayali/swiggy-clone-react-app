import Shimmer from "./Shimmer";

const Body = () => {
  return (
    <>
      <div className="mt-6 flex max-w-md gap-x-4">
        <label for="email-address" className="sr-only">
          Search
        </label>
        <input
          id="email-address"
          name="search"
          type="text"
          className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
          placeholder="Search Menu/Restaurent"
        />
        <button
          type="submit"
          className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          Search
        </button>
      </div>
      <Shimmer></Shimmer>
    </>
  );
};

export default Body;
