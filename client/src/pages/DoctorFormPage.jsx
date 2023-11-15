import { Link } from "react-router-dom"
import { useForm } from "react-hook-form";
import { useDoctors } from "../context/DoctorsContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

function DoctorFormPage() {
    const { register, handleSubmit, setValue } = useForm();
    const { createDoctor, getDoctor, updateDoctor } = useDoctors();
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        async function loadDoctor() {
            if (params.id) {
                const doctor = await getDoctor(params.id);
                console.log(doctor, '-------aqui vamos');
                setValue('primernombre', doctor.primernombre);
                setValue('segundonombre', doctor.segundonombre);
                setValue('primerapellido', doctor.primerapellido);
                setValue('segundoapellido', doctor.segundoapellido);
                setValue('nocolegiado', doctor.nocolegiado);
                setValue('telefono', doctor.telefono);
                setValue('email', doctor.email);
                setValue('especialidad', doctor.especialidad);
            }
        }
        loadDoctor();
    }, [])

    const onSubmit = handleSubmit((data) => {
        if (params.id) {
            updateDoctor(params.id, data);
        } else {
            createDoctor(data);
        }
        navigate('/doctors');
    });

    return (
        <div className='flex flex-wrap my-3 -mx-0 items-center justify-center'>
            <div class="flex items-center">
                <div class="mx-4">
                    <h5 className="mb-0 font-bold dark:text-white">Nuevo Doctor</h5>
                    <p className="mb-0 text-sm leading-normal">Informacion obligatoria</p>
                </div>
            </div>
            <div class="ml-auto text-right mx-4">
                <Link to={'/doctors'}
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
                                <label className="mb-2 ml-1 text-xs font-bold text-slate-700 dark:text-white/80" htmlFor="nocolegiado">No. Colegiado</label>
                                <input type="number"
                                    {...register("nocolegiado")}
                                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-lg my-2"
                                />
                            </div>
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
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-wrap mt-4 -mx-3">
                            <div className="w-full max-w-full px-3 flex-0 sm:w-12/12">
                                <label className="mb-2 ml-1 text-xs font-bold text-slate-700 dark:text-white/80" htmlFor="especialidad">Especialidad</label>
                                <input type="text"
                                    {...register("especialidad")}
                                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-lg my-2 uppercase"
                                />
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

export default DoctorFormPage