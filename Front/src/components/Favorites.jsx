import { useSelector, useDispatch } from "react-redux";
import style from "./Favorites.module.css";
import { Link } from "react-router-dom";
import { orderCards, filterCards } from "../redux/actions";

const Favorites = () => {
  const { allcharacters } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handlerOrder = (event) => {
    dispatch(orderCards(event.target.value))
  }

  const handlerFilter = (event) => {
    dispatch(filterCards(event.target.value))
  }

  
  return (
    <div >
      <div >
        <select onChange={handlerOrder}>
          <option value="Order" disabled='disabled'>Ordenar por</option>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select> 
        <select onChange={handlerFilter}>
          <option value="filter" disabled='disabled'>Filtrar por</option>
          <option value="Male">Masculino</option>
          <option value="Female">Femenino</option>
          <option value="Unknown">Desconocido</option>
          <option value="Genderless">Sin género</option>
          </select>
      </div>
      {allcharacters.map((character) => {
        return (
          <div  key={character.id} className={style.cardContainer}>
            <div className={style.front}>
              <img src={character.image} alt={character.name} />
            </div>

            <div className={style.back}>
              <div>
                <Link to={`/detail/${character.id}`} className={style.link}>
                  <h2 className={style.name}>{character.name}</h2>
                </Link>
              </div>

              <div className={style.species}>
                <h2>Especie: {character.species}</h2>
                <h2>Género: {character.gender}</h2>
                </div>
            </div>
          </div>
          )
      })
    }
    </div>
  );
}

export default Favorites;
