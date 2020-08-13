import React, { Fragment, useState } from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {

  //Arreglo de citas
  const [ citas, guardarCitas ] = useState([]);

  //Función para tomas las citas actuales y agregar la nueva
  const crearCita = (cita) => {
    guardarCitas([
      ...citas,
      cita
    ])
  }
  //Función para eliminar citas por su id
  //Filter genera un nuevo arreglo
  const eliminarCita = id => {
    const nuevasCitas = citas.filter(cita => cita.id !== id)
    guardarCitas(nuevasCitas);
  }

  //Mensaje condicional
  console.log(citas.length);

  return (
    <Fragment>
      <h2>Administrador de pacientes</h2>
      <div className="container">
        <div className="row">
          <div>
            <div className="one-half column">
              <Formulario 
                crearCita={crearCita}
              />
            </div>
            <div className="one-half column">
              <h4>Administra tus citas</h4>
                {citas.map(cita => (
                  <Cita 
                    key={cita.id}
                    cita={cita}
                    eliminarCita={eliminarCita}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
