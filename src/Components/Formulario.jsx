import React,{ useEffect, useState } from "react";
import Error from "./Error";

const Formulario = ({ pacientes, setPacientes, pacienteSeleccionado, setPacienteSeleccionado }) => {

  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');
  const [error, setError] = useState(false);

  const generarId = () => {
    const fechaRandom = Date.now().toString(36);
    const numeroRandom = Math.random().toString(36).substring(2);
    
    return fechaRandom + numeroRandom;
  };

  const handleSubmit = e => {
    e.preventDefault();
    if([nombre,propietario,email,fecha,sintomas].includes('')){
      setError( true );
      return;
    }
    setError( false );

    const pacienteCreado = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
    };
    
    if( pacienteSeleccionado.id ){
      pacienteCreado.id = pacienteSeleccionado.id;
      const pacientesActualizado = pacientes.map( pacienteState => pacienteState.id === pacienteCreado.id ? pacienteCreado : pacienteState );
      setPacientes(pacientesActualizado);
      setPacienteSeleccionado({});
    }else{
      pacienteCreado.id = generarId();
      setPacientes([ ...pacientes, pacienteCreado ]);
    }

    setNombre('');
    setPropietario('');
    setEmail('');
    setFecha('');
    setSintomas('');
  };

  useEffect(() => {
    if(Object.keys(pacienteSeleccionado).length > 0) {
      setNombre(pacienteSeleccionado.nombre);
      setPropietario(pacienteSeleccionado.propietario);
      setEmail(pacienteSeleccionado.email);
      setFecha(pacienteSeleccionado.fecha);
      setSintomas(pacienteSeleccionado.sintomas);
    }
  },[pacienteSeleccionado]);

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-semibold text-center text-slate-300 text-2xl">
        Seguimiento de Pacientes
      </h2>
      <p className="text-center text-slate-300 mt-2">
        Añade Pacientes y{" "}
        <span className="font-bold text-teal-500">Adminístralos</span>
      </p>
      <form className="bg-slate-900 my-10 rounded-md shadow-md p-10" onSubmit={ handleSubmit }>
        <div className="mb-5">
          <label htmlFor="mascota" className="block font-bold text-gray-200">
            Nombre Mascota
          </label>
          <input 
            id="mascota"
            type="text" 
            placeholder="Nombre de la Mascota" 
            className="outline-none mt-2 placeholder-slate-500 px-3 py-2 rounded-md w-full"
            value={ nombre } 
            onChange={ ({ target }) => setNombre( target.value ) }
          />
        </div>
        <div className="mb-5">
          <label htmlFor="propietario" className="block font-bold text-gray-200">
            Nombre Propietario
          </label>
          <input 
            id="propietario"
            type="text" 
            placeholder="Nombre del Propietario" 
            className="outline-none mt-2 placeholder-slate-500 px-3 py-2 rounded-md w-full"
            value={ propietario } 
            onChange={ ({ target }) => setPropietario( target.value ) }
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block font-bold text-gray-200">
            Email
          </label>
          <input 
            id="email"
            type="email" 
            placeholder="Email contacto Propietario" 
            className="outline-none mt-2 placeholder-slate-500 px-3 py-2 rounded-md w-full"
            value={ email } 
            onChange={ ({ target }) => setEmail( target.value ) }
          />
        </div>
        <div className="mb-5">
          <label htmlFor="alta" className="block font-bold text-gray-200">
            Fecha Alta
          </label>
          <input 
            id="alta"
            type="date" 
            className="outline-none mt-2 placeholder-slate-500 px-3 py-2 rounded-md w-full"
            value={ fecha } 
            onChange={ ({ target }) => setFecha( target.value ) }
          />
        </div>
        <div className="mb-5">
          <label htmlFor="sintomas" className="block font-bold text-gray-200">
            Síntomas
          </label>
          <textarea 
            id="sintomas"
            type="text" 
            placeholder="Describe los síntomas" 
            className="outline-none mt-2 placeholder-slate-500 px-3 py-2 rounded-md w-full"
            value={ sintomas } 
            onChange={ ({ target }) => setSintomas( target.value ) }
          />
        </div>
        { error && <Error mensaje='Complete todos los campos' />}
        <input 
          type="submit"
          value={ pacienteSeleccionado.id ? "EDITAR PACIENTE" : "AGREGAR PACIENTE"}
          className="bg-teal-600 cursor-pointer md:flex font-semibold md:ml-auto md:px-10 py-2 rounded-md text-center text-gray-200 text-sm w-full md:w-auto hover:bg-teal-700"
        />
      </form>
    </div>
  );
};

export default Formulario;
