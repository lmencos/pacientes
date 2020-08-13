import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {
  const year = new Date().getFullYear();

  //Agregando las citas al localStorage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if(!citasIniciales){
    citasIniciales = []
  }

  //Arreglo de citas
  const [ citas, guardarCitas ] = useState(citasIniciales);

  //useEffect
  useEffect( () => {
    let citasIniciales = JSON.parse(localStorage.getItem('citas'));
    if(citasIniciales){
      localStorage.setItem('citas', JSON.stringify(citas))
    } else {
      localStorage.setItem('citas', JSON.stringify([]))
    }
  }, [citas] )

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
    const nuevasCitas = citas.filter(cita => (cita.id !== id))
    guardarCitas(nuevasCitas);
  }

  //Mensaje condicional
  //console.log(citas.length);
  const titulo = citas.length === 0 ? 'No hay citas'  : 'Administra tus citas'

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
              <h4>{titulo}</h4>
                {citas.map(cita => (
                  <Cita 
                    eliminarCita={eliminarCita}
                    key={cita.id}
                    cita={cita}
                  />
                ))}
            </div>
          </div>
        </div>
        <footer>
        <footer className="footer">
          <p>Todos los derechos reservados, Luis Mencos Guzmán {year} &copy;</p>
        </footer>
        </footer>
      </div>
    </Fragment>
  );
}

export default App;
