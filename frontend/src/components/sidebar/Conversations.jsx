import React from 'react'
import Conversation from './Conversation'

const Conversations = () => {
    return (
        <div>
            <div className="flex flex-col py-2 overflow-auto">
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                {/* <Conversation /> */}
            </div>
        </div>
    )
}

export default Conversations
