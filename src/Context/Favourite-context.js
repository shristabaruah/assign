import { createContext, useContext, useEffect, useReducer } from "react";
import { FavouriteReducer } from "../Reducer/FavouriteReducer";

const initialState = {
  favourite: localStorage.getItem("favourite")
    ? JSON.parse(localStorage.getItem("favourite"))
    : [],
};
const FavouriteContext = createContext();

const FavouriteProvider = ({ children }) => {
  const [FavouriteState, FavouriteDispatch] = useReducer(
    FavouriteReducer,
    initialState
  );

  useEffect(() => {
    localStorage.setItem("favourite", JSON.stringify(FavouriteState.favourite));
  }, [FavouriteState]);

  const addItemToFavourite = (item) => {
    FavouriteDispatch({ type: "ADD_TO_FAVOURITES", payload: item });
  };

  const removeFromFavourite = (id) => {
    FavouriteDispatch({ type: "REMOVE_FROM_FAVOURITES", payload: id });
  };
  return (
    <>
      <FavouriteContext.Provider
        value={{ FavouriteState, addItemToFavourite, removeFromFavourite }}
      >
        {children}
      </FavouriteContext.Provider>
    </>
  );
};
const useFavourite = () => useContext(FavouriteContext);

export { useFavourite, FavouriteProvider };
