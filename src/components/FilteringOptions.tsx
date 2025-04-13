import {
  setAuthor,
  setCategory,
  setSearchTerm,
  setTitle,
} from "../redux/features/api/filterSlice";
import { useAppDispatch } from "../redux/hook";

type FilterOptionsProps = {
  field: string;
  value: string;
};

const FilteringOptions = ({ field, value }: FilterOptionsProps) => {
  const dispatch = useAppDispatch();

  const handleFilter = () => {
    if (field === "title") {
      dispatch(setTitle(value));
      dispatch(setCategory(""));
      dispatch(setAuthor(""));
      dispatch(setSearchTerm(""));
    }
    if (field === "category") {
      dispatch(setCategory(value));
      dispatch(setTitle(""));
      dispatch(setAuthor(""));
      dispatch(setSearchTerm(""));
    }
    if (field === "author") {
      dispatch(setAuthor(value));
      dispatch(setTitle(""));
      dispatch(setCategory(""));
      dispatch(setSearchTerm(""));
    }
  };

  return (
    <div className="flex gap-2 items-center p-2 border-b border-x rounded-sm btn">
      <button onClick={handleFilter}>{value}</button>
    </div>
  );
};

export default FilteringOptions;
