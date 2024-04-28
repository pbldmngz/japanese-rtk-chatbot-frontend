import React, { useEffect, useState } from 'react';
import ChatMessage from "src/components/ChatMessage/ChatMessage";
import { Talk } from 'src/config/requests';
import "src/components/ChatWindow/ChatWindow.scss";


const ChatWindow: React.FC<ChatWindowProps> = ({ messageLog, handleSystemMessage, userProperties }) => {
    const { username } = userProperties;
    const [systemMessageProperties, setSystemMessageProperties] = useState<SystemResponse[]>([]);
    const [awaitingResponse, setAwaitingResponse] = useState(false);

    const onLoad = () => {
        if (messageLog.length > 0) {
            const lastMessage = messageLog[messageLog.length - 1];
            if (lastMessage.sender === 'User') {
                setAwaitingResponse(true);
                Talk(username, lastMessage.content).then(response => {
                    setAwaitingResponse(false);
                    handleSystemMessage(systemMessageProperties.length.toString());
                    setSystemMessageProperties([...systemMessageProperties, response]);
                });
            } else if (lastMessage.sender === 'System') {
                // @ts-ignore
                setSystemMessageProperties([...systemMessageProperties, null]);
            }
        }
    };

    useEffect(() => {
        onLoad();
    }, [messageLog]);

    return (
        <div className='chat-wrapper'>
            {messageLog.map((message, index) => (
                <ChatMessage key={index} message={message} index={index} systemMessage={systemMessageProperties[index - 1]} lastElement={index === messageLog.length - 1} />
            ))}
            {awaitingResponse && <ChatMessage key={"writting..."} waiting={true} />}
        </div>
    );
};

export default ChatWindow;