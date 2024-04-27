import { useRef, useEffect } from 'react';
import SystemMessage from 'src/components/SystemMessage/SystemMessage';
import "src/components/ChatMessage/ChatMessage.scss";

interface ChatMessageProps {
    message: {
        sender: string;
        content: string;
    };
    index: number;
    systemMessage?: SystemResponse;
    lastElement: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, lastElement, index, systemMessage }) => {

    const endRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (endRef.current) {
            endRef.current.scrollTop = endRef.current.scrollHeight;
        }
        if (lastElement) {
            setTimeout(() => {
                endRef.current?.scrollIntoView({ behavior: 'smooth' });
            }, 0);
        }
    }, [lastElement]);

    if (!message) {
        return null;
    }

    if (message.sender === 'User') {
        return (
            <div className="message-wrapper" ref={lastElement ? endRef : null}>
                <div key={index} className='user-message'>
                    <strong>{message.sender}: </strong>
                    <br />
                    <span>{message.content}</span>
                </div>
            </div>
        );
    }
    else if (!!systemMessage && message.sender === 'System') {
        return <div ref={lastElement ? endRef : null}>
            <SystemMessage systemMessage={systemMessage} />
        </div>;
    } else return null;
};

export default ChatMessage;