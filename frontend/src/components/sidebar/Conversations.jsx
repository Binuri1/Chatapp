import React from 'react';
import Conversation from './Conversation';
import useGetConversations from '../../hooks/useGetConversations';
import { getRandomEmoji } from '../../utils/emojis';

const Conversations = () => {
    const { loading, conversations } = useGetConversations();

    return (
        <div className="flex flex-col h-full">
            <div className="flex-grow py-2 overflow-y-auto"> {/* Use overflow-y-auto to allow vertical scrolling */}
                {conversations.map((conversation, idx) => (
                    <Conversation
                        key={conversation._id}
                        conversation={conversation}
                        emoji={getRandomEmoji()}
                        lastIdx={idx === conversations.length - 1}
                    />
                ))}
                {loading ? (
                    <span className="mx-auto loading loading-spinner"></span>
                ) : null}
            </div>
        </div>
    );
};

export default Conversations;
