const Paciente = ({ paciente, setPacienteSeleccionado, eliminarPaciente }) => {

  const { nombre, propietario, email, fecha, sintomas, id } = paciente;

  const handleEliminar = () => {
    const respuesta = confirm('¿Quieres eliminar este elemento?');
    respuesta && eliminarPaciente( id );
  };

  return (
    <div className="bg-gray-700 m-5 mt-0 p-5 rounded-md">
      <p className="font-bold text-gray-800 uppercase my-2">
        Nombre: {""}
        <span className="normal-case text-gray-400 text-sm">{nombre}</span>
      </p>
      <p className="font-bold text-gray-800 uppercase my-2">
        Propietario: {""}
        <span className="normal-case text-gray-400 text-sm">{propietario}</span>
      </p>
      <p className="font-bold text-gray-800 uppercase my-2">
        Email: {""}
        <span className="normal-case text-gray-400 text-sm">{email}</span>
      </p>
      <p className="font-bold text-gray-800 uppercase my-2">
        Fecha Alta: {""}
        <span className="normal-case text-gray-400 text-sm">{fecha}</span>
      </p>
      <p className="font-bold text-gray-800 uppercase my-2">
        Síntomas: {""}
        <span className="normal-case text-gray-400 text-sm">{sintomas}</span>
      </p>
      <div className="flex justify-between">
        <input 
          type="button"
          value="Editar"
          className="bg-teal-600 px-4 py-1 rounded-md cursor-pointer"  
          onClick={() => setPacienteSeleccionado(paciente)}
        />
        <input 
          type="button"
          value="Eliminar"  
          className="bg-red-600 px-4 py-1 rounded-md cursor-pointer"  
          onClick={ handleEliminar }
        />
      </div>
    </div>
  );
}

export default Paciente
