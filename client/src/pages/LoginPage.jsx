import { useForm } from "react-hook-form"
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function LoginPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signin, errors: signinErrors, isAuthenticated } = useAuth();
    const navigate = useNavigate();

    const onSubmit = handleSubmit(data => {
        signin(data);
    });

    useEffect(() => {
        if (isAuthenticated) navigate('/calendar');
    }, [isAuthenticated])

    return (
        <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
            <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
                {
                    signinErrors.map((error, i) => (
                        <div className='bg-red-500 p-2 text-white text-center my-2' key={i}>
                            {error}
                        </div>
                    ))
                }

                <h1 className="mt-2 mb-4 text-2xl font-bold text-center">Inicia Sesion</h1>
                <div class="mb-6 text-center text-slate-500">
                    <small>Introduzca sus credenciales</small>
                </div>
                <form onSubmit={onSubmit}>
                    <input type="email" {...register("email", { required: true })}
                        className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2' placeholder='Email'
                    />
                    {errors.email && (<p className='text-red-500'>Email is required</p>)}
                    <input type="password" {...register("password", { required: true })}
                        className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2 mb-6' placeholder='Password'
                    />
                    {errors.password && (<p className='text-red-500'>Password is required</p>)}
                    <button type="submit"
                        className='w-full bg-blue-500 text-white px-4 py-2 rounded-md my-2 mb-6'
                    >Login</button>
                    {/* <p className="flex gap-x-2 justify-between">Don´t have an account <Link to="/register" className="text-sky-500">Sign up</Link></p> */}
                </form>
            </div>
        </div>
    )
}

export default LoginPage