import { Link } from "react-router-dom"
import { useForm } from "react-hook-form";
import { usePatients } from "../context/PatientsContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);

function PatientFormPage() {
    const { register, handleSubmit, setValue } = useForm();
    const { createPatient, getPatient, updatePatient } = usePatients();
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        async function loadPatient() {
            if (params.id) {
                const patient = await getPatient(params.id);
                setValue('titulopage', "Editar Paciente");
                setValue('primernombre', patient.primernombre);
                setValue('segundonombre', patient.segundonombre);
                setValue('primerapellido', patient.primerapellido);
                setValue('segundoapellido', patient.segundoapellido);
                setValue('genero', patient.genero);
                setValue('tipoidentificacion', patient.tipoidentificacion);
                setValue('identificacion', patient.identificacion);
                setValue('fechanacimiento', dayjs(patient.fechanacimiento).utc().format('YYYY-MM-DD'));
                setValue('telefono', patient.telefono);
                setValue('email', patient.email);
                setValue('direccion', patient.direccion);
                setValue('emergencianombre', patient.emergencianombre);
                setValue('emergenciatelefono', patient.emergenciatelefono);
                setValue('historialmedico', patient.historialmedico);
                setValue('medicamento', patient.medicamento);
            }
        }
        loadPatient();
    }, [])

    const onSubmit = handleSubmit((data) => {
        if (params.id) {
            updatePatient(params.id, data);
        } else {
            createPatient(data);
        }
        navigate('/patients');
    });

    return (
        <div className='flex flex-wrap my-3 -mx-0 items-center justify-center'>
            <div className="flex items-center">
                <div className="mx-4">
                    <h5 className="mb-0 font-bold dark:text-white">Nuevo Paciente</h5>
                    <p className="mb-0 text-sm leading-normal">Informacion obligatoria</p>
                </div>
            </div>
            <div className="ml-auto text-right mx-4">
                <Link to={'/patients'}
                    className="inline-block px-4 py-1.5 mb-0 text-xs font-bold leading-normal text-center text-white align-middle transition-all ease-in bg-slate-600 border-0 rounded-lg shadow-md cursor-pointer hover:-translate-y-px hover:shadow-xs active:opacity-85 tracking-tight-rem"
                >Regresar</Link>
            </div>
            <div className="bg-zinc-650 max-w-full w-full my-3 py-5 p-5 px-5 mx-0 mt-3 m-auto flex-0 lg:w-12/11 rounded-md">
                <form onSubmit={onSubmit}>
                    <div>
                        <div className="flex flex-wrap mt-4 -mx-3">
                            <div className="w-full max-w-full px-3 flex-0 sm:w-3/12">
                                <label className="mb-2 ml-1 text-xs font-bold text-slate-700 dark:text-white/80" htmlFor="primernombre">Primer Nombre</label>
                                <input type="text"
                                    {...register("primernombre")}
                                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-lg my-2 uppercase"
                                    autoFocus
                                />
                            </div>
                            <div className="w-full max-w-full px-3 flex-0 sm:w-3/12">
                                <label className="mb-2 ml-1 text-xs font-bold text-slate-700 dark:text-white/80" htmlFor="Segundonombre">Segundo Nombre</label>
                                <input type="text"
                                    {...register("segundonombre")}
                                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-lg my-2 uppercase"
                                />
                            </div>
                            <div className="w-full max-w-full px-3 flex-0 sm:w-3/12">
                                <label className="mb-2 ml-1 text-xs font-bold text-slate-700 dark:text-white/80" htmlFor="primerapellido">Primer Apellido</label>
                                <input type="text"
                                    {...register("primerapellido")}
                                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-lg my-2 uppercase"
                                />
                            </div>
                            <div className="w-full max-w-full px-3 flex-0 sm:w-3/12">
                                <label className="mb-2 ml-1 text-xs font-bold text-slate-700 dark:text-white/80" htmlFor="segundoapellido">Segundo Apellido</label>
                                <input type="text"
                                    {...register("segundoapellido")}
                                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-lg my-2 uppercase"
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-wrap mt-4 -mx-3">
                            <div className="w-full max-w-full px-3 flex-0 sm:w-3/12">
                                <label className="mb-2 ml-1 text-xs font-bold text-slate-700 dark:text-white/80" htmlFor="genero">Genero</label>
                                {/* <input type="text"
                                    {...register("genero")}
                                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-lg my-2 uppercase"
                                    autoFocus
                                /> */}
                                <select id="genero"
                                    {...register("genero")}
                                    className="w-full px-4 py-2 my-2 p-2.5 border text-gray-900 text-sm rounded-lg block dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white">
                                    <option selected></option>
                                    <option value="0">Femenino</option>
                                    <option value="1">Masculino</option>
                                </select>
                            </div>
                            <div className="w-full max-w-full px-3 flex-0 sm:w-3/12">
                                <label className="mb-2 ml-1 text-xs font-bold text-slate-700 dark:text-white/80" htmlFor="tipoidentificacion">Tipo Identificacion</label>
                                {/* <input type="text"
                                    {...register("tipoidentificacion")}
                                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-lg my-2 uppercase"
                                /> */}
                                <select id="tipoidentificacion"
                                    {...register("tipoidentificacion")}
                                    className="w-full px-4 py-2 my-2 p-2.5 border text-gray-900 text-sm rounded-lg block dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white">
                                    <option selected></option>
                                    <option value="0">DPI</option>
                                    <option value="1">Pasaporte</option>
                                </select>
                            </div>
                            <div className="w-full max-w-full px-3 flex-0 sm:w-3/12">
                                <label className="mb-2 ml-1 text-xs font-bold text-slate-700 dark:text-white/80" htmlFor="identificacion">No. Identificacion</label>
                                <input type="text"
                                    {...register("identificacion")}
                                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-lg my-2 uppercase"
                                />
                            </div>
                            <div className="w-full max-w-full px-3 flex-0 sm:w-3/12">
                                <label className="mb-2 ml-1 text-xs font-bold text-slate-700 dark:text-white/80" htmlFor="fechanacimiento">Fecha Nacimiento</label>
                                <input type="date"
                                    {...register("fechanacimiento")}
                                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-lg my-2 uppercase"
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-wrap mt-4 -mx-3">
                            <div className="w-full max-w-full px-3 flex-0 sm:w-3/12">
                                <label className="mb-2 ml-1 text-xs font-bold text-slate-700 dark:text-white/80" htmlFor="telefono">No. Telefono</label>
                                <input type="number"
                                    {...register("telefono")}
                                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-lg my-2"
                                />
                            </div>
                            <div className="w-full max-w-full px-3 flex-0 sm:w-3/12">
                                <label className="mb-2 ml-1 text-xs font-bold text-slate-700 dark:text-white/80" htmlFor="email">Correo Electronico</label>
                                <input type="email"
                                    {...register("email")}
                                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-lg my-2 uppercase"
                                />
                            </div>
                            <div className="w-full max-w-full px-3 flex-0 sm:w-6/12">
                                <label className="mb-2 ml-1 text-xs font-bold text-slate-700 dark:text-white/80" htmlFor="direccion">Direccion</label>
                                <input type="text"
                                    {...register("direccion")}
                                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-lg my-2 uppercase"
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-wrap mt-4 -mx-3">
                            <div className="w-full max-w-full px-3 flex-0 sm:w-3/12">
                                <label className="mb-2 ml-1 text-xs font-bold text-slate-700 dark:text-white/80" htmlFor="emergencianombre">Nombre Completo de Emergencia</label>
                                <input type="text"
                                    {...register("emergencianombre")}
                                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-lg my-2 uppercase"
                                />
                            </div>
                            <div className="w-full max-w-full px-3 flex-0 sm:w-3/12">
                                <label className="mb-2 ml-1 text-xs font-bold text-slate-700 dark:text-white/80" htmlFor="emergenciatelefono">No. Telefono de Emergencia</label>
                                <input type="number"
                                    {...register("emergenciatelefono")}
                                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-lg my-2"
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-wrap mt-4 -mx-3">
                            <div className="w-full max-w-full py-2 my-2 px-4 flex-0 sm:w-12/12">
                                <label className="mb-2 ml-1 text-xs font-bold text-slate-700 dark:text-white/80" htmlFor="historialmedico">Historial Medico</label>
                                {/* <input type="text"
                                    {...register("historialmedico")}
                                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-lg my-2 uppercase"
                                /> */}
                                <div className="relative w-full min-w-[200px]">
                                    <textarea id="historialmedico"
                                        {...register("historialmedico")}
                                        placeholder="Incluir información completa y detallada de la salud del paciente"
                                        className="peer h-full min-h-[100px] w-full resize-none border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-indigo-500 focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50 uppercase"
                                    ></textarea>
                                </div>
                            </div>
                            <div className="w-full max-w-full py-2 my-2 px-4 flex-0 sm:w-12/12">
                                <label className="mb-4 ml-1 text-xs font-bold text-slate-700 dark:text-white/80" htmlFor="medicamento">Medicamentos</label>
                                {/* <input type="text"
                                    {...register("medicamento")}
                                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-lg my-2 uppercase"
                                /> */}
                                <div className="relative w-full min-w-[200px]">
                                    <textarea id="medicamento"
                                        {...register("medicamento")}
                                        placeholder="Incluye el nombre de los medicamentos, la dosis, la frecuencia de toma y el propósito"
                                        className="peer h-full min-h-[100px] w-full resize-none border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-indigo-500 focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50 uppercase"
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-wrap mt-4 -mx-3">
                            <div className="w-full max-w-full px-3 flex-0 sm:w-12/12 text-center">
                                <button className="bg-indigo-500 mt-6 px-12 py-2 rounded-lg">
                                    Guardar
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PatientFormPage