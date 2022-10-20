import { createContext, useContext, useReducer } from "react";
import { Data } from "../Data/data";
import { FilterReducer } from "../Reducer/FilterReducer";
import {
  Compose,
  filterLocation,
  filterPrice,
  filterType,
} from "../Utils/filter";

const FilterContext = createContext();
const FilterProvider = ({ children }) => {
  const [FilterState, FilterDispatch] = useReducer(FilterReducer, {
    location: "",
    price: "9999",
    type: "",
  });

  const filteredItems = Compose(
    FilterState,
    filterPrice,
    filterLocation,
    filterType
  )(Data);

  return (
    <>
      <FilterContext.Provider
        value={{ FilterState, FilterDispatch, filteredItems }}
      >
        {children}
      </FilterContext.Provider>
    </>
  );
};
const useFilter = () => useContext(FilterContext);

export { useFilter, FilterProvider };
