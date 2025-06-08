import happyImage from "../../assets/happy.jpg";
import BlurText from "../../components/common/BlurText";

function AboutUs() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8 text-orange-600">
        About Us
      </h1>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <img
          src={happyImage}
          alt="Our Restaurant"
          className="rounded-2xl shadow-lg w-full object-cover"
        />

        <div>
          <BlurText
            text="Welcome to Tomato Restaurant"
            delay={0}
            animateBy="words"
            direction="top"
            className="text-2xl font-semibold mb-4 text-gray-800"
          />
          <p className="text-gray-600 leading-relaxed mb-4">
            At Tomato, we’re passionate about food. Since our founding in 2023,
            we've committed to d elivering fresh, delicious meals crafted with
            the finest ingredients.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Our chefs bring years of culinary expertise to your table, offering
            a wide variety of dishes that combine tradition and creativity.
            Whether you're dining in, ordering for delivery, or hosting a
            gathering — Tomato is here to serve you the best flavors in town.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Thank you for making us a part of your journey. We look forward to
            sharing many more meals with you!
          </p>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-6 text-gray-800">
          Our Values
        </h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-orange-50 p-4 rounded-lg shadow text-center">
            <h4 className="font-bold text-lg text-orange-600 mb-2">Quality</h4>
            <p className="text-gray-600">
              We use only the freshest and highest-quality ingredients.
            </p>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg shadow text-center">
            <h4 className="font-bold text-lg text-orange-600 mb-2">Service</h4>
            <p className="text-gray-600">
              Exceptional service is our commitment to every guest.
            </p>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg shadow text-center">
            <h4 className="font-bold text-lg text-orange-600 mb-2">
              Innovation
            </h4>
            <p className="text-gray-600">
              We blend tradition with creativity in every dish.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
