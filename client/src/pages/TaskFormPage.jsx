import { Link } from "react-router-dom"
import { useForm } from "react-hook-form";
import { useTasks } from "../context/TasksContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);

function TaskFormPage() {
    const { register, handleSubmit, setValue } = useForm();
    const { createTask, getTask, updateTask } = useTasks();
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        async function loadTask() {
            if (params.id) {
                const task = await getTask(params.id);
                console.log(task);
                setValue('title', task.title);
                setValue('description', task.description);
                setValue('date', dayjs(task.date).utc().format('YYYY-MM-DD'));
            }
        }
        loadTask();
    }, [])

    const onSubmit = handleSubmit((data) => {
        const dataValid = {
            ...data,
            date: data.date ? dayjs.utc(data.date).format() : dayjs.utc().format(),
        }

        if (params.id) {
            updateTask(params.id, dataValid);
        } else {
            createTask(dataValid);
        }
        navigate('/tasks');
    });

    return (
        <div className='flex flex-wrap my-3 -mx-0 items-center justify-center'>
            <div className="flex items-center">
                <div className="mx-4">
                    <h5 className="mb-0 font-bold dark:text-white">Nueva Nota</h5>
                    <p className="mb-0 text-sm leading-normal">Informacion obligatoria</p>
                </div>
            </div>
            <div className="ml-auto text-right mx-4">
                <Link to={'/tasks'}
                    className="inline-block px-4 py-1.5 mb-0 text-xs font-bold leading-normal text-center text-white align-middle transition-all ease-in bg-slate-600 border-0 rounded-lg shadow-md cursor-pointer hover:-translate-y-px hover:shadow-xs active:opacity-85 tracking-tight-rem"
                >Regresar</Link>
            </div>
            <div className="bg-zinc-650 max-w-full w-full my-3 py-5 p-5 px-5 mx-0 mt-3 m-auto flex-0 lg:w-12/11 rounded-md">
                <form onSubmit={onSubmit}>
                    <div className="flex flex-wrap mt-4 -mx-3">
                        <div className="w-full max-w-full px-3 flex-0 sm:w-9/12">
                            <label className="mb-2 ml-1 text-xs font-bold text-slate-700 dark:text-white/80" htmlFor="title">Titulo de la nota</label>
                            <input type="text" placeholder="Titulo"
                                {...register("title")}
                                className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                                autoFocus
                            />
                        </div>
                        <div className="w-full max-w-full px-3 flex-0 sm:w-3/12">
                            <label className="mb-2 ml-1 text-xs font-bold text-slate-700 dark:text-white/80" htmlFor="date">Fecha</label>
                            <input type="date" {...register('date')}
                                className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                            />
                        </div>
                    </div>
                    <label className="mb-2 ml-1 text-xs font-bold text-slate-700 dark:text-white/80" htmlFor="description">Descripcion</label>
                    <textarea rows="3" placeholder="Descripcion"
                        {...register("description")}
                        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    ></textarea>
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

export default TaskFormPage