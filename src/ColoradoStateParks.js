import React from "react";
import howManyParks from "./parks/howManyParks";
import MesaVerde from "./parks/MesaVerde";
import * as RockyMountain from './parks/RockyMountain';


function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"
  console.log(RockyMountain.trees);

return (
  <MesaVerde />
  
)


}
export default ColoradoStateParks
