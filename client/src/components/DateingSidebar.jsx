import React from 'react';

const DateingSidebar = ({
    newAppointment,
    setNewAppointment,
    handleUpdateAppointment,
    handleAddAppointment,
    closeSidebar,
}) => {
    const resetForm = () => {
        setNewAppointment({ id: '', patientName: '', date: '', time: '' });
    };
    
    return (
        <div className="fixed top-0 right-0 h-full w-1/4 bg-gray-800 p-4 z-50">
            <h2 className="text-white mb-4">{newAppointment.id ? 'Editar Cita' : 'Agregar Nueva Cita'}</h2>
            <input
                type="text"
                placeholder="Nombre del paciente"
                value={newAppointment.patientName}
                onChange={(e) => setNewAppointment({ ...newAppointment, patientName: e.target.value })}
                className="w-full bg-gray-700 text-white px-4 py-2 my-2 mb-2 rounded-md"
                autoFocus="autofocus"
            />
            <input
                type="date"
                value={newAppointment.date}
                onChange={(e) => setNewAppointment({ ...newAppointment, date: e.target.value })}
                className="w-full bg-gray-700 text-white px-4 py-2 my-2 mb-2 rounded-md"
            />
            <input
                type="time"
                value={newAppointment.time}
                onChange={(e) => setNewAppointment({ ...newAppointment, time: e.target.value })}
                className="w-full bg-gray-700 text-white px-4 py-2 my-2 mb-6 rounded-md"
            />
            {newAppointment.id ? (
                <button onClick={handleUpdateAppointment} className="w-full bg-indigo-500 text-white px-4 py-2 rounded-md my-2 mb-2">Actualizar Cita</button>
            ) : (
                <button onClick={handleAddAppointment} className="w-full bg-indigo-500 text-white px-4 py-2 rounded-md my-2 mb-2">Agregar Cita</button>
            )}
            <button onClick={()=>{resetForm();closeSidebar();}} className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2 mb-2">Cancelar</button>
        </div>
    );
};

export default DateingSidebar;
