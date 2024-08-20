import React from 'react'
import GenderCheckBox from './GenderCheckBox'

const SignUp = () => {
    return (
        <div>
            <div className='flex flex-col items-center justify-center mx-auto min-w-96'>
                <div className="w-full p-6 bg-gray-400 bg-opacity-0 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg">
                    <h1 className='text-3xl font-semibold text-center text-gray-300'>
                        SignUp
                        <span className="ml-4 text-blue-300">Talkify</span>
                    </h1>
                    <form action="">
                        <div>
                            <label className='p-2 label'>
                                <span className="text-base text-white label-text">Full Name</span>
                            </label>
                            <input type="text" className="w-full h-10 input input-bordered" placeholder='Teena Shanel' />
                        </div>
                        <div>
                            <label className='p-2 label'>
                                <span className="text-base text-white label-text">Username</span>
                            </label>
                            <input type="text" className="w-full h-10 input input-bordered" placeholder='teena' />
                        </div>
                        <div>
                            <label className='p-2 label'>
                                <span className="text-base text-white label-text">Password</span>
                            </label>
                            <input type="password" className="w-full h-10 input input-bordered" placeholder='Enter password' />
                        </div>
                        <div>
                            <label className='p-2 label'>
                                <span className="text-base text-white label-text">Confirm Password</span>
                            </label>
                            <input type="password" className="w-full h-10 mb-2 input input-bordered" placeholder='Confirm password' />
                        </div>

                        {/*Gender checkbox here*/}
                        <GenderCheckBox />

                        <a href="#" className="inline-block mt-2 text-sm text-blue-300 hover:text-blue-400">
                            Already have an account?
                        </a>

                        <div className='flex items-center justify-center'>
                            <button className="w-1/2 mt-4 text-black bg-blue-200 border rounded-full btn btn-sm hover:bg-blue-400">Signup</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default SignUp
