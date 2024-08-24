import React, { useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import useGetConversations from '../../hooks/useGetConversations';
import useConversation from '../../zustand/useConversation';
import toast from 'react-hot-toast';

const SearchInput = () => {

    const [search, setSearch] = useState("");
    const { setSelectedConversation } = useConversation()
    const { conversations } = useGetConversations()

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!search) return;
        if (search.length < 3) {
            return toast.error("Search term must be at least 3 characters long")
        }

        const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));

        if (conversation) {
            setSelectedConversation(conversation);
            setSearch("");
        } else toast.error("No such user Found!");

    }
    return (
        <div>
            <form onSubmit={handleSubmit} className='flex items-center gap-2 m-2'>
                <input type="text" className="rounded-lg input input-bordered" placeholder='Search....'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)} />
                <button className="text-white btn btn-circle bg-sky-300" type='submit'>
                    <IoIosSearch className='w-6 h-6 outline-none' />
                </button>
            </form>
        </div>
    )
}

export default SearchInput
