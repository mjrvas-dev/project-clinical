import { Link } from "react-router-dom"
import { useEffect } from "react";
import { useTasks } from "../context/TasksContext";
import TaskCard from "../components/TaskCard";

function TasksPage() {

    const { getTasks, tasks } = useTasks();

    useEffect(() => {
        getTasks();
    }, []);

    if (tasks.length === 0) return (<div alert="" class="p-4 pr-12 mb-4 text-white border border-blue-300 border-solid rounded-lg bg-gradient-to-tl from-blue-600 to-violet-600 text-center">No existen registros en el sistema.<Link to='/add-task'> Crear Tarea</Link></div>);

    return (
        <div className="flex flex-wrap my-3 -mx-0 items-center justify-center">
            <div class="flex items-center">
                <div class="mx-4">
                    <h5 className="mb-0 font-bold dark:text-white">Listado Notas</h5>
                    <p className="mb-0 text-sm leading-normal">General</p>
                </div>
            </div>
            <div class="ml-auto text-right mx-4">
                <Link to={'/add-task'}
                    className="inline-block px-4 py-1.5 mb-0 text-xs font-bold leading-normal text-center text-white align-middle transition-all ease-in bg-green-600 border-0 rounded-lg shadow-md cursor-pointer hover:-translate-y-px hover:shadow-xs active:opacity-85 tracking-tight-rem"
                >Nueva Nota</Link>
            </div>
            <div className="bg-zinc-650 max-w-full w-full my-3 py-2 p-2 px-2 mx-0 mt-3 m-auto flex-0 lg:w-12/11 rounded-md">
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
                    {
                        tasks.map(task => (
                            <TaskCard task={task} key={task._id} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default TasksPage