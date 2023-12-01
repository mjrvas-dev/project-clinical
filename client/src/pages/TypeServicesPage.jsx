import React, { useState, useEffect, useMemo } from 'react';
import { Link, json } from 'react-router-dom';
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';
import { MRT_Localization_ES } from 'material-react-table/locales/es';
import TypeServiceSidebar from '../components/TypeServiceSidebar';

import { useTypeServices } from '../context/TypeServicesContext';

// Componente principal del gestor de servicios
const TypeServicePage = () => {
  const [services, setServices] = useState([]);
  const [newService, setNewService] = useState({ servicionombre: '' });
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const { createTypeService, updateTypeService, deleteTypeService } = useTypeServices();
  const { getTypeServices, typeservices } = useTypeServices();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getTypeServices();
        setServices(result);
      } catch (error) {
        console.error('Error al obtener servicios:', error);
      }
    };

    fetchData();
  }, []);

  const handleAddService = () => {
    // Restablece el estado de newService y cierra la barra lateral
    setNewService({ servicionombre: '' });
    /* console.log(newService); */
    createTypeService(newService);
    // Actualizar el estado local con los servicios actualizados
    setServices(getTypeServices());
    closeSidebar();
  };

  const handleEditService = (_id) => {
    const selectedService = typeservices.find(service => service._id === _id);
    setNewService({ ...selectedService });
    openSidebar();
  };
  
  const handleUpdateService = async () => {
    try {
      // Actualiza el servicio utilizando updateTypeService
      await updateTypeService(newService._id, newService);
      // Actualiza el estado local con el servicio actualizado
      setServices(getTypeServices());
      // Restablece el estado de newService y cierra la barra lateral
      setNewService({ servicionombre: '' });
      closeSidebar();
    } catch (error) {
      console.error('Error al actualizar servicio:', error);
    }
  };

  const handleDeleteService = async (_id) => {
    const isConfirmed = window.confirm("¿Estás seguro de que deseas eliminar este servicio?");
    if (isConfirmed) {
      try {
        // Eliminar el servicio utilizando deleteTypeService
        await deleteTypeService(_id);
        // Actualizar el estado local con los servicios actualizados
        setServices(getTypeServices());
        // Cerrar la barra lateral
        closeSidebar();
      } catch (error) {
        console.error('Error al eliminar servicio:', error);
      }
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
            onEdit={() => handleEditService(row.original._id)}
            onDelete={() => handleDeleteService(row.original._id)}
          />
        ),
      },
    ],
    [handleEditService, handleDeleteService]
  );

  // Mapeo de datos para la tabla
  let servicesData = useMemo(() => {
    if (typeservices) {
      return typeservices.map((item) => ({
        _id: item._id,
        servicionombre: `${item.servicionombre}`.toUpperCase(),
      }));
    } else {
      return [];
    }
  }, [typeservices]);

  // Configuración de la tabla
  const table = useMaterialReactTable({
    columns,
    data: servicesData || [],
    localization: MRT_Localization_ES,
  });

  return (
    <div className="flex flex-wrap my-3 -mx-0 items-center justify-center z-index: -1">
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
        <TypeServiceSidebar
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