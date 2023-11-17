import { Link } from "react-router-dom"

function ProfilePage() {
    return (
        <div className="w-full mx-auto">
            <div className="w-full max-w-full px-5 mx-auto text-center shrink-0 lg:flex-0 lg:w-5/12">
                <h1 className="mt-5 mb-4 text-2xl font-bold">Perfil</h1>
            </div>
            <p className="mt-2 mb-4">Informacion General</p>
            <div className="w-full p-0 mx-auto mt-4 mb-8">
                <div className="flex flex-wrap -mx-3">
                    <div className="w-full max-w-full px-3 lg-max:mt-6 xl:w-4/12 ">
                        <div className="flex flex-col h-full min-w-0 break-words border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                            <div className="flex flex-col flex-auto min-w-0 p-5 mx-0 overflow-hidden break-words bg-zinc-800 border-0 shadow-3xl dark:bg-slate-850 rounded-2xl bg-clip-border">
                                <div className="flex-none w-auto max-w-full px-3 my-auto">
                                    <div className="h-full">
                                        <h5 className="mb-1 dark:text-white">Sayo Kravits</h5>
                                        <p className="mb-0 text-sm font-semibold leading-normal dark:text-white dark:opacity-60">Public Relations</p>
                                    </div>
                                </div>
                                <div className="flex-auto p-3">
                                    <p className="text-sm leading-normal dark:text-white dark:opacity-60">Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).</p>
                                    {/* <hr className="h-px my-6 bg-transparent bg-gradient-to-r from-transparent via-white to-transparent"> */}
                                    <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                                        <li className="relative block px-4 py-2 pt-0 pl-0 text-sm leading-normal border-0 rounded-t-lg "><strong className="text-slate-700 dark:text-white">Full Name:</strong> &nbsp; Alec M. Thompson</li>
                                        <li className="relative block px-4 py-2 pl-0 text-sm leading-normal border-0 border-t-0 "><strong className="text-slate-700 dark:text-white">Mobile:</strong> &nbsp; (44) 123 1234 123</li>
                                        <li className="relative block px-4 py-2 pl-0 text-sm leading-normal border-0 border-t-0 "><strong className="text-slate-700 dark:text-white">Email:</strong> &nbsp; alecthompson@mail.com</li>
                                        <li className="relative block px-4 py-2 pl-0 text-sm leading-normal border-0 border-t-0 "><strong className="text-slate-700 dark:text-white">Location:</strong> &nbsp; USA</li>
                                        <li className="relative block px-4 py-2 pb-0 pl-0 border-0 border-t-0 rounded-b-lg ">
                                            <strong className="text-sm leading-normal text-slate-700 dark:text-white">Social:</strong> &nbsp;
                                            <a className="inline-block py-0 pl-1 pr-2 mb-0 text-xs font-bold text-center text-blue-800 align-middle transition-all ease-in bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro bg-none" href="javascript:;">
                                                <i className="fab fa-facebook fa-lg" aria-hidden="true"></i>
                                            </a>
                                            <a className="inline-block py-0 pl-1 pr-2 mb-0 text-xs font-bold text-center align-middle transition-all ease-in bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro bg-none text-sky-600" href="javascript:;">
                                                <i className="fab fa-twitter fa-lg" aria-hidden="true"></i>
                                            </a>
                                            <a className="inline-block py-0 pl-1 pr-2 mb-0 text-xs font-bold text-center align-middle transition-all ease-in bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro bg-none text-sky-900" href="javascript:;">
                                                <i className="fab fa-instagram fa-lg" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full max-w-full px-3 lg-max:mt-6 xl:w-4/12 ">
                        <div className="flex flex-col h-full min-w-0 break-words border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                            <div className="flex flex-col flex-auto min-w-0 p-5 mx-0 overflow-hidden break-words bg-zinc-800 border-0 shadow-3xl dark:bg-slate-850 rounded-2xl bg-clip-border">
                                <div class="flex-none w-auto max-w-full px-3 my-auto">
                                    <div class="h-full">
                                        <h5 class="mb-1 dark:text-white">Sayo Kravits</h5>
                                        <p class="mb-0 text-sm font-semibold leading-normal dark:text-white dark:opacity-60">Public Relations</p>
                                    </div>
                                </div>
                                <div class="flex-auto p-3">
                                    <p class="text-sm leading-normal dark:text-white dark:opacity-60">Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).</p>
                                    {/* <hr class="h-px my-6 bg-transparent bg-gradient-to-r from-transparent via-white to-transparent"> */}
                                    <ul class="flex flex-col pl-0 mb-0 rounded-lg">
                                        <li class="relative block px-4 py-2 pt-0 pl-0 text-sm leading-normal border-0 rounded-t-lg "><strong class="text-slate-700 dark:text-white">Full Name:</strong> &nbsp; Alec M. Thompson</li>
                                        <li class="relative block px-4 py-2 pl-0 text-sm leading-normal border-0 border-t-0 "><strong class="text-slate-700 dark:text-white">Mobile:</strong> &nbsp; (44) 123 1234 123</li>
                                        <li class="relative block px-4 py-2 pl-0 text-sm leading-normal border-0 border-t-0 "><strong class="text-slate-700 dark:text-white">Email:</strong> &nbsp; alecthompson@mail.com</li>
                                        <li class="relative block px-4 py-2 pl-0 text-sm leading-normal border-0 border-t-0 "><strong class="text-slate-700 dark:text-white">Location:</strong> &nbsp; USA</li>
                                        <li class="relative block px-4 py-2 pb-0 pl-0 border-0 border-t-0 rounded-b-lg ">
                                            <strong class="text-sm leading-normal text-slate-700 dark:text-white">Social:</strong> &nbsp;
                                            <a class="inline-block py-0 pl-1 pr-2 mb-0 text-xs font-bold text-center text-blue-800 align-middle transition-all ease-in bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro bg-none" href="javascript:;">
                                                <i class="fab fa-facebook fa-lg" aria-hidden="true"></i>
                                            </a>
                                            <a class="inline-block py-0 pl-1 pr-2 mb-0 text-xs font-bold text-center align-middle transition-all ease-in bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro bg-none text-sky-600" href="javascript:;">
                                                <i class="fab fa-twitter fa-lg" aria-hidden="true"></i>
                                            </a>
                                            <a class="inline-block py-0 pl-1 pr-2 mb-0 text-xs font-bold text-center align-middle transition-all ease-in bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro bg-none text-sky-900" href="javascript:;">
                                                <i class="fab fa-instagram fa-lg" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full max-w-full px-3 lg-max:mt-6 xl:w-4/12 ">
                        <div className="flex flex-col h-full min-w-0 break-words border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                            <div className="flex flex-col flex-auto min-w-0 p-5 mx-0 overflow-hidden break-words bg-zinc-800 border-0 shadow-3xl dark:bg-slate-850 rounded-2xl bg-clip-border">
                                <div class="flex-none w-auto max-w-full px-3 my-auto">
                                    <div class="h-full">
                                        <h5 class="mb-1 dark:text-white">Admministración</h5>
                                        <p class="mb-0 text-sm font-semibold leading-normal dark:text-white dark:opacity-60">Opciones adicionales</p>
                                    </div>
                                </div>
                                <div class="flex-auto p-3">
                                    {/* <p class="text-sm leading-normal dark:text-white dark:opacity-60">Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).</p> */}
                                    {/* <hr class="h-px my-6 bg-transparent bg-gradient-to-r from-transparent via-white to-transparent"> */}
                                    <ul class="flex flex-col pl-0 mb-0 rounded-lg">
                                        <li class="relative block px-4 py-2 pt-0 pl-0 text-sm leading-normal border-0 rounded-t-lg"><strong class="text-slate-700 dark:text-white">Doctores:</strong> &nbsp; Gestion de Doctores <Link to='/doctors' className="bg-indigo-500 px-4 py-1 rounded-sm">Ir</Link></li>
                                        <li class="relative block px-4 py-2 pl-0 text-sm leading-normal border-0 rounded-t-lg"><strong class="text-slate-700 dark:text-white">Doctores:</strong> &nbsp; Gestion de Doctores <Link to='/doctors' className="bg-indigo-500 px-4 py-1 rounded-sm">Ir</Link></li>
                                        <li class="relative block px-4 py-2 pl-0 text-sm leading-normal border-0 rounded-t-lg"><strong class="text-slate-700 dark:text-white">Doctores:</strong> &nbsp; Gestion de Doctores <Link to='/doctors' className="bg-indigo-500 px-4 py-1 rounded-sm">Ir</Link></li>
                                        {/* <li class="relative block px-4 py-2 pl-0 text-sm leading-normal border-0 rounded-t-lg"><strong class="text-slate-700 dark:text-white">Usuario:</strong> &nbsp; Crear nuevo usuario <Link to='/register' className="bg-indigo-500 px-4 py-1 rounded-sm">Ir</Link></li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p class="mt-2 mb-4">Pacientes</p>
            <div className="w-full p-0 mx-auto mt-4 mb-8">
                <div className="flex flex-col flex-auto min-w-0 p-10 mx-0 overflow-hidden break-words bg-zinc-800 border-0 shadow-3xl dark:bg-slate-850 rounded-2xl bg-clip-border">
                    <div class="flex-none w-auto max-w-full px-3 my-auto">
                        <div class="h-full">
                            <h5 class="mb-1 dark:text-white">Doc. Sayo Kravits</h5>
                            <p class="mb-0 text-sm font-semibold leading-normal dark:text-white dark:opacity-60">Historial de pacientes atendidos</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage