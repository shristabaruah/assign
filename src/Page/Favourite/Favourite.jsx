import { Card } from "../../Components";
import { useFavourite } from "../../Context/Favourite-context";

const Favourite = () => {
  const {
    FavouriteState: { favourite },
  } = useFavourite();
  return (
    <>
      <h2>Favourites</h2>
      <div className="layout">
        {favourite.length > 0 ? (
          favourite.map((item) => {
            return <Card data={item} key={item.id} />;
          })
        ) : (
          <h2>No Favourite items</h2>
        )}
      </div>
    </>
  );
};
export { Favourite };
