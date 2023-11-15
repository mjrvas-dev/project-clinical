import { Link } from "react-router-dom";
import { useEffect } from "react";
import { usePatients } from "../context/PatientsContext";
import PatientCard from "../components/PatientCard";
import React, { useMemo } from "react";
import {
    MaterialReactTable,
    useMaterialReactTable,
} from "material-react-table";

function PatientsPage() {
    const { getPatients, patients } = usePatients();

    // Llama a la función `getPatients` cuando el componente se monta
    useEffect(() => {
        getPatients();
    }, []);

    // Configuración de las columnas de la tabla
    const columns = useMemo(
        () => [
            {
                accessorKey: "nombre",
                header: "Nombre",
                size: 150,
            },
            {
                accessorKey: "fechanacimiento",
                header: "Fecha de nacimiento",
                size: 150,
            },
            {
                accessorKey: "email",
                header: "Email",
                size: 150,
            },
            {
                accessorKey: "telefono",
                header: "Telefono",
                size: 150,
            },
        ],
        []
    );

    // Mapeo de datos para la tabla
    // let abc = useMemo(
    //     () => [
    //         patients.map((item, key) => ({
    //             nombre: `${item.primernombre} ${item.segundonombre} ${item.primerapellido} ${item.segundoapellido}`,
    //             fechanacimiento: item.fechanacimiento,
    //             email: item.email,
    //             telefono: item.telefono,
    //         })),
    //     ],
    //     []
    // );
    let abc = useMemo(
        () => patients.map((item) => ({
            nombre: `${item.primernombre} ${item.segundonombre} ${item.primerapellido} ${item.segundoapellido}`,
            fechanacimiento: item.fechanacimiento,
            email: item.email,
            telefono: item.telefono,
        })), [patients]
    );

    console.log('prueba para mostrar las rows de la tabla')
    console.log(abc)

    // Configuración de la tabla
    const table = useMaterialReactTable({
        columns,
        data: abc,
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