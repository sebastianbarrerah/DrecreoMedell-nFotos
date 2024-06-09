import "./plantilla.css";
import boceto from "../../assets/plantilla.png";
import {  useEffect, useRef, useState } from "react";
import html2canvas from "html2canvas";

const Plantilla = () => {
  const [foto, setfoto] = useState(null);
  const [activar, setactivar] = useState(false);
  const [active, setactive] = useState(true);
  const bloque = useRef(null)

  const capture = async (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    if (!file) return

    try {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newImage = reader.result;
        setfoto(newImage);
        setactive(!active)

      };
      reader.readAsDataURL(file);
    } catch (error) {
      console.log(error);
    }
  };

  const descargar = async() => {
    try {
      if(bloque.current){
        const captura = await html2canvas(bloque.current);
        const imagen = captura.toDataURL("imagen/png")
        const elemento = document.createElement("a")
        elemento.href = imagen;
        elemento.download = "Drecreo.png"
        elemento.click()
        setfoto(null)
        setactive(!active)
      }
    } catch (error) {
      console.log("Error");
    }
  }

  useEffect(() => {
    if (foto != null ) {
      setactivar(true);
    }
  }, [foto]);

  return (
    <main>
      <div className="base" ref={bloque}  >
        <img src={foto? foto: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} alt="" className="imagen1" />
        <img src={boceto} alt="" className="plantilla" />
      </div>

      <form onSubmit={capture}>
        <input type="file" className="inputFoto" />
        <button type="submit" style={ active?{"display": "block"}:{"display": "none"}} >Completar</button>
      </form>
      <button style={ activar?{"display": "block"}:{"display": "none"}} onClick={descargar} className="down" >Descargar</button> 
    </main>
  );
};

export default Plantilla;
