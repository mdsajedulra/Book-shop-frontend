import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="mt-20 flex items-center justify-center px-4">
      <div className="flex flex-col-reverse md:flex-row items-center bg-base-200 rounded-lg overflow-hidden shadow-md max-w-6xl w-full">
        {/* Text Content */}
        <div className="md:w-3/5 w-full p-6 flex flex-col justify-center text-center md:text-left">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Explore New Reads</h2>
          <p className="mb-6 text-sm md:text-base">
            Discover trending books, bestsellers, and exclusive collections all in one place.
          </p>
          <div className="flex justify-center md:justify-start">
            <Link to="/all-products">
              <button className="btn border-t-cyan-900">Browse Collection</button>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-2/5 w-full h-64 md:h-80">
          <img
            src="https://i.ibb.co.com/nNZTbrXp/promotional-banner.png"
            alt="Promotional Banner"
            className="w-11/12  object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;