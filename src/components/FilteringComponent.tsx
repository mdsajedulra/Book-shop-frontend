/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetAllProductsQuery } from "../redux/features/api/endpoints/productApi";
import FilteringOptions from "./FilteringOptions";
import PriceRangeSlider from "./PriceRangeSlider";

const FilteringComponent = () => {
  const { data, isLoading } = useGetAllProductsQuery("", {
    pollingInterval: 30000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  });

  const getUniqueValuesFromFields = <T extends object>(
    data: T[],
    fields: (keyof T)[]
  ) => {
    const result: { [key: string]: any[] } = {};

    fields.forEach((field) => {
      result[field as string] = [...new Set(data.map((item) => item[field]))];
    });

    return result;
  };

  const filterObject = isLoading
  ? { title: [], author: [], category: [] }
  : getUniqueValuesFromFields(data.data, ["title", "author", "category"]);

  return (
    <div>
      <div>
        <h4 className="text-lg md:text-xl lg:text-2xl py-4">Name</h4>
        <div className="h-96 overflow-y-auto">
          {/* name filtering options  */}
          {!isLoading &&
            filterObject.title.map((filterValue: string, index: number) => (
              <FilteringOptions
                key={index}
                field="title"
                value={filterValue}
              ></FilteringOptions>
            ))}
        </div>
      </div>
      <div>
        <h4 className="text-lg md:text-xl lg:text-2xl py-4">Authors</h4>
        <div className="h-96 overflow-y-auto">
          {/* author filtering options  */}
          {!isLoading &&
            filterObject.author.map((filterValue: string, index: number) => (
              <FilteringOptions
                key={index}
                field="author"
                value={filterValue}
              ></FilteringOptions>
            ))}
        </div>
      </div>
      <div>
        <h4 className="text-lg md:text-xl lg:text-2xl py-4">Category</h4>
        {/* category filtering options  */}
        <div className="h-96 overflow-y-auto">
          {!isLoading &&
            filterObject.category.map((filterValue: string, index: number) => (
              <FilteringOptions
                key={index}
                field="category"
                value={filterValue}
              ></FilteringOptions>
            ))}
        </div>
      </div>
      <div>
        <h4 className="text-lg md:text-xl lg:text-2xl pt-6">Price</h4>
        <PriceRangeSlider></PriceRangeSlider>
      </div>
    </div>
  );
};

export default FilteringComponent;
