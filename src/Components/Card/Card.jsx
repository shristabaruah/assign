import "./Card.css";
import {
  MdOutlineBedroomChild,
  MdOutlineBathtub,
  MdOutlineHome,
} from "react-icons/md";
import { BsFillSuitHeartFill, BsSuitHeart } from "react-icons/bs";
import { useFavourite } from "../../Context/Favourite-context";

const Card = ({ data }) => {
  const { price, location, address, sqft, bathroom, bed, img, id } = data;

  const {
    FavouriteState: { favourite },
    addItemToFavourite,
    removeFromFavourite,
  } = useFavourite();

  const itemInFavourite = favourite.some((item) => item.id === id);

  const toggleFavourite = (product) => {
    const itemExists = favourite.some((item) => item.id === product.id);
    if (itemExists) {
      removeFromFavourite(product.id);
    } else {
      addItemToFavourite(product);
    }
  };

  return (
    <>
      <div className="card-container">
        <div className="image">
          <img src={img} alt="card-1" />

          <span className="badge">Popular</span>
        </div>
        <div className="card-details">
          <section className="price-details">
            <div className="price">
              <h3>${price} </h3>/month
            </div>
            <button className="fav" onClick={() => toggleFavourite(data)}>
              {itemInFavourite ? <BsFillSuitHeartFill /> : <BsSuitHeart />}
            </button>
          </section>
          <section className="adress">
            <h3>{location}</h3>
            <span>{address}</span>
          </section>
          <section className="facilities">
            <span>
              <MdOutlineBedroomChild /> {bed} bed
            </span>
            <span>
              <MdOutlineBathtub /> {bathroom} bathroom
            </span>
            <span>
              <MdOutlineHome />
              {sqft} m
            </span>
          </section>
        </div>
      </div>
    </>
  );
};
export { Card };
