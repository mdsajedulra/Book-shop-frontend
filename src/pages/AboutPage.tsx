import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6 text-center">About Us</h1>

      <p className="mb-4 text-lg text-black-300 text-justify">
        Welcome to <span className="font-semibold">BookShop</span> – your trusted online destination for discovering, buying, and sharing books. Whether you're into fiction, non-fiction, or niche genres, we have something for every book lover.
      </p>

      <p className="mb-4 text-lg text-black-300 text-justify">
        Our mission is to make books more accessible and bring people closer to stories that inspire, educate, and entertain. With a carefully curated catalog and a user-friendly platform, we aim to make your book-shopping experience as delightful as reading itself.
      </p>

      <p className="mb-4 text-lg text-black-300 text-justify">
        Thank you for being a part of our journey. Happy reading!
      </p>

      <div className="mt-10 text-center">
        <Link to="/all-products">
          <button className="btn btn-primary">Browse Collection</button>
        </Link>
      </div>
    </section>
  );
};

export default AboutPage;