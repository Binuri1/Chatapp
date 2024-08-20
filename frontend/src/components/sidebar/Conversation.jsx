import React from 'react'

const Conversation = () => {
    return (
        <div>
            <div className="flex items-center gap-2 p-2 py-1 rounded cursor-pointer hover:bg-sky-300">
                <div className="avatar online">
                    <div className="w-12 rounded-full">
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/002/002/257/small/beautiful-woman-avatar-character-icon-free-vector.jpg" alt="user avatar" />

                    </div>
                </div>

                <div className="flex flex-col flex-1">
                    <div className="flex justify-between gap-3">
                        <p className="font-bold text-gray-200">Teena Shanel</p>
                        <span className="text-xl">🐭</span>
                    </div>
                </div>
            </div>
            <div className="h-1 py-0 my-0 divider"></div>
        </div>
    )
}

export default Conversation
