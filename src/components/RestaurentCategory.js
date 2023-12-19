import ItemList from "./ItemList";

const RestaurentCategory = ({
  data,
  showItems,
  setShowIndex,
  propDrilling,
}) => {
  //below state handles accordion expand collapse click, and removing it for lifting its power up to its parent see notes
  //   const [showItems, setShowItems] = useState(false);
  const handleClick = () => {
    // setShowItems(!showItems);
    setShowIndex();
  };

  return (
    <div className="border border-orange-300 w-10/12 m-auto mb-5 shadow-lg">
      <div
        className="flex justify-between items-center p-5 bg-black text-white cursor-pointer"
        onClick={handleClick}
      >
        {/* Accordion- header*/}
        <span className="font-bold text-md">{data.title}</span>
        <span>
          <svg
            className="w-3 h-3 rotate-180 shrink-0"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </span>
      </div>
      {/* Accordion- body */}
      <div>
        {showItems && <ItemList items={data.itemCards} propDrilling={propDrilling} />}
      </div>
    </div>
  );
};
export default RestaurentCategory;
