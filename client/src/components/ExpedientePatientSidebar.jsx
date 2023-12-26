import React, { useState, useEffect } from 'react';
import { useTypeServices } from '../context/TypeServicesContext';
import CloseIcon from '@mui/icons-material/Close';

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
        console.log('sidebar valor 1')
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
            if (newService._id) {
                handleUpdateService();
            } else {
                handleAddService();
            }
        }
    };

    return (
        <div className="fixed top-0 right-0 h-full w-1/4 bg-gray-800 p-4 z-50">
            <div className="flex items-center">
                <div className="mx-4">
                    <h2 className="text-white mb-4">{newService._id ? 'Editar Expediente' : 'Crear Nuevo Expediente'}</h2>
                </div>
                <div className="ml-auto text-right mx-0 mb-4">
                    <button
                        onClick={() => {
                            resetForm();
                            closeSidebar();
                        }}
                        className="inline-block"
                    >
                        <CloseIcon />
                    </button>
                </div>
            </div>

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
                onChange={(e) => setNewService({...newService, typeservice: e.target.value, patient: patientId })}
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
                {newService._id ? 'Actualizar Expediente' : 'Agregar Expediente'}
            </button>
            {/* {newService._id ? (
                <button onClick={handleUpdateService} className="w-full bg-indigo-500 text-white px-4 py-2 rounded-md my-2 mb-2">Actualizar Servicio</button>
            ) : (
                <button onClick={handleAddService} className="w-full bg-indigo-500 text-white px-4 py-2 rounded-md my-2 mb-2">Agregar Servicio</button>
            )} */}
            {/* <button onClick={() => { resetForm(); closeSidebar(); }} className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2 mb-2">Cancelar</button> */}
            
            {error && (
                <p className="text-red-500 mt-2 bg-red-100 border border-red-400 rounded p-2">
                    {error}
                </p>
            )}

        </div>
    );
};

export default ExpedientePatientSidebar;
