const Shimmer = () => {
  const shimmerCards = 5;
  return (
    <div className="flex flex-wrap w-full justify-around">
      {[...Array(shimmerCards)].map((e, index) => (
        <div
          key={index}
          className="border border-gray-200 shadow rounded-md p-4 max-w-xs w-full m-5"
        >
          <div className="animate-pulse flex space-x-2">
            <div className="rounded-full bg-slate-200 h-10 w-10"></div>
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 bg-slate-200 rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                  <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                </div>
                <div className="h-14 bg-slate-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
