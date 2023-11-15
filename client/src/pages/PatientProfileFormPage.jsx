import { Link } from "react-router-dom"
import { useForm } from "react-hook-form";
import { usePatients } from "../context/PatientsContext";
import PatientProfileCard from "../components/PatientProfileCard";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);

function PatientProfileFormPage() {
    const { register, handleSubmit, setValue } = useForm();
    const { createPatient, getPatient, updatePatient, deletePatient, patients } = usePatients();
    const [h1Text, seth1Text] = useState();
    const [h2Text, seth2Text] = useState();
    const [h3Text, seth3Text] = useState();
    const [h4Text, seth4Text] = useState();
    const [h5Text, seth5Text] = useState();
    const [h6Text, seth6Text] = useState();
    const [h7Text, seth7Text] = useState();
    const [h8Text, seth8Text] = useState();
    const [h9Text, seth9Text] = useState();
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        // async function loadPatient() {
        //     if (params.id) {
        //         const patient = await getPatient(params.id);
        //         const newText1 = patient.primernombre + ' ' + patient.segundonombre + ' ' + patient.primerapellido + ' ' + patient.segundoapellido;
        //         seth1Text(newText1);
        //         const newText2 = patient.emergencianombre + ' - ' + patient.emergenciatelefono;
        //         seth4Text(newText2);
        //         const newSpan1 = patient.historialmedico;
        //         seth2Text(newSpan1);
        //         const newSpan2 = patient.medicamento;
        //         seth3Text(newSpan2);
        //         let ti = ''; { patient.tipoidentificacion == 0 ? (ti = 'DPI') : (ti = 'PASAPORTE') }
        //         const newText3 = ti + ' - ' + patient.identificacion;
        //         seth5Text(newText3);
        //         const newText4 = dayjs(patient.fechanacimiento).utc().format('YYYY-MM-DD');
        //         seth6Text(newText4);
        //         const newText5 = patient.telefono;
        //         seth7Text(newText5);
        //         const newText6 = patient.email;
        //         seth8Text(newText6);
        //         const newText7 = patient.direccion;
        //         seth9Text(newText7);
        //     }
        // }
        // loadPatient();
    }, [])

    if (patients.length === 0) return (<div alert="" class="p-4 pr-12 mb-4 text-white border border-blue-300 border-solid rounded-lg bg-gradient-to-tl from-blue-600 to-violet-600 text-center">No existen registros en el sistema.<Link to='/add-task'> Crear Tarea</Link></div>);

    return (
        <div className='flex flex-wrap my-3 -mx-0 items-center justify-center'>
            <div class="flex items-center">
                <div class="mx-4">
                    <h5 className="mb-0 font-bold dark:text-white">Perfil Paciente</h5>
                    <p className="mb-0 text-sm leading-normal">Información necesaria para darle un seguimiento.</p>
                </div>
            </div>
            <div class="ml-auto text-right mx-4">
                <Link to={'/patients'}
                    className="inline-block px-4 py-1.5 mb-0 text-xs font-bold leading-normal text-center text-white align-middle transition-all ease-in bg-slate-600 border-0 rounded-lg shadow-md cursor-pointer hover:-translate-y-px hover:shadow-xs active:opacity-85 tracking-tight-rem"
                >Regresar</Link>
            </div>
            <div className="bg-zinc-650 max-w-full w-full my-3 py-5 p-5 px-5 mx-0 mt-3 m-auto flex-0 lg:w-12/11 rounded-md">
                {/* Seccion 1 - Informacion del paciente */}
                    {
                        patients.map(patient => (
                            <PatientProfileCard patient={patient} key={patient._id} />
                        ))
                    }
                {/* Seccion 1 - Informacion del paciente */}
                {/* Seccion 2 - Informacion del paciente */}
                {/* Seccion 2 - Informacion del paciente */}
            </div>
        </div>
    )
}

export default PatientProfileFormPage