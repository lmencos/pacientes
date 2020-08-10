import React, { Fragment, useState } from 'react';

const Formulario = () => {

  //Crear el state para Formulario o cita
  const [ cita, actualizarCita ] = useState({
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: ''
  });

  const actualizarState = (e) => {
    actualizarCita({
      ...cita,
      [e.target.name]: e.target.value
    })
  }

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
          onChange={actualizarState}
        />
        <label>Nombre del propietario</label>
        <input 
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre del propietario"
          onChange={actualizarState}
        />
        <label>Fecha</label>
        <input 
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={actualizarState}
        />
        <label>Hora de la cita</label>
        <input 
          type="time"
          name="hora"
          className="u-full-width"
          onChange={actualizarState}
        />
        <label>Síntomas</label>
        <textarea
          name="sintomas"
          className="u-full-width"
          placeholder="Describe brevemente los síntomas"
          onChange={actualizarState}
        ></textarea>
        <button
          type="submit"
          className="u-full-width button-primary"
        >Agregar cita</button>
      </form>
    </Fragment>
   );
}
 
export default Formulario;