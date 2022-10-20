import { useFilter } from "../../Context/Filter-context";
import "./Filter.css";
const Filter = () => {
  const { FilterState, FilterDispatch } = useFilter();
  return (
    <>
      <div className="filter-container">
        <div className="filter">
          <label className="label">Location</label>
          <select
            className="select-option"
            onChange={(e) => {
              FilterDispatch({
                type: "LOCATION",
                payload: e.target.value,
              });
            }}
            value={FilterState.location}
          >
            <option value="">Any Location</option>
            <option value="Michigan">Michigan</option>
            <option value="California">California</option>
            <option value="Austin">Austin</option>
          </select>
        </div>
        <div className="filter">
          <label className="label">Price</label>
          <select
            className="select-option"
            onChange={(e) => {
              FilterDispatch({
                type: "PRICE",
                payload: e.target.value,
              });
            }}
            value={FilterState.price}
          >
            <option value="9999">Any Price</option>
            <option value="1000">1000</option>
            <option value="2000">2000</option>
            <option value="3000">3000</option>
            <option value="4000">4000</option>
            <option value="5000">5000</option>
            <option value="6000">6000</option>
          </select>
        </div>
        <div className="filter">
          <label className="label">When to move</label>
          <input className="select-option" type="date" />
        </div>
        <div className="filter">
          <label className="label">Property Type</label>
          <select
            className="select-option"
            onChange={(e) => {
              FilterDispatch({
                type: "TYPE",
                payload: e.target.value,
              });
            }}
            value={FilterState.type}
          >
            <option value="">Choose type</option>
            <option value="Apartment"> Apartment</option>
            <option value="Villa"> Villa</option>
            <option value="House"> House</option>
          </select>
        </div>
      </div>
    </>
  );
};
export { Filter };
