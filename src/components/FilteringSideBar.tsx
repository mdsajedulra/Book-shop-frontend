import {
  setAuthor,
  setCategory,
  setMaxPrice,
  setMinPrice,
  setSearchTerm,
  setTitle,
} from "../redux/features/api/filterSlice";
import { useAppDispatch } from "../redux/hook";
import FilteringComponent from "./FilteringComponent";

const FilteringSideBar = () => {
  const disPatch = useAppDispatch();
  const handleReset = () => {
    disPatch(setSearchTerm(""));
    disPatch(setTitle(""));
    disPatch(setAuthor(""));
    disPatch(setCategory(""));
    disPatch(setMinPrice(0));
    disPatch(setMaxPrice(200));
  };
  return (
    <div>
      <div className="flex justify-between items-center pb-4 border-b">
        <h3 className="text-lg md:text-xl font-medium">Filter</h3>
        <button onClick={handleReset} className="btn btn-primary">
          Reset Filter
        </button>
      </div>
      <div className="py-2 md:py-4 space-y-4">
        <FilteringComponent></FilteringComponent>
      </div>
    </div>
  );
};

export default FilteringSideBar;
