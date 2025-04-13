import ProductListCard, {
  TListProduct,
} from "../component/ui/AdminDashboard/ProductListCard";
import { useGetAllProductsQuery } from "../redux/features/api/endpoints/productApi";
import { Link } from "react-router-dom";

const ProductsPage = () => {
  const {
    data: products,
    isLoading,
    isError,
  } = useGetAllProductsQuery(
    {},
    {
      pollingInterval: 30000,
      refetchOnFocus: true,
      refetchOnMountOrArgChange: true,
      refetchOnReconnect: true,
    }
  );


  // handle add book

  return (
    <div className="pt-4 md:pt-6 lg:pt-10">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center py-4">
        📦 Manage Products
      </h1>
      <div className="flex justify-end px-4 mb-6">
        <div className="flex justify-end px-4 mb-6">
          <Link to="/admin/add-book" className="btn btn-primary">
            Add Book
          </Link>
        </div>
      </div>
      <div>
        {isLoading && (
          <div className="h-96 flex justify-center items-center">
            <span className="loading loading-spinner loading-xl"></span>
          </div>
        )}
        {isError && (
          <div className="py-4 md:py-6">
            <p className="text-red-500">
              Something Went Wrong, Try again later.
            </p>
          </div>
        )}

        {!isLoading && products.data.length < 0 && (
          <div className="py-4 md:py-6">
            <p>No Orders Placed at this moment!</p>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 px-4">
          {!isLoading &&
            products.data.map((product: TListProduct) => (
              <ProductListCard
                key={product._id}
                product={product}
              ></ProductListCard>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
