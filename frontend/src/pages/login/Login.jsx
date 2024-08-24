import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin';

const Login = () => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const { loading, login } = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(userName, password)
    }


    return (
        <div>
            <div className='flex flex-col items-center justify-center mx-auto min-w-96'>
                <div className="w-full p-6 bg-gray-400 bg-opacity-0 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg">
                    <h1 className='text-3xl font-semibold text-center text-gray-300'>
                        Login
                        <span className="ml-4 text-blue-300">Talkify</span>
                    </h1>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label className='p-2 label'>
                                <span className="text-base text-white label-text">Username</span>
                            </label>
                            <input type="text" className="w-full h-10 input input-bordered" placeholder='Enter username'
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)} />
                        </div>
                        <div>
                            <label className='p-2 label'>
                                <span className="text-base text-white label-text">Password</span>
                            </label>
                            <input type="password" className="w-full h-10 input input-bordered" placeholder='Enter password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <Link to={"/signup"} className="inline-block mt-2 text-sm text-blue-300 hover:text-blue-400">

                            Don't have an account?</Link>


                        <div className='flex items-center justify-center'>
                            <button className="w-1/2 mt-4 text-black bg-blue-200 border rounded-full btn btn-sm hover:bg-blue-400"
                                disabled={loading} >
                                {loading ? <span className="loading loading-spinner"></span> : "Login"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Login
