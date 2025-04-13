import Banner from "../component/ui/HomePage/Banner";
import FeaturedProducts from "../component/ui/HomePage/FeaturedProducts";
import Hero from "../component/ui/HomePage/Hero";
import Testimonials from "../component/ui/HomePage/Testimonials";

const HomePage = () => {
  return (
    <div className="space-y-12">

      {/* Hero Section */}
      <Hero></Hero>

      {/* Carousel Section */}
      <Banner></Banner>

      {/* Featured Books */}
      <FeaturedProducts></FeaturedProducts>

      {/* Testimonials */}
      <Testimonials></Testimonials>
    </div>
  );
};

export default HomePage;