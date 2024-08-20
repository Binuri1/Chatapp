import React from 'react'
import { IoIosSearch } from "react-icons/io";

const SearchInput = () => {
    return (
        <div>
            <form action="" className='flex items-center gap-2 m-2'>
                <input type="text" className="rounded-lg input input-bordered" placeholder='Search....' />
                <button className="text-white btn btn-circle bg-sky-300" type='submit'>
                    <IoIosSearch className='w-6 h-6 outline-none' />
                </button>
            </form>
        </div>
    )
}

export default SearchInput
