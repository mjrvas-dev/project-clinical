import { Link } from "react-router-dom";
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
    const { getPatient } = usePatients();
    const { id } = useParams();
    const navigate = useNavigate();
    const [patient, setPatient] = useState(null);

    useEffect(() => {
        async function loadPatient() {
            try {
                if (id) {
                    const fetchedPatient = await getPatient(id);
                    setPatient(fetchedPatient);
                }
            } catch (error) {
                console.error("Error al cargar el paciente:", error);
            }
        }
        loadPatient();
    }, [id]);

    if (!patient) {
        return (
            <div className="p-4 pr-12 mb-4 text-white border border-blue-300 border-solid rounded-lg bg-gradient-to-tl from-blue-600 to-violet-600 text-center">
                No se encontró el paciente en el sistema.{" "}
                <Link to='/add-patient'>Crear Paciente</Link>
            </div>
        );
    }

    return (
        <div className='flex flex-wrap my-3 -mx-0 items-center justify-center'>
            <div className="flex items-center">
                <div className="mx-4">
                    <h5 className="mb-0 font-bold dark:text-white">Perfil Paciente</h5>
                    <p className="mb-0 text-sm leading-normal">Información necesaria para darle un seguimiento.</p>
                </div>
            </div>
            <div className="ml-auto text-right mx-4">
                <Link to='/patients' className="inline-block px-4 py-1.5 mb-0 text-xs font-bold leading-normal text-center text-white align-middle transition-all ease-in bg-slate-600 border-0 rounded-lg shadow-md cursor-pointer hover:-translate-y-px hover:shadow-xs active:opacity-85 tracking-tight-rem">
                    Regresar
                </Link>
            </div>
            <div className="bg-zinc-650 max-w-full w-full my-3 py-5 p-5 px-5 mx-0 mt-3 m-auto flex-0 lg:w-12/11 rounded-md">
                <PatientProfileCard patient={patient} />
            </div>
        </div>
    );
}

export default PatientProfileFormPage;
