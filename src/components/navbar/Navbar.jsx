import { useState } from "react";
import menu from "../../assets/menu.png";
import cerrar from "../../assets/cerrar.png";
import { useNavigate } from "react-router-dom";
import "./navbar.css";


const Navbar = () => {
  const [state, setState] = useState(false)

  const navigate = useNavigate()

  const mostrar = () => {
    setState(!state);
    console.log("funciona");
  };

  return (
    <>
      <nav className="navbar" >
        <img src={menu} alt="Menu" className="menu"  onClick={mostrar}/>
        <h1 className="title__logo" onClick={() => navigate("/")}>DRecreo</h1>
      </nav>

      <div className={state? 'container__menu1': 'container__menu'}>
        <img onClick={mostrar} src={cerrar} style={{"width": "40px", "padding": "10px", "position": "absolute", "right": "5px"}}/>
        <ul className="lista">
          <li onClick={() => navigate('/')}>Inicio</li>
          <li onClick={() => navigate('/plantillas')}>Plantilla 1</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
