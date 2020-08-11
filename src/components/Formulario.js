import React, { Fragment, useState } from 'react';
import uuid from 'uuid/v4';

const Formulario = () => {

  //Crear el state para Formulario o cita
  const [ cita, actualizarCita ] = useState({
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: ''
  });

  const [ error, actualizarError ] = useState(false);

  //Leer lo que el usuario escribe en el form o cita
  const actualizarState = (e) => {
    actualizarCita({
      ...cita,
      [e.target.name]: e.target.value
    })
  }
  
  //Extraer los valores del objeto cita
  const { mascota, propietario, fecha, hora, sintomas } = cita;

  //Enviar formulario o cita
  const submitCita = (e) => {
    e.preventDefault();

    //Validar llenado del form o cita
    if(mascota.trim() === '' || propietario.trim() === '' || 
      fecha.trim() ==='' || hora.trim() === '' || sintomas.trim() === '') {
      actualizarError(true);
      return;
    }

    //resetear mensaje de error "favor de llenar todos los campos"
    actualizarError(false);

    //Asignar id
    cita.id = uuid();
    console.log(cita);

    //Crear cita

    //Reiniciar form de cita

  }


  return ( 
    <Fragment>
      <h4>Crear cita</h4>

        { error ? 
          <p className="alerta-error" >Favor de llenar todos los campos</p> 
          : null 
        }

      <form 
        onSubmit={submitCita}
        
        >
        <label>Nombre de la Mascota</label>
        <input 
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre Mascota"
          onChange={actualizarState}
          value={mascota}
        />
        <label>Nombre del propietario</label>
        <input 
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre del propietario"
          onChange={actualizarState}
          value={propietario}
        />
        <label>Fecha</label>
        <input 
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={actualizarState}
          value={fecha}
        />
        <label>Hora de la cita</label>
        <input 
          type="time"
          name="hora"
          className="u-full-width"
          onChange={actualizarState}
          value={hora}
        />
        <label>Síntomas</label>
        <textarea
          name="sintomas"
          className="u-full-width"
          placeholder="Describe brevemente los síntomas"
          onChange={actualizarState}
          value={sintomas}
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