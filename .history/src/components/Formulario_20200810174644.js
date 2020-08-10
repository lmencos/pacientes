import React, { Fragment } from 'react';

const Formulario = () => {
  return ( 
    <Fragment>
      <h4>Crear cita</h4>
      <form action="">
        <label>Nombre de la Mascota</label>
        <input 
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre Mascota"

        />
      </form>
    </Fragment>
   );
}
 
export default Formulario;