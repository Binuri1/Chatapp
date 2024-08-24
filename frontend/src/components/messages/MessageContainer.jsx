import React, { useEffect } from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { TiMessages } from "react-icons/ti"
import useConversation from "../../zustand/useConversation"

const MessageContainer = () => {

    const { selectedConversation, setSelectedConversation } = useConversation();

    useEffect(() => {

        //cleanup function(unmounts)  when after logout and then login the selected chat cleanup
        return () => setSelectedConversation(null);

    }, [setSelectedConversation]);
    return (
        <div className="md:min-w-[450px] flex flex-col ">

            {/* Header */}
            {!selectedConversation ? (<NoChatSelected />) : (
                <>
                    <div className="px-4 py-2 mb-2 bg-slate-500">
                        <span className="label-text"></span>
                        <span className="font-bold text-gray-900">{selectedConversation.fullName}</span>
                    </div>

                    {/* Messages with Scroll */}
                    {/* <div className="flex-1 overflow-y-auto">
                <Messages />
            </div> */}
                    <Messages />
                    <MessageInput />
                </>
            )}

        </div>
    );
}

export default MessageContainer

const NoChatSelected = () => {
    return (
        <div className="flex items-center justify-center w-full h-full">
            <div className="flex flex-col items-center gap-2 px-4 font-semibold text-center text-gray-200 sm:text-lg md:text-xl">
                <p>Welcome 👋 Binuri Mindula</p>
                <p>Select a chat to start messaging </p>
                <TiMessages className="text-3xl text-center md:text-6xl" />
            </div>
        </div>
    );
}
