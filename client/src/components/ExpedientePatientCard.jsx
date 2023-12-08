import { usePatients } from "../context/PatientsContext";
import React, { useState, useEffect, useMemo } from 'react';
import { Link, useNavigate } from "react-router-dom";

import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';
import { MRT_Localization_ES } from 'material-react-table/locales/es';
/* import TypeServiceSidebar from '../components/TypeServiceSidebar'; */
import ExpedientePatientSidebar from "./ExpedientePatientSidebar";

import { useTypeServices } from '../context/TypeServicesContext';

/* import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc); */

function ExpedientePatientCard({ id, patient }) {
    /* const navigate = useNavigate();
    const { deletePatient } = usePatients();
    const identificationType = (patient.tipoidentificacion === 0) ? 'DPI' : 'PASAPORTE';

    const handleDelete = () => {
        const confirmDelete = window.confirm("¿Estás seguro de que quieres eliminar este paciente?");
        if (confirmDelete) {
            deletePatient(patient._id);
            // Redireccionar después de eliminar
            navigate("/patients");
        }
    }; */

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
        <div className="w-full p-0 mx-auto mt-4 mb-8">
            <div className="flex flex-wrap -mx-3">
                <div className="w-full max-w-full px-3 lg-max:mt-6 xl:w-/12">
                    <div className="flex flex-col h-full min-w-0 break-words border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                        <div className="flex flex-col flex-auto min-w-0 p-5 mx-0 overflow-hidden break-words bg-zinc-800 border-0 shadow-3xl dark:bg-slate-850 rounded-2xl bg-clip-border">
                            <div className="flex-none w-auto max-w-full px-3 my-auto">
                                {/* <div className="flex items-center justify-between">
                                    <h5 className="mb-1 dark:text-white uppercase">
                                        <strong className="text-sm leading-normal text-slate-500 dark:text-white">Expediente:</strong> {patient.primernombre} {patient.segundonombre} {patient.primerapellido} {patient.segundoapellido}
                                    </h5>
                                    <div>
                                        <Link
                                            to={`/patients/${patient._id}`}
                                            className="inline-block px-4 py-1.5 m-0 mb-0 mr-1 text-xs font-bold leading-normal text-center text-white align-middle transition-all ease-in bg-blue-500 hover:bg-blue-600 border-0 rounded-lg shadow-md cursor-pointer tracking-tight-rem hover:-translate-y-px active:opacity-85"
                                        >
                                            Editar
                                        </Link>
                                        <button
                                            className="inline-block px-4 py-1.5 m-0 mb-0 mr-1 text-xs font-bold leading-normal text-center text-white align-middle transition-all ease-in bg-red-500 hover:bg-red-600 border-0 rounded-lg shadow-md cursor-pointer tracking-tight-rem hover:-translate-y-px active:opacity-85"
                                            onClick={handleDelete}
                                        >
                                            Eliminar
                                        </button>
                                    </div>
                                </div> */}
                            </div>
                            {/* <div className="flex-auto p-3">
                                <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                                    <li className="relative block px-4 py-2 pt-0 pl-0 text-sm leading-normal border-0 rounded-t-lg">
                                        <strong className="text-slate-500 dark:text-white">Identificacion:</strong> &nbsp; {identificationType} - {patient.identificacion}
                                    </li>
                                    <li className="relative block px-4 py-2 pl-0 text-sm leading-normal border-0 border-t-0">
                                        <strong className="text-slate-500 dark:text-white">Fecha Nacimiento:</strong> &nbsp; {dayjs(patient.fechanacimiento).utc().format("DD/MM/YYYY")}
                                    </li>
                                    <li className="relative block px-4 py-2 pl-0 text-sm leading-normal border-0 border-t-0">
                                        <strong className="text-slate-500 dark:text-white">Telefono:</strong> &nbsp; {patient.telefono}
                                    </li>
                                    <li className="relative block px-4 py-2 pl-0 text-sm leading-normal border-0 border-t-0">
                                        <strong className="text-slate-500 dark:text-white">Correo:</strong> &nbsp; {patient.email}
                                    </li>
                                    <li className="relative block px-4 py-2 pl-0 text-sm leading-normal border-0 border-t-0">
                                        <strong className="text-slate-500 dark:text-white">Direccion:</strong> &nbsp; {patient.direccion}
                                    </li>
                                    <li className="relative block px-4 py-2 pl-0 text-sm leading-normal border-0 border-t-0">
                                        <strong className="text-slate-500 dark:text-white">Datos de Emergencia:</strong> &nbsp; {patient.emergencianombre} - {patient.emergenciatelefono}
                                    </li>
                                </ul>
                            </div>
                            <div className="flex-none w-auto max-w-full px-3 my-auto">
                                <div className="flex items-center justify-between">
                                    <div className="h-full">
                                        <hr className="h-px mx-0 my-4 bg-transparent border-0 opacity-25 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent"></hr>
                                        <p className="mb-0 text-sm leading-normal dark:text-white dark:opacity-60">
                                            <strong className="text-sm leading-normal text-slate-500 dark:text-white">Historial Medico:</strong> &nbsp; {patient.historialmedico}
                                        </p>
                                        <p className="mb-0 text-sm leading-normal dark:text-white dark:opacity-60">
                                            <strong className="text-sm leading-normal text-slate-500 dark:text-white">Medicamentos:</strong> &nbsp; {patient.medicamento}
                                        </p>
                                        <hr className="h-px mx-0 my-4 bg-transparent border-0 opacity-25 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent"></hr>
                                    </div>
                                </div>
                            </div> */}

                            <div className="flex flex-wrap my-3 -mx-0 items-center justify-center z-index: -1">
                                {/* <div className="flex items-center">
                                    <div className="mx-4">
                                        <h5 className="mb-0 font-bold dark:text-white">Listado de Servicios</h5>
                                        <p className="mb-0 text-sm leading-normal">General</p>
                                    </div>
                                </div> */}
                                <div className="mx-4">
                                    <div className="flex items-center justify-between">
                                        <h5 className="mb-1 dark:text-white uppercase"><strong className="text-sm leading-normal text-slate-500 dark:text-white">Listado de Expedientes</strong></h5>
                                    </div>
                                </div>
                                <div className="ml-auto text-right mx-4">
                                    <Link
                                        onClick={openSidebar}
                                        className="inline-block px-4 py-1.5 m-0 mb-0 mr-1 text-xs font-bold leading-normal text-center text-white align-middle transition-all ease-in bg-green-600 border-0 rounded-lg shadow-md cursor-pointer hover:-translate-y-px hover:shadow-xs active:opacity-85 tracking-tight-rem"
                                    >
                                        Nuevo Expediente
                                    </Link>
                                </div>
                                <div className="bg-zinc-650 max-w-full w-full my-3 py-2 p-2 px-2 mx-0 mt-3 m-auto flex-0 lg:w-12/11 rounded-md z-0">
                                    <MaterialReactTable table={table} />
                                </div>
                                {isSidebarVisible && (
                                    <ExpedientePatientSidebar
                                        newService={newService}
                                        setNewService={setNewService}
                                        handleUpdateService={handleUpdateService}
                                        handleAddService={handleAddService}
                                        closeSidebar={closeSidebar}
                                    />
                                )}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExpedientePatientCard;
