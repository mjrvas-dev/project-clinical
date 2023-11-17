import { Link } from "react-router-dom"
import { useEffect } from "react";
import { useDoctors } from "../context/DoctorsContext";
import DoctorCard from "../components/DoctorCard";

function DoctorsPage() {

    const { getDoctors, doctors } = useDoctors();

    useEffect(() => {
        getDoctors();
    }, []);

    if (doctors.length === 0) return (<div alert="" className="p-4 pr-12 mb-4 text-white border border-blue-300 border-solid rounded-lg bg-gradient-to-tl from-blue-600 to-violet-600 text-center">No existen registros en el sistema.<Link to='/add-doctor'> Crear Doctor</Link></div>);

    return (
        <div className="flex flex-wrap my-3 -mx-0 items-center justify-center">
            <div className="flex items-center">
                <div className="mx-4">
                    <h5 className="mb-0 font-bold dark:text-white">Listado Doctores</h5>
                    <p className="mb-0 text-sm leading-normal">General</p>
                </div>
            </div>
            <div className="ml-auto text-right mx-4">
                <Link to={'/add-doctor'}
                    className="inline-block px-4 py-1.5 mb-0 text-xs font-bold leading-normal text-center text-white align-middle transition-all ease-in bg-green-600 border-0 rounded-lg shadow-md cursor-pointer hover:-translate-y-px hover:shadow-xs active:opacity-85 tracking-tight-rem"
                >Nuevo Doctor</Link>
            </div>
            <div className="bg-zinc-650 max-w-full w-full my-3 py-2 p-2 px-2 mx-0 mt-3 m-auto flex-0 lg:w-12/11 rounded-md">
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
                    {
                        doctors.map(doctor => (
                            <DoctorCard doctor={doctor} key={doctor._id} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default DoctorsPage