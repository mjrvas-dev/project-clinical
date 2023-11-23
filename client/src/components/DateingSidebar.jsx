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
                className="w-full mb-2 p-2 bg-gray-700 text-white"
            />
            <input
                type="date"
                value={newAppointment.date}
                onChange={(e) => setNewAppointment({ ...newAppointment, date: e.target.value })}
                className="w-full mb-2 p-2 bg-gray-700 text-white"
            />
            <input
                type="time"
                value={newAppointment.time}
                onChange={(e) => setNewAppointment({ ...newAppointment, time: e.target.value })}
                className="w-full mb-2 p-2 bg-gray-700 text-white"
            />
            {newAppointment.id ? (
                <button onClick={handleUpdateAppointment} className="bg-blue-500 text-white py-1 px-2 rounded mr-2">Actualizar Cita</button>
            ) : (
                <button onClick={handleAddAppointment} className="bg-green-500 text-white py-1 px-2 rounded mr-2">Agregar Cita</button>
            )}
            <button onClick={()=>{resetForm();closeSidebar();}}>Cancelar</button>
        </div>
    );
};

export default DateingSidebar;
