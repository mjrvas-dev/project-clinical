import { useTasks } from "../context/TasksContext";
import { Link } from "react-router-dom";

import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc);

function TaskCard({ task }) {
    const { deleteTask } = useTasks()

    return (
        <div className="relative flex flex-col min-w-0 mt-6 break-words bg-zinc-800 border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
            <div className="flex-auto p-4">
                <div className="flex">
                    <div className="my-auto ml-2">
                        <h6 className="mb-0 dark:text-white uppercase">{task.title}</h6>
                        <p className="mb-0 text-xs leading-tight dark:text-white/60">Fecha {dayjs(task.date).utc().format("DD/MM/YYYY")}</p>
                    </div>
                </div>
                <p className="mt-4 dark:text-white/60"> {task.description}</p>
                {/* <p className="mb-0 dark:text-white/60"><b>Fecha: </b>{dayjs(task.date).utc().format("DD/MM/YYYY")}</p> */}
                <hr className="h-px mx-0 my-4 bg-transparent border-0 opacity-25 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent"></hr>
                <div className="flex">
                    <Link to={`/tasks/${task._id}`}
                        className="inline-block px-4 py-2 m-0 mb-0 mr-1 text-xs font-bold leading-normal text-center text-white align-middle transition-all ease-in bg-blue-500 hover:bg-blue-600 border-0 rounded-lg shadow-md cursor-pointer tracking-tight-rem hover:-translate-y-px active:opacity-85"
                    >Editar</Link>
                    <button
                        className="inline-block px-4 py-2 m-0 mb-0 mr-1 text-xs font-bold leading-normal text-center text-white align-middle transition-all ease-in bg-red-500 hover:bg-red-600 border-0 rounded-lg shadow-md cursor-pointer tracking-tight-rem hover:-translate-y-px active:opacity-85" onClick={() => {
                            deleteTask(task._id);
                        }}>Finalizar</button>
                    <div className="ml-auto">

                    </div>
                </div>
            </div>
        </div>
    );
}

export default TaskCard;