import Testimonial from "@/component/ui/HomePage/Testimonials";
import Banner from "../component/ui/HomePage/Banner";
import FeaturedProducts from "../component/ui/HomePage/FeaturedProducts";
import Hero from "../component/ui/HomePage/Hero";
import NewlyReleasedProduct from "@/component/ui/HomePage/NewlyReleasdProducts";


const HomePage = () => {
  return (
    <div className="space-y-12">

      {/* Hero Section */}
      <Hero></Hero>

      {/* Carousel Section */}
      <Banner></Banner>

      {/* Featured Books */}
      <FeaturedProducts></FeaturedProducts>
      <NewlyReleasedProduct/>

      {/* Testimonials */}
      {/* <Testimonials></Testimonials> */}
      <Testimonial/>
    </div>
  );
};

export default HomePage;