import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import style from "./Nav.module.css";

const Nav = ({ onSearch }) => {
  return (
    <nav className={style.nav}>
      <div className={style.btns}>
        <Link to='/' className={style.about}>Cerrar sesión</Link>
        <Link to="/about" className={style.about}>
          Sobre mí
        </Link>
        <Link to="/home" className={style.home}>
          Inicio
        </Link>
        <Link to="/favorites" className={style.home}>
          Favoritos
        </Link>
      </div>
      <SearchBar onSearch={onSearch} />
    </nav>
  );
};

export default Nav;
