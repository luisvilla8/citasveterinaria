import React from 'react'
import Paciente from './Paciente';

const ListadoPacientes = ({ pacientes, setPacienteSeleccionado, eliminarPaciente }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5">
      {pacientes.length !== 0 ? (
        <>
          <h2 className="font-semibold text-center text-slate-300 text-2xl">
            Listado Pacientes
          </h2>
          <p className="text-center text-slate-300 mt-2">
            Administra tus {""}
            <span className="font-bold text-teal-500">Pacientes y Citas</span>
          </p>
          <div className="h-screen md:overflow-y-scroll mt-10">
            {pacientes.map((paciente) => {
              return (
                <Paciente
                  key={paciente.id}
                  paciente={paciente}
                  setPacienteSeleccionado={setPacienteSeleccionado}
                  eliminarPaciente={eliminarPaciente}
                />
              );
            })}
          </div>
        </>
      ) : (
        <>
          <h2 className="font-semibold text-center text-slate-300 text-2xl">
            No hay pacientes
          </h2>
          <p className="text-center text-slate-300 mt-2">
            Agrega pacientes y {""}
            <span className="font-bold text-teal-500">los verás aquí</span>
          </p>
        </>
      )}
    </div>
  );
}

export default ListadoPacientes
