import { assets } from "../../assets/assets";

function AppDownload() {
  return (
    <div className="bg-orange-50 py-10 px-6 md:px-20 rounded-2xl shadow-md text-center my-12" id="app-download">
      <p className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
        For a better experience, download <br className="hidden md:block" />
        <span className="text-orange-500 font-bold">Tomato App</span>
      </p>
      <div className="flex justify-center items-center gap-6 flex-wrap">
        <img
          src={assets.play_store}
          alt="Download on Play Store"
          className="h-12 md:h-14 cursor-pointer hover:scale-105 transition"
        />
        <img
          src={assets.app_store}
          alt="Download on App Store"
          className="h-12 md:h-14 cursor-pointer hover:scale-105 transition"
        />
      </div>
    </div>
  );
}

export default AppDownload;
