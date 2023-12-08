import { usePatients } from "../context/PatientsContext";
import { Link, useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);

function PatientProfileCard({ patient }) {
    const navigate = useNavigate();
    const { deletePatient } = usePatients();
    const identificationType = (patient.tipoidentificacion === 0) ? 'DPI' : 'PASAPORTE';

    const handleDelete = () => {
        const confirmDelete = window.confirm("¿Estás seguro de que quieres eliminar este paciente?");
        if (confirmDelete) {
            deletePatient(patient._id);
            // Redireccionar después de eliminar
            navigate("/patients");
        }
    };

    return (
        <div className="w-full p-0 mx-auto mt-4 mb-8">
            <div className="flex flex-wrap -mx-3">
                <div className="w-full max-w-full px-3 lg-max:mt-6 xl:w-/12">
                    <div className="flex flex-col h-full min-w-0 break-words border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                        <div className="flex flex-col flex-auto min-w-0 p-5 mx-0 overflow-hidden break-words bg-zinc-800 border-0 shadow-3xl dark:bg-slate-850 rounded-2xl bg-clip-border">
                            <div className="flex-none w-auto max-w-full px-3 my-auto">
                                <div className="flex items-center justify-between">
                                    <h5 className="mb-1 dark:text-white uppercase">
                                        <strong className="text-sm leading-normal text-slate-500 dark:text-white">Nombre Paciente:</strong> {patient.primernombre} {patient.segundonombre} {patient.primerapellido} {patient.segundoapellido}
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
                                </div>
                            </div>
                            <div className="flex-auto p-3">
                                <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                                    <li className="relative block px-4 py-0 pt-0 pl-0 text-sm leading-normal border-0 rounded-t-lg">
                                        <strong className="text-slate-500 dark:text-white">Identificacion:</strong> &nbsp; {identificationType} - {patient.identificacion}
                                    </li>
                                    <li className="relative block px-4 py-0 pl-0 text-sm leading-normal border-0 border-t-0">
                                        <strong className="text-slate-500 dark:text-white">Fecha Nacimiento:</strong> &nbsp; {dayjs(patient.fechanacimiento).utc().format("DD/MM/YYYY")}
                                    </li>
                                    <li className="relative block px-4 py-0 pl-0 text-sm leading-normal border-0 border-t-0">
                                        <strong className="text-slate-500 dark:text-white">Telefono:</strong> &nbsp; {patient.telefono}
                                    </li>
                                    <li className="relative block px-4 py-0 pl-0 text-sm leading-normal border-0 border-t-0">
                                        <strong className="text-slate-500 dark:text-white">Correo:</strong> &nbsp; {patient.email}
                                    </li>
                                    <li className="relative block px-4 py-0 pl-0 text-sm leading-normal border-0 border-t-0">
                                        <strong className="text-slate-500 dark:text-white">Direccion:</strong> &nbsp; {patient.direccion}
                                    </li>
                                    <li className="relative block px-4 py-0 pl-0 text-sm leading-normal border-0 border-t-0">
                                        <strong className="text-slate-500 dark:text-white">Datos de Emergencia:</strong> &nbsp; {patient.emergencianombre} - {patient.emergenciatelefono}
                                    </li>
                                </ul>
                                {/* <Link
                                    to={`/patients/${patient._id}`}
                                    className="inline-block float-right px-4 py-2 m-0 mb-0 mr-1 text-xs font-bold leading-normal text-center text-white align-middle transition-all ease-in bg-blue-500 hover:bg-blue-600 border-0 rounded-lg shadow-md cursor-pointer tracking-tight-rem hover:-translate-y-px active:opacity-85"
                                >Editar</Link>
                                <button
                                    className="inline-block float-right px-4 py-2 m-0 mb-0 mr-1 text-xs font-bold leading-normal text-center text-white align-middle transition-all ease-in bg-red-500 hover:bg-red-600 border-0 rounded-lg shadow-md cursor-pointer tracking-tight-rem hover:-translate-y-px active:opacity-85"
                                    onClick={handleDelete}
                                >Eliminar</button> */}
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PatientProfileCard;
