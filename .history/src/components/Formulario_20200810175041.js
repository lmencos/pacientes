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
        <label>Nombre del propietario</label>
        <input 
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre del propietario"
        />
        <label>Fecha</label>
        <input 
          type="date"
          name="fecha"
          className="u-full-width"
        />
        <label>Hora de la cita</label>
        <input 
          type="time"
          name="hora"
          className="u-full-width"
        />
        <label>Síntomas</label>
        <input 
          type="text"
          name="sintomas"
          className="u-full-width"
          placeholder="Describe brevemente los síntomas"
        />
      </form>
    </Fragment>
   );
}
 
export default Formulario;