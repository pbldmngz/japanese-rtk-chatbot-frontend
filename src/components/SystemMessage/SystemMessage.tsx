import React from 'react';
import SystemWordDisplay from './SystemWordDisplay';
import "src/components/SystemMessage/SystemMessage.scss";
import "src/components/ChatMessage/ChatMessage.scss";

interface SystemMessageProps {
    systemMessage: SystemResponse;
}

const SystemMessage: React.FC<SystemMessageProps> = ({ systemMessage }) => {
    return (
        <div className='system-message-wrapper'>
            <div className="system-message">
                <strong>System: </strong>
                <br />
                <div className='sentence'>{systemMessage.non_kanji_characters.map((element, index) => {
                    return <SystemWordDisplay key={index} element={element} />;
                })}
                </div>
            </div>
        </div>
    );
};

export default SystemMessage;