import React from 'react'

const Message = () => {
    return (
        <div>
            <div className="chat chat-end">
                <div className="chat-image avatar ">
                    <div className="w-10 rounded-full">
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/002/002/257/small/beautiful-woman-avatar-character-icon-free-vector.jpg" alt="avatar" className="" />
                    </div>
                </div>
                <div className="text-white bg-blue-500 chat-bubble">Hii whats up???</div>
                <div className="flex items-center gap-1 text-xs opacity-50 chat-footer">11:22</div>
            </div>

        </div>
    )
}

export default Message
