import React from 'react';
import CloseIcon from '@mui/icons-material/Close';

const TypeServiceSidebar = ({
    newService,
    setNewService,
    handleUpdateService,
    handleAddService,
    closeSidebar,
}) => {
    const resetForm = () => {
        setNewService({ _id: '', servicionombre: '' });
    };

    return (
        <div className="fixed top-0 right-0 h-full w-1/4 bg-gray-800 p-4 z-50">
            <div className="flex items-center">
                <div className="mx-4">
                    <h2 className="text-white mb-4">{newService._id ? 'Editar Servicio' : 'Agregar Nuevo Servicio'}</h2>
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
            <input
                type="text"
                placeholder="Nombre del servicio"
                value={newService.servicionombre}
                onChange={(e) => setNewService({ ...newService, servicionombre: e.target.value })}
                className="w-full bg-gray-700 text-white px-4 py-2 my-2 mb-2 rounded-md uppercase"
                autoFocus="autofocus"
            />
            {newService._id ? (
                <button onClick={handleUpdateService} className="w-full bg-indigo-500 text-white px-4 py-2 rounded-md my-2 mb-2">Actualizar Servicio</button>
            ) : (
                <button onClick={handleAddService} className="w-full bg-indigo-500 text-white px-4 py-2 rounded-md my-2 mb-2">Agregar Servicio</button>
            )}
            {/* <button onClick={() => { resetForm(); closeSidebar(); }} className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2 mb-2">Cancelar</button> */}
        </div>
    );
};

export default TypeServiceSidebar;
