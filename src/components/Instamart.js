const Instamart = () => {
  return (
    <div className="bg-[#881952] flex flex-wrap relative">
      <div className="w-8/12 m-auto p-5 min-h-screen">
        <img
          className="w-56 my-20"
          src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_150/InstamartMicrosite/InstamartlogoWhite.png"
        />
        <p className="w-5/12 font-bold text-3xl text-white mb-3">
          Snacks & indulgences delivered in minutes, from the house of Swiggy.
        </p>
        <p className="w-4/12 text-lg text-white mb-3">
          Open 6 AM to late night everyday
        </p>
      </div>
      <div className="w-4/12 relative">
        <div className="absolute z-[2] top-[90px] right-[500px] w-[200px] -rotate-12">
          <img
            src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_300/InstamartMicrosite/Items/1.png"
            alt="bread"
          />
        </div>
        <div className="absolute z-[2] top-[60px] right-[356px] w-[200px] rotate-6">
          <img
            src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_300/InstamartMicrosite/Items/2.png"
            alt="cadbury"
          />
        </div>
        <div className="absolute z-[2] top-[60px] right-[296px] w-[150px] rotate-3">
          <img
            src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_300/InstamartMicrosite/Items/3.png"
            alt="banana"
          />
        </div>
        <div className="absolute bottom-[420px] right-[320px] w-[150px] rotate-6">
          <img
            src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_300/InstamartMicrosite/Items/4.png"
            alt="pampers"
          />
        </div>
        <div className="absolute z-[2] bottom-[450px] right-[480px] w-[120px] -rotate-45">
          <img
            src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_300/InstamartMicrosite/Items/5.png"
            alt="spinach"
          />
        </div>
        <div className="absolute z-[2] top-[110px] right-[160px] w-[140px] rotate-6">
          <img
            src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_300/InstamartMicrosite/Items/6.png"
            alt="whisper"
          />
        </div>
        <div className="absolute z-[2] bottom-[450px] right-[180px] w-[180px] rotate-6">
          <img
            src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_300/InstamartMicrosite/Items/7.png"
            alt="amul"
          />
        </div>
        <div className="absolute z-[2] bottom-[260px] right-[280px] w-[130px] -rotate-6">
          <img
            src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_300/InstamartMicrosite/Items/8.png"
            alt="coke"
          />
        </div>
        <div className="absolute z-[1] bottom-[400] right-52 w-[350px]">
          <img
            src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_660/InstamartMicrosite/Items/DotsAndLines.png"
            alt="bg-design"
          />
        </div>
        <div className="absolute z-[1] bottom-0 right-52 w-[350px]">
          <div className="relative">
            <img
              src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_760/InstamartMicrosite/MobileFrame.png"
              alt="resto-bg"
            />
            <div className="absolute z-[2] top-[90px] right-[35px] w-[138px]">
              <img
                src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300/InstamartMicrosite/InstamartEntrypoint.png"
                alt="instamart-img"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 z-0">
        <img src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_400/InstamartMicrosite/BGBottom.png" />
      </div>
    </div>
  );
};

export default Instamart;
