import React, { useState } from 'react'
import GenderCheckBox from './GenderCheckBox'
import { Link } from 'react-router-dom'
import useSignUp from '../../hooks/useSignUp'

const SignUp = () => {

    const [inputs, setInputs] = useState({

        fullName: "",
        userName: "",
        password: "",
        confirmPassword: "",
        gender: ""

    })

    const { loading, signup } = useSignUp();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(inputs);
    }

    const handleCheckboxChange = (gender) => {
        setInputs({ ...inputs, gender })
    }

    return (
        <div>
            <div className='flex flex-col items-center justify-center mx-auto min-w-96'>
                <div className="w-full p-6 bg-gray-400 bg-opacity-0 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg">
                    <h1 className='text-3xl font-semibold text-center text-gray-300'>
                        SignUp
                        <span className="ml-4 text-blue-300">Talkify</span>
                    </h1>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label className='p-2 label'>
                                <span className="text-base text-white label-text">Full Name</span>
                            </label>
                            <input type="text" className="w-full h-10 input input-bordered" placeholder='Teena Shanel'
                                value={inputs.fullName}
                                onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })} />
                            {/* ...inputs ->spred the inputs       */}
                        </div>
                        <div>
                            <label className='p-2 label'>
                                <span className="text-base text-white label-text">Username</span>
                            </label>
                            <input type="text" className="w-full h-10 input input-bordered" placeholder='teena'
                                value={inputs.userName}
                                onChange={(e) => setInputs({ ...inputs, userName: e.target.value })} />
                        </div>
                        <div>
                            <label className='p-2 label'>
                                <span className="text-base text-white label-text">Password</span>
                            </label>
                            <input type="password" className="w-full h-10 input input-bordered" placeholder='Enter password'
                                value={inputs.password}
                                onChange={(e) => setInputs({ ...inputs, password: e.target.value })} />
                        </div>
                        <div>
                            <label className='p-2 label'>
                                <span className="text-base text-white label-text">Confirm Password</span>
                            </label>
                            <input type="password" className="w-full h-10 mb-2 input input-bordered" placeholder='Confirm password'
                                value={inputs.confirmPassword}
                                onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })} />
                        </div>

                        {/*Gender checkbox here*/}
                        <GenderCheckBox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />
                        <Link to={"/login"} className="inline-block mt-2 text-sm text-blue-300 hover:text-blue-400">

                            Already have an account?</Link>


                        <div className='flex items-center justify-center'>
                            <button className="w-1/2 mt-4 text-black bg-blue-200 border rounded-full btn btn-sm hover:bg-blue-400" disabled={loading}>
                                {loading ? <span className="loading loading-spinner"></span> : "SignUp"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default SignUp
