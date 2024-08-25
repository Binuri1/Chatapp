import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'

const Sidebar = () => {
    return (
        <div className="flex flex-col h-full"> {/* Ensure full height for the sidebar */}
            <div className="flex flex-col flex-grow h-full p-4 border-r border-slate-400">
                <SearchInput />
                <div className='px-3 divider'></div>
                {/* This container will grow and allow scrolling */}
                <div className="flex-grow overflow-y-auto custom-scrollbar">
                    <Conversations />
                </div>
                {/* Fixed logout button at the bottom */}
                <div className="mt-4">
                    <LogoutButton />
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
