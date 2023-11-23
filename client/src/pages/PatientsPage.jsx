import { Link } from "react-router-dom";
import { useEffect } from "react";
import { usePatients } from "../context/PatientsContext";
import PatientCard from "../components/PatientCard";
import React, { useMemo } from "react";
import { MaterialReactTable, useMaterialReactTable, } from "material-react-table";
import { MRT_Localization_ES } from 'material-react-table/locales/es';

import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);

function PatientsPage() {
    const { getPatients, patients } = usePatients();

    // Llama a la función `getPatients` cuando el componente se monta
    useEffect(() => {
        getPatients();
    }, []);

    // Configuración de las columnas de la tabla
    const columns = useMemo(
        () => [
            { accessorKey: "nombre", header: "Nombre Completo", size: 300 },
            { accessorKey: "fechanacimiento", header: "Fecha de nacimiento", size: 20 },
            { accessorKey: "email", header: "Email", size: 150 },
            { accessorKey: "telefono", header: "Telefono", size: 20 },
            { accessorKey: "opciones", header: "Opciones", size: 150 },
        ],[]
    );

    // Mapeo de datos para la tabla
    let infoPatients = useMemo(
        () => patients.map((item) => ({
            nombre: `${item.primernombre} ${item.segundonombre} ${item.primerapellido} ${item.segundoapellido}`.toUpperCase(),
            fechanacimiento: dayjs(item.fechanacimiento).utc().format("DD/MM/YYYY"),
            email: item.email.toUpperCase(),
            telefono: item.telefono,
            opciones: (
                <Link to={`/patientsprofile/${item._id}`}>
                    <button className="inline-block px-4 py-1.5 m-0 mb-0 mr-1 text-xs font-bold leading-normal text-center text-white align-middle transition-all ease-in bg-zinc-800 hover:bg-zinc-600 border-0 rounded-lg shadow-md cursor-pointer tracking-tight-rem hover:-translate-y-px active:opacity-85">
                        Perfil
                    </button>
                </Link>
            ),
        })), [patients]
    );

    // Configuración de la tabla
    const table = useMaterialReactTable({
        columns,
        data: infoPatients,
        localization: MRT_Localization_ES,
    });

// Renderiza un mensaje si no hay registros
const renderNoRecordsMessage = () => {
    return (
        <div alert="" className="p-4 pr-12 mb-4 text-white border border-blue-300 border-solid rounded-lg bg-gradient-to-tl from-blue-600 to-violet-600 text-center">
            No existen registros en el sistema.{" "}
            <Link to="/add-patient">Crear Paciente</Link>
        </div>
    );
};

return (
    <div className="flex flex-wrap my-3 -mx-0 items-center justify-center">
        <div className="flex items-center">
            <div className="mx-4">
                <h5 className="mb-0 font-bold dark:text-white">Listado Pacientes</h5>
                <p className="mb-0 text-sm leading-normal">General</p>
            </div>
        </div>
        <div className="ml-auto text-right mx-4">
            <Link
                to="/add-patient"
                className="inline-block px-4 py-1.5 m-0 mb-0 mr-1 text-xs font-bold leading-normal text-center text-white align-middle transition-all ease-in bg-green-600 border-0 rounded-lg shadow-md cursor-pointer hover:-translate-y-px hover:shadow-xs active:opacity-85 tracking-tight-rem"
            >
                Nuevo Paciente
            </Link>
        </div>
        <div className="bg-zinc-650 max-w-full w-full my-3 py-2 p-2 px-2 mx-0 mt-3 m-auto flex-0 lg:w-12/11 rounded-md">
            <div className="grid gap-2">
                {patients.length === 0 ? renderNoRecordsMessage() : <MaterialReactTable table={table} />}
            </div>
        </div>
    </div>
);
}

export default PatientsPage;