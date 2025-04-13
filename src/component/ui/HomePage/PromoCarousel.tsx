const PromoCarousel = () => {
  return (
    <div className="carousel w-full max-w-6xl mx-auto rounded-lg shadow-lg">
      {/* Slide 1 */}
      <div id="slide1" className="carousel-item w-full">
        <div className="flex flex-col md:flex-row w-full h-64 md:h-80 bg-base-200">
          <div className="md:w-3/5 w-full h-full">
            <img
              src="imagelink"
              alt="New Arrivals"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-2/5 w-full p-6 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-2">Discover New Arrivals</h2>
            <p className="mb-4">Explore the latest trending books handpicked for you.</p>
            <button className="btn btn-primary w-fit">Browse Now</button>
          </div>
        </div>
        <div className="absolute left-4 top-1/2 -translate-y-1/2">
          <a href="#slide3" className="btn btn-circle">❮</a>
        </div>
        <div className="absolute right-4 top-1/2 -translate-y-1/2">
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>

      {/* Slide 2 */}
      <div id="slide2" className="carousel-item w-full">
        <div className="flex flex-col md:flex-row w-full h-64 md:h-80 bg-base-200">
          <div className="md:w-3/5 w-full h-full">
            <img
              src="IMAGE_LINK_2"
              alt="Special Discounts"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-2/5 w-full p-6 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-2">Up to 40% Off</h2>
            <p className="mb-4">Grab your favorite books now with huge discounts!</p>
            <button className="btn btn-secondary w-fit">Shop Deals</button>
          </div>
        </div>
        <div className="absolute left-4 top-1/2 -translate-y-1/2">
          <a href="#slide1" className="btn btn-circle">❮</a>
        </div>
        <div className="absolute right-4 top-1/2 -translate-y-1/2">
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>

      {/* Slide 3 */}
      <div id="slide3" className="carousel-item w-full">
        <div className="flex flex-col md:flex-row w-full h-64 md:h-80 bg-base-200">
          <div className="md:w-3/5 w-full h-full">
            <img
              src="IMAGE_LINK_3"
              alt="Join Community"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-2/5 w-full p-6 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-2">Join Our Book Community</h2>
            <p className="mb-4">Be a part of thousands of book lovers around the world.</p>
            <button className="btn btn-accent w-fit">Sign Up Free</button>
          </div>
        </div>
        <div className="absolute left-4 top-1/2 -translate-y-1/2">
          <a href="#slide2" className="btn btn-circle">❮</a>
        </div>
        <div className="absolute right-4 top-1/2 -translate-y-1/2">
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
  );
};

export default PromoCarousel;