import React, { Fragment, useState } from 'react';
import Formulario from './components/Formulario';

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
              2
            </div>
          </div>
        </div>

      </div>
    </Fragment>
  );
}

export default App;
