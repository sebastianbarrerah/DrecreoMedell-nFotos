import html2canvas from "html2canvas";

export const download = async(data) =>  {
    try {
        
          const captura = await html2canvas(data.current);
          const imagen = captura.toDataURL("imagen/png")
          const elemento = document.createElement("a")
          elemento.href = imagen;
          elemento.download = "Drecreo.png"
          elemento.click()
      } catch (error) {
        console.log("Error");
      }
}