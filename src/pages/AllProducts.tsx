import { useState } from "react";
import ProductCard, { TProduct } from "../components/ProductCard";
import FilteringSideBar from "../components/FilteringSideBar";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import {
  setAuthor,
  setCategory,
  setSearchTerm,
  setTitle,
} from "../redux/features/api/filterSlice";
import { useGetAllProductsQuery } from "../redux/features/api/endpoints/productApi";

const AllProducts = () => {
  const [searchValue, setSearchValue] = useState("");

  const filter = useAppSelector((store) => store.filter);

  const { data, isError, isLoading } = useGetAllProductsQuery(filter, {
    pollingInterval: 30000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  });

  const dispatch = useAppDispatch();

  const handleSearch = () => {
    dispatch(setSearchTerm(searchValue));
    dispatch(setTitle(""));
    dispatch(setAuthor(""));
    dispatch(setCategory(""));
  };

  return (
    <div className=" container mx-auto px-4 py-12">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center">
        All Books – Explore Our Collection
      </h1>
     
      <div className="flex justify-end items-center mt-4 md:mt-6 lg:mt-8">
        <div className="join">
          <div>
            <div>
              <input
                className="input join-item w-52"
                placeholder="Search here"
                name="search"
                id="search"
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </div>
          </div>
          <div className="indicator">
            <button onClick={handleSearch} className="btn join-item">
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-4 py-6">
        <div className="hidden md:block w-full md:col-span-1">
          <FilteringSideBar></FilteringSideBar>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-3">
          {/* is lading state */}
          {isLoading && (
            <div className="min-h-96 flex justify-center items-center">
              <span className="loading loading-spinner loading-xl"></span>
            </div>
          )}

          {/* if data available */}
          {!isLoading && data.data?.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {data.data.map((product: TProduct) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          )}

          <div className="min-h-96 flex justify-center items-center">
            {/* is no data found */}
            {!isLoading && data.data?.length === 0 && (
              <p className="text-center text-gray-500 mt-8">No books found.</p>
            )}
          </div>
          <div className="min-h-96 flex justify-center items-center">
            {/* isError state */}
            {isError && data.data?.length === 0 && (
              <p className="text-center text-gray-500 mt-8">
                Something Went Wrong.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
