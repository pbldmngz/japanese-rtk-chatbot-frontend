import ChatWindow from 'src/components/ChatWindow/ChatWindow';
import './GeneralLayout.scss';
import { useNavigate } from 'react-router-dom';

interface GeneralLayoutProps {
    layoutHook: GeneralLayoutState;
}

const GeneralLayout: React.FC<GeneralLayoutProps> = ({ layoutHook }) => {
    const {
        username,
        proficiency,
        rtkLevel,
        message,
        setMessage,
        messageLog,
        selectedWord,
        toggleKanjiFunction,
        handleSendMessage,
        handleEnterSendMessage,
        handleSystemMessage,
    } = layoutHook;
    const navigate = useNavigate();

    return (
        <div className="container">
            <div className="chat-area">
                <div className="messages-display">
                    <ChatWindow
                        messageLog={messageLog}
                        handleSystemMessage={handleSystemMessage}
                        userProperties={{
                            username,
                            proficiency,
                            rtkLevel
                        }} />
                </div>
                <div className="selected-word">
                    <div className="selected-word-details">
                        <div className='half'>
                            <div className='border element-word'>{selectedWord.show_kanji && selectedWord.kanji}</div>
                            <div className='border element-word'>{selectedWord.hiragana}</div>
                        </div>
                        <div className='half border meaning'>{selectedWord.meaning}</div>
                    </div>
                    <div className="superior-button-wrapper">
                        <button className='button-wrapper' onClick={toggleKanjiFunction}>Toggle Kanji</button>
                        <button className="setup-button" onClick={() => navigate('/setup')}>⚙️​</button>
                    </div>
                </div>
                <div className="message-input">
                    <input className="message-content" type="text" value={message} onChange={e => setMessage(e.target.value)} onKeyDown={handleEnterSendMessage} placeholder="Type a message" />

                    <button className="send-message" onClick={handleSendMessage}>Send</button>

                </div>
            </div>
        </div>
    );
};

export default GeneralLayout;