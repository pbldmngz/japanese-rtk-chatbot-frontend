import ChatWindow from 'src/components/ChatWindow/ChatWindow';
import './GeneralLayout.scss';
import { useGeneralLayout } from './useGeneralLayout';

const GeneralLayout: React.FC = () => {
    const {
        username,
        setUsername,
        proficiency,
        setProficiency,
        rtkLevel,
        setRtkLevel,
        message,
        setMessage,
        isHiragana, setIsHiragana,
        wordSeparation, setWordSeparation,
        messageLog,
        selectedWord,
        toggleKanjiFunction,
        handleSendMessage,
        handleEnterSendMessage,
        handleSystemMessage,
    } = useGeneralLayout();

    return (
        <div className="container">
            <div className="sidebar">
                <label>
                    Username:
                    <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" />
                </label>
                <label>
                    Proficiency level (chatbot level):
                    <select value={proficiency} onChange={e => setProficiency(Number(e.target.value))}>
                        <option value={0}>Normal</option>
                        <option value={1}>Hard</option>
                        <option value={2}>Native</option>
                    </select>
                </label>
                <label>
                    RTK Level (your current kanji #):
                    <input type="number" min="0" max="3000" value={rtkLevel} onChange={e => setRtkLevel(Number(e.target.value))} />
                </label>
                <label>
                    Word spacing (real japanese is 0):
                    <input type="number" min="0" max="20" value={wordSeparation} onChange={e => setWordSeparation(Number(e.target.value))} />
                </label>
                <label>
                    Input mode (keyboard):
                    <select value={isHiragana.toString()} onChange={e => setIsHiragana(e.target.value === 'true')}>
                        <option value="true">Hiragana</option>
                        <option value="false">Romaji</option>
                    </select>
                </label>
            </div>
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
                            <div className='border'>{selectedWord.show_kanji && selectedWord.kanji}</div>
                            <div className='border'>{selectedWord.hiragana}</div>
                        </div>
                        <div className='half border'>{selectedWord.meaning}</div>
                    </div>
                    <div className='button-wrapper'>
                        <button onClick={toggleKanjiFunction}>Toggle Kanji</button>
                    </div>
                </div>
                <div className="message-input">
                    <input type="text" value={message} onChange={e => setMessage(e.target.value)} onKeyDown={handleEnterSendMessage} placeholder="Type a message" />
                    <button onClick={handleSendMessage}>Send</button>
                </div>
            </div>
        </div>
    );
};

export default GeneralLayout;