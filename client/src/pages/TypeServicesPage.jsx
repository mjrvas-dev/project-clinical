import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';
import { MRT_Localization_ES } from 'material-react-table/locales/es';
import TypeServicesSidebar from '../components/TypeServicesSidebar';

import { useTypeServices } from '../context/TypeServicesContext';

// Componente principal del gestor de servicios
const TypeServicePage = () => {
  const [services, setServices] = useState([]);
  const [newService, setNewService] = useState({ servicionombre: '', });
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const { createTypeService, getTypeService, updateTypeService } = useTypeServices();

  useEffect(() => {
    // Puedes cargar los servicios desde algún servicio o fuente de datos aquí.
    // Por ahora, solo usaremos un conjunto de servicios de ejemplo.
    setServices([
      { id: '1', servicionombre: 'Servicio A' },
      { id: '2', servicionombre: 'Servicio B' },
      // Agrega más servicios si es necesario
    ]);
  }, []);

  const handleAddService = () => {
    setServices([...services, { ...newService, id: String(Date.now()) }]);
    setNewService({ id: '', servicionombre: '' });
    console.log(newService);
    createTypeService(newService);
    closeSidebar();
  };

  const handleEditService = (id) => {
    const selectedService = services.find(service => service.id === id);
    setNewService({ ...selectedService });
    openSidebar();
  };

  const handleUpdateService = () => {
    setServices(services.map(service =>
      service.id === newService.id ? { ...newService } : service
    ));
    setNewService({ id: '', servicionombre: '' });
    closeSidebar();
  };

  const handleDeleteService = (id) => {
    const isConfirmed = window.confirm("¿Estás seguro de que deseas eliminar este servicio?");
    if (isConfirmed) {
      setServices(services.filter(service => service.id !== id));
      closeSidebar();
    }
  };

  const openSidebar = () => {
    setIsSidebarVisible(true);
  };

  const closeSidebar = () => {
    setIsSidebarVisible(false);
  };

  const EditDeleteButtons = ({ onEdit, onDelete }) => (
    <>
      <button
        onClick={onEdit}
        className="inline-block px-4 py-1.5 m-0 mb-0 mr-1 text-xs font-bold leading-normal text-center text-white align-middle transition-all ease-in bg-blue-800 hover:bg-blue-600 border-0 rounded-lg shadow-md cursor-pointer tracking-tight-rem hover:-translate-y-px active:opacity-85"
      >
        Editar
      </button>
      <button
        onClick={onDelete}
        className="inline-block px-4 py-1.5 m-0 mb-0 mr-1 text-xs font-bold leading-normal text-center text-white align-middle transition-all ease-in bg-red-800 hover:bg-red-600 border-0 rounded-lg shadow-md cursor-pointer tracking-tight-rem hover:-translate-y-px active:opacity-85"
      >
        Eliminar
      </button>
    </>
  );

  // Configuración de las columnas de la tabla
  const columns = useMemo(
    () => [
      { accessorKey: 'servicionombre', header: 'Nombre del Servicio', size: 300 },
      {
        accessorKey: 'options',
        header: 'Opciones',
        size: 150,
        Cell: ({ row }) => (
          <EditDeleteButtons
            onEdit={() => handleEditService(row.original.id)}
            onDelete={() => handleDeleteService(row.original.id)}
          />
        ),
      },
    ],
    [handleEditService, handleDeleteService]
  );

  // Configuración de la tabla
  const table = useMaterialReactTable({
    columns,
    data: services,
    localization: MRT_Localization_ES,
  });

  return (
    <div className="flex flex-wrap my-3 -mx-0 items-center justify-center">
      <div className="flex items-center">
        <div className="mx-4">
          <h5 className="mb-0 font-bold dark:text-white">Listado de Servicios</h5>
          <p className="mb-0 text-sm leading-normal">General</p>
        </div>
      </div>
      <div className="ml-auto text-right mx-4">
        <Link
          onClick={openSidebar}
          className="inline-block px-4 py-1.5 m-0 mb-0 mr-1 text-xs font-bold leading-normal text-center text-white align-middle transition-all ease-in bg-green-600 border-0 rounded-lg shadow-md cursor-pointer hover:-translate-y-px hover:shadow-xs active:opacity-85 tracking-tight-rem"
        >
          Nuevo Servicio
        </Link>
      </div>
      <div className="bg-zinc-650 max-w-full w-full my-3 py-2 p-2 px-2 mx-0 mt-3 m-auto flex-0 lg:w-12/11 rounded-md z-0">
        <MaterialReactTable table={table} />
      </div>
      {isSidebarVisible && (
        <TypeServicesSidebar
          newService={newService}
          setNewService={setNewService}
          handleUpdateService={handleUpdateService}
          handleAddService={handleAddService}
          closeSidebar={closeSidebar}
        />
      )}
    </div>
  );
};

export default TypeServicePage;
