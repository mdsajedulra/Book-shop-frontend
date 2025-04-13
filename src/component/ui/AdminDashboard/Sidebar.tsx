import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <aside className="bg-base-200 p-6 w-1/4 md:w-1/4 flex">
        <div className="md:hidden px-4 pt-4">
          <details className="dropdown w-full" id="mobileMenu">
            <summary className="btn w-full">☰ Menu</summary>
            <ul className="p-2 mt-2 shadow menu dropdown-content bg-base-300 bg-opacity-90 rounded-box w-full">
              <li>
                <Link
                  to=""
                  onClick={() =>
                    document
                      .getElementById("mobileMenu")
                      ?.removeAttribute("open")
                  }
                >
                  👤 Profile
                </Link>
              </li>
              <li>
                <Link
                  to="orders"
                  onClick={() =>
                    document
                      .getElementById("mobileMenu")
                      ?.removeAttribute("open")
                  }
                >
                  📦 Orders
                </Link>
              </li>
              <li>
                <Link
                  to="products"
                  onClick={() =>
                    document
                      .getElementById("mobileMenu")
                      ?.removeAttribute("open")
                  }
                >
                  📚 Products
                </Link>
              </li>
              <li>
                <Link
                  to="users"
                  onClick={() =>
                    document
                      .getElementById("mobileMenu")
                      ?.removeAttribute("open")
                  }
                >
                  👥 Users
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  onClick={() =>
                    document
                      .getElementById("mobileMenu")
                      ?.removeAttribute("open")
                  }
                >
                  Home Page
                </Link>
              </li>
            </ul>
          </details>
        </div>

        <div className="hidden md:flex flex-col space-y-4">
          <h2 className="text-2xl font-bold mb-10">Admin Panel</h2>
          <Link className="btn btn-ghost w-full text-left justify-start" to="">
            👤 Profile
          </Link>
          <Link
            className="btn btn-ghost w-full text-left justify-start"
            to="orders"
          >
            📦 Orders
          </Link>
          <Link
            className="btn btn-ghost w-full text-left justify-start"
            to="products"
          >
            📚 Products
          </Link>
          <Link
            className="btn btn-ghost w-full text-left justify-start"
            to="users"
          >
            👥 Users
          </Link>
          <Link
            className="btn btn-ghost w-full text-left justify-start"
            to="/"
          >
            Home Page
          </Link>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
