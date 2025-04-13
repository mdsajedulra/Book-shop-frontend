import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content mt-10">
      <div className="max-w-6xl mx-auto p-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* About / Contact */}
        <div>
          <h2 className="text-lg font-bold mb-2">BookShop</h2>
          <p className="text-sm">
            Your go-to online bookstore for bestsellers, indie gems, and timeless classics.
          </p>
          <p className="mt-4 text-sm">📞 +123 456 7890</p>
          <p className="text-sm">📧 support@bookshop.com</p>
          <p className="text-sm">🏠 123 Library St, Booktown</p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="text-sm space-y-2">
            <li><a className="link link-hover">Home</a></li>
            <li><a className="link link-hover">About Us</a></li>
            <li><a className="link link-hover">Contact</a></li>
            <li><a className="link link-hover">All Products</a></li>
            <li><a className="link link-hover">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <a className="hover:text-primary"><FaFacebookF /></a>
            <a className="hover:text-primary"><FaTwitter /></a>
            <a className="hover:text-primary"><FaInstagram /></a>
            <a className="hover:text-primary"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      <div className="text-center py-4 border-t text-sm">
        &copy; {new Date().getFullYear()} BookShop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;