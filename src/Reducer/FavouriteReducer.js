const FavouriteReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAVOURITES":
      return {
        ...state,
        favourite: [...state.favourite, action.payload],
      };
    case "REMOVE_FROM_FAVOURITES":
      return {
        ...state,
        favourite: state.favourite.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export { FavouriteReducer };
