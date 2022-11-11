import { Location } from "./location.class";
import { Vacant } from "./vacant.class";

/* La dependencia define una relacion no directa entre dos clases */
function main() {
  const location: Location = new Location();
  const vacant: Vacant = new Vacant("Full Stack");
  vacant.updateCity(location);
  /* En este caso la clase vacante depende de la clase ubicacion, si ubicacion es eliminada, 
  la vacante se vera alterada  */
  console.log(vacant.getVacantDescrition());
}

main();
