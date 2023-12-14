import React, { useState, useEffect } from 'react';
import { useTypeServices } from '../context/TypeServicesContext';

const ExpedientePatientSidebar = ({
    newService,
    setNewService,
    handleUpdateService,
    handleAddService,
    closeSidebar,
    patientId
}) => {

    const [error, setError] = useState('');
      
    const { getTypeServices, typeservices } = useTypeServices();

    useEffect(() => {
        getTypeServices();
        console.log('sidebar')
        console.log(newService)
        // Configura un temporizador para ocultar el error después de 3 segundos
        const timeout = setTimeout(() => {
            setError('');
        }, 5000);

        // Limpia el temporizador al desmontar el componente
        return () => clearTimeout(timeout);
    }, [error]);

    const resetForm = () => {
        setNewService({ _id: '', typeservice: '', patient: '' });
        setError('');
    };


    const validateForm = () => {
        if (!newService.typeservice) {
            setError('Por favor, seleccione un tipo de servicio para crear el expediente.');
            return false;
        }
        return true;
    };

    const handleAddOrUpdateService = () => {
        if (validateForm()) {
            if (newService.typeservice._id) {
                handleUpdateService();
            } else {
                handleAddService();
            }
        }
    };

    return (
        <div className="fixed top-0 right-0 h-full w-1/4 bg-gray-800 p-4 z-50">
            <h2 className="text-white mb-4">{newService.typeservice._id ? 'Editar Expediente' : 'Crear Nuevo Expediente'}</h2>

            {/* Agregar un campo de solo lectura para mostrar el ID del paciente */}
            <input
                type="text"
                hidden
                readOnly
                value={patientId}
                className="w-full bg-gray-700 text-white px-4 py-2 my-2 mb-2 rounded-md uppercase"
                placeholder="ID del paciente"
            />

            <select
                value={newService.typeservice._id}
                onChange={(e) => setNewService({...newService, typeservice: { _id: e.target.value }, patient: patientId })}
                className="w-full bg-gray-700 text-white px-4 py-2 my-2 mb-2 rounded-md uppercase"
                autoFocus="autofocus"
            >
                <option value="">Seleccione...</option>
                {typeservices.map((service) => (
                    <option key={service._id} value={service._id}>
                        {service.servicionombre}
                    </option>
                ))}
            </select>

            <button onClick={handleAddOrUpdateService} className="w-full bg-indigo-500 text-white px-4 py-2 rounded-md my-2 mb-2">
                {newService.typeservice._id ? 'Actualizar Expediente' : 'Agregar Expediente'}
            </button>
            <button onClick={() => { resetForm(); closeSidebar(); }} className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2 mb-2">Cancelar</button>
            
            {error && (
                <p className="text-red-500 mt-2 bg-red-100 border border-red-400 rounded p-2">
                    {error}
                </p>
            )}

        </div>
    );
};

export default ExpedientePatientSidebar;
