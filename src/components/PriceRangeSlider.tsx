import { useState } from "react";
import { Range } from "react-range";
import { useAppDispatch } from "../redux/hook";
import { setMaxPrice, setMinPrice } from "../redux/features/api/filterSlice";

const PriceRangeSlider = () => {
  const [values, setValues] = useState([5, 80]);
  const min = 0;
  const max = 200;


  const dispatch = useAppDispatch();

  const handlePriceRangeFiltering = (val: number[]) => {
    setValues(val);
    dispatch(setMinPrice(values[0]));
    dispatch(setMaxPrice(values[1]));
  };
  return (
    <div className="px-6 py-4 w-full max-w-md mx-auto">
      <p className="text-sm mb-2">
        Price Range: ${values[0]} - ${values[1]}
      </p>

      <Range
        step={1}
        min={min}
        max={max}
        values={values}
        onChange={(val) => handlePriceRangeFiltering(val)}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "6px",
              width: "100%",
              backgroundColor: "#ccc",
              borderRadius: "4px",
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "20px",
              width: "20px",
              borderRadius: "50%",
              backgroundColor: "#4f46e5", // Indigo-600
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0 0 2px black",
            }}
          />
        )}
      />
    </div>
  );
};

export default PriceRangeSlider;
