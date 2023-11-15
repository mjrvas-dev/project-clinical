import { usePatients } from "../context/PatientsContext";
import { Link } from "react-router-dom";

import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc);

function PatientProfileCard({ patient }) {
    const { deletePatient } = usePatients();
    let ti = '';
    (patient.tipoidentificacion==0) ? ti='DPI' : ti='PASAPORTE' ;

    return (
        <div className="w-full p-0 mx-auto mt-4 mb-8">
            <div className="flex flex-wrap -mx-3">
                <div className="w-full max-w-full px-3 lg-max:mt-6 xl:w-/12 ">
                    <div className="flex flex-col h-full min-w-0 break-words border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                        <div className="flex flex-col flex-auto min-w-0 p-5 mx-0 overflow-hidden break-words bg-zinc-800 border-0 shadow-3xl dark:bg-slate-850 rounded-2xl bg-clip-border">
                            <div class="flex-none w-auto max-w-full px-3 my-auto">
                                <div class="h-full">
                                    <h5 class="mb-1 dark:text-white uppercase">{patient.primernombre} {patient.segundonombre} {patient.primerapellido} {patient.segundoapellido}</h5>
                                    <hr className="h-px mx-0 my-4 bg-transparent border-0 opacity-25 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent"></hr>
                                    <p class="mb-0 text-sm leading-normal dark:text-white dark:opacity-60"><strong class="text-sm leading-normal text-slate-700 dark:text-white">Historial Medico:</strong> &nbsp; {patient.historialmedico} </p>
                                    <p class="mb-0 text-sm leading-normal dark:text-white dark:opacity-60"><strong class="text-sm leading-normal text-slate-700 dark:text-white">Medicamentos:</strong> &nbsp; {patient.medicamento} </p>
                                    <hr className="h-px mx-0 my-4 bg-transparent border-0 opacity-25 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent"></hr>
                                </div>
                            </div>
                            <div class="flex-auto p-3">
                                <ul class="flex flex-col pl-0 mb-0 rounded-lg">
                                    <li class="relative block px-4 py-2 pt-0 pl-0 text-sm leading-normal border-0 rounded-t-lg "><strong class="text-slate-700 dark:text-white">Identificacion:</strong> &nbsp; { ti } - {patient.identificacion}</li>
                                    <li class="relative block px-4 py-2 pl-0 text-sm leading-normal border-0 border-t-0 "><strong class="text-slate-700 dark:text-white">Fecha Nacimiento:</strong> &nbsp; {dayjs(patient.fechanacimiento).utc().format("DD/MM/YYYY")}</li>
                                    <li class="relative block px-4 py-2 pl-0 text-sm leading-normal border-0 border-t-0 "><strong class="text-slate-700 dark:text-white">Telefono:</strong> &nbsp; {patient.telefono}</li>
                                    <li class="relative block px-4 py-2 pl-0 text-sm leading-normal border-0 border-t-0 "><strong class="text-slate-700 dark:text-white">Correo:</strong> &nbsp; {patient.email}</li>
                                    <li class="relative block px-4 py-2 pl-0 text-sm leading-normal border-0 border-t-0 "><strong class="text-slate-700 dark:text-white">Direccion:</strong> &nbsp; {patient.direccion}</li>
                                    <li class="relative block px-4 py-2 pl-0 text-sm leading-normal border-0 border-t-0 "><strong class="text-slate-700 dark:text-white">Datos de Emergencia:</strong> &nbsp; {patient.emergencianombre} - {patient.emergenciatelefono}</li>
                                </ul>
                                <Link to={`/patients/${patient._id}`}
                                    className="inline-block float-right px-4 py-2 m-0 mb-0 mr-1 text-xs font-bold leading-normal text-center text-white align-middle transition-all ease-in bg-blue-500 hover:bg-blue-600 border-0 rounded-lg shadow-md cursor-pointer tracking-tight-rem hover:-translate-y-px active:opacity-85"
                                >Editar</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PatientProfileCard;