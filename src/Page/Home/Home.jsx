import { useState } from "react";
import { useFilter } from "../../Context/Filter-context";
import { Filter, Card } from "../../Components";
import "./Home.css";

const Home = () => {
  const { filteredItems } = useFilter();
  const [searchInput, setSearchInput] = useState("");

  const searchHandler = (filteredItems, searchInput) => {
    if (searchInput) {
      const searchItems = filteredItems.filter((item) =>
        item.address.toLowerCase().includes(searchInput.toLowerCase().trim())
      );
      return searchItems;
    }
    return filteredItems;
  };

  const searchedItems = searchHandler(filteredItems, searchInput);

  return (
    <>
      <div className="container">
        <div className="heading">
          <h2>Search Properties to Rent</h2>
          <input
            type="search"
            placeholder="Search here"
            className="search-bar"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
        <Filter />
        <div className="layout">
          {searchedItems?.length > 0 ? (
            searchedItems.map((p) => {
              return <Card data={p} key={p.id} />;
            })
          ) : (
            <div>no data</div>
          )}
        </div>
      </div>
    </>
  );
};
export { Home };
