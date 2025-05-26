import { useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";

function Header() {
  const navigate = useNavigate();

  return (
    <div
      className=" h-[90vh] w-full bg-cover bg-center rounded-2xl shadow-lg"
      style={{ backgroundImage: `url(${assets.header_img})` }}
    >
      <div className=" z-10 max-w-xl p-6 md:p-12 h-full flex flex-col justify-center text-white">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
          Order Your Favorite Food Here
        </h2>
        <p className="mb-6 text-base md:text-lg leading-relaxed text-gray-100">
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise. Our
          mission is to satisfy your craving and elevate your dining experience
          — one delicious meal at a time.
        </p>
        <button
          onClick={() => {
            navigate("/menu");
          }}
          className="bg-white text-gray-800 rounded-4xl cursor-pointer hover:bg-orange-100 transition px-6 py-3 font-semibold shadow-md w-max"
        >
          View Menu
        </button>
      </div>
    </div>
  );
}

export default Header;
