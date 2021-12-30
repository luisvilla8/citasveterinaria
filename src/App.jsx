import { useEffect, useState } from "react"
import Formulario from "./Components/Formulario"
import Header from "./Components/Header"
import ListadoPacientes from "./Components/ListadoPacientes"

function App() {

  const [pacientes, setPacientes] = useState([]);
  const [pacienteSeleccionado, setPacienteSeleccionado] = useState({});

  const eliminarPaciente = id => {
    const pacientesActualizado = pacientes.filter( paciente => paciente.id !== id );
    setPacientes( pacientesActualizado );
  };

  const cargarLocalStorage = () => {
    const pacientesLocalStorage = JSON.parse(localStorage.getItem('pacientes')) ?? [];
    setPacientes( pacientesLocalStorage );
  };

  const guardarLocalStorage = () => {
    localStorage.setItem('pacientes',JSON.stringify(pacientes));
  };

  useEffect( () => {
    cargarLocalStorage();
  },[]);

  useEffect( () => {
    guardarLocalStorage();
  },[pacientes]);

  return (
    <div className="container mx-auto mt-10 pb-10">
      <Header />
      <div className="md:flex mt-10">
        <Formulario 
          pacientes={pacientes}
          setPacientes={setPacientes}
          pacienteSeleccionado={pacienteSeleccionado}
          setPacienteSeleccionado={setPacienteSeleccionado}
          />
        <ListadoPacientes 
          pacientes={pacientes}
          setPacienteSeleccionado={setPacienteSeleccionado}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App
