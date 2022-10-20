const FilterReducer = (state, action) => {
  switch (action.type) {
    case "LOCATION":
      return { ...state, location: action.payload };
    case "PRICE":
      return { ...state, price: action.payload };
    case "TYPE":
      return { ...state, type: action.payload };
    case "DATE":
      return { ...state, date: action.payload };
    default:
      return state;
  }
};
export { FilterReducer };
