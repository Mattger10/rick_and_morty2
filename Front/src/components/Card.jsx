import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { addFavorite, deleteFavorite } from "../redux/actions";

function Card({ name, gender, onClose, species, image, id }) {
  const dispatch = useDispatch();
  const myFavorites = useSelector(state => state.myFavorites);
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(deleteFavorite(id));
    } else {
      setIsFav(true);
      dispatch(addFavorite({ name, gender, onClose, species, image, id }));
    }
  }

  useEffect(() => {
   myFavorites.forEach((fav) => {
      if (fav.id === id) {
         setIsFav(true);
      }
   });
}, [myFavorites, id]);

  return (
    <div className={style.card}>
      {isFav ? (
        <button onClick={handleFavorite}>⭐</button>
      ) : (
        <button onClick={handleFavorite}>✰</button>
      )}
      <div className={style.front}>
        <img src={image} alt={name} />
      </div>

      <div className={style.back}>
        <div>
          <Link to={`/detail/${id}`} className={style.link}>
            <h2 className={style.name}>{name}</h2>
          </Link>
        </div>

        <div className={style.species}>
          <h2>Specie: {species}</h2>
          <h2>Gender: {gender}</h2>
          <div />

          <div className={style.btn}></div>
          <button onClick={onClose}>X</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
