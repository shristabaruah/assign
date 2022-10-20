const filterLocation = (FilterState, data) => {
  switch (FilterState.location) {
    case "California":
      return [...data].filter((item) => item.location === "California");
    case "Austin":
      return [...data].filter((item) => item.location === "Austin");
    case "Michigan":
      return [...data].filter((item) => item.location === "Michigan");
    default:
      return data;
  }
};
const filterType = (FilterState, data) => {
  switch (FilterState.type) {
    case "Home":
      return [...data].filter((item) => item.type === "Home");
    case "Villa":
      return [...data].filter((item) => item.type === "Villa");
    case "Apartment":
      return [...data].filter((item) => item.type === "Apartment");
    default:
      return data;
  }
};

const filterPrice = (FilterState, data) => {
  return [...data].filter((item) => item.price <= FilterState.price);
};

const Compose =
  (FilterState, ...func) =>
  (data) =>
    func.reduce((acc, curr) => curr(FilterState, acc), data);

export { filterLocation, filterPrice, filterType, Compose };
