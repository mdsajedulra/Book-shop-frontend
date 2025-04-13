import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import BookDetailsPage from "../pages/BookDetailsPage";
import AdminLayout from "../component/layout/AdminLayout";
import CheckoutPage from "../pages/CheckoutPage";
import UserRoute from "./guards/UserRoute";
import UserLayout from "../component/layout/UserLayout";
import AllProducts from "../pages/AllProducts";
import ProductsPage from "../pages/ProductsPage";
import OrderManagePage from "../pages/OrderManagePage";
import AdminProfile from "../pages/AdminProfile";
import AdminRoute from "./guards/AdminRoute";
import UserProfile from "../component/ui/UserDashboard/UserProfile";
import UserOrders from "../component/ui/UserDashboard/UserOrders";
import ResetPassword from "../component/ui/UserDashboard/ResetPassword";
import NotFoundPage from "../pages/NotFoundpage";
import AddBookPage from "../pages/AddBookPage";
import UserManagement from "../pages/UserManagement";
import ThankYou from "../pages/ThankYou";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "all-products",
        element: <AllProducts />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "profile",
        element: <ContactPage />,
      },
      {
        path: "book-details/:id",
        element: <BookDetailsPage />,
      },
      {
        path: "thankyou",
        element: <ThankYou/>
      }
    ],
  },
  {
    path: "/admin",
    element: (
      <AdminRoute>
        {" "}
        <AdminLayout />{" "}
      </AdminRoute>
    ),
    children: [
      {
        index: true,
        element: <AdminProfile />,
      },
      {
        path: "orders",
        element: <OrderManagePage />,
      },
      {
        path: "checkout/:id",
        element: (
          <AdminRoute>
            <CheckoutPage />
          </AdminRoute>
        ),
      },
      {
        path: "products",
        element: (
          <AdminRoute>
            {" "}
            <ProductsPage />{" "}
          </AdminRoute>
        ),
      },
      {
        path: "users",
        element: (
          <AdminRoute>
            {" "}
            <UserManagement />{" "}
          </AdminRoute>
        ),
      },
      {
        path: "add-book",
        element: <AdminRoute>
          {" "}
          <AddBookPage />{" "}
        </AdminRoute>
      },
    ],
  },
  {
    path: "/user",
    element: <UserLayout />,
    children: [
      {
        index: true,
        path: "orders",
        element: (
          <UserRoute>
            <UserOrders />
          </UserRoute>
        ),
      },
      {
        path: "edit-profile",
        element: (
          <UserRoute>
            <UserProfile />
          </UserRoute>
        ),
      },
      {
        path: "reset-password",
        element: (
          <UserRoute>
            <ResetPassword />
          </UserRoute>
        ),
      },
      {
        path: "checkout/:id",
        element: (
          <UserRoute>
            <CheckoutPage />
          </UserRoute>
        ),
      },
     
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
