import "./App.css";
import Cards from "./components/Cards";
import Nav from "./components/Nav";
import About from "./components/About";
import Detail from "./components/Detail";
import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Form from "./components/Form";
import Favorites from "./components/Favorites";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [access, setAcces] = useState(false);

  const username = "Mattger10";
  const password = "Marcador10";

  const login = (userData) => {
    if (userData.username === username && userData.password === password) {
      setAcces(true);
      navigate("/home");
    }
  };

  useEffect(() => {
    !access && navigate('/');
  }, [access]);

  const onSearch = (character) => {
    fetch(`http://localhost:3001/rickandmorty/onsearch/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.id) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          alert("No hay personajes con ese ID");
        }
      })
      .catch(err => console.log(err))
  };

  const onClose = (id) => {
    setCharacters(characters.filter((character) => character.id !== id));
  };

  return (
    <div className="App" style={{ padding: "25px" }}>
      {location.pathname === "/" ? <Form login={login} /> : <Nav onSearch={onSearch} />}
      <Routes>
        <Route
          path="home"
          element={<Cards onClose={onClose} characters={characters} />}
        />
        <Route path="about" element={<About />} />
        <Route path="detail/:detailId" element={<Detail />} />
        <Route path='/favorites' element={<Favorites/>} />
      </Routes>
    </div>
  );
}

export default App;
