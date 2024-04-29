import "src/components/Setup/Setup.scss";
import useSetup from './useSetup';


interface GeneralLayoutProps {
    layoutHook: GeneralLayoutState;
}

const Setup: React.FC<GeneralLayoutProps> = ({ layoutHook }) => {
    const {
        username,
        setUsername,
        proficiency,
        setProficiency,
        rtkLevel,
        setRtkLevel,
        isHiragana, setIsHiragana,
        wordSeparation, setWordSeparation,
        setMessageLog,
        setSelectedWord
    } = layoutHook;

    const { currentUser, handleButtonClick, handleLogout } = useSetup(
        {
            username,
            setUsername,
            proficiency,
            setProficiency,
            rtkLevel,
            setRtkLevel,
            isHiragana, setIsHiragana,
            wordSeparation, setWordSeparation,
            setMessageLog,
            setSelectedWord
        }
    );

    return (
        <div className="setup">
            {!currentUser?.username && <h1 className="option-row" style={{ textAlign: "center" }} >Welcome to the chatbot!</h1>}
            {!currentUser?.username && <h2>Please log in:</h2>}
            {currentUser?.username && <h1>Settings</h1>}
            {currentUser?.username && <h2>Change your settings:</h2>}
            {!currentUser?.username && (
                <div className="option-row">
                    <label>Username:</label>
                    <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" />
                </div>
            )}
            {currentUser?.username && (
                <div className="option-row">
                    <label>Proficiency level (chatbot level):</label>
                    <select value={proficiency} onChange={e => setProficiency(Number(e.target.value))}>
                        <option value={0}>Normal</option>
                        <option value={1}>Hard</option>
                        <option value={2}>Native</option>
                    </select>
                </div>
            )}
            {currentUser?.username && (
                <div className="option-row">
                    <label>RTK Level (your current kanji #):</label>
                    <input type="number" min="0" max="3000" value={rtkLevel || ''} onChange={e => setRtkLevel(e.target.value ? Number(e.target.value) : '')} />
                </div>
            )}
            {currentUser?.username && (
                <div className="option-row">
                    <label>Word spacing (real Japanese is 0):</label>
                    <input type="number" min="0" max="20" value={wordSeparation || ''} onChange={e => setWordSeparation(e.target.value ? Number(e.target.value) : '')} />
                </div>
            )}
            {currentUser?.username && (
                <div className="option-row">
                    <label>Input mode (keyboard):</label>
                    <select value={isHiragana.toString()} onChange={e => setIsHiragana(e.target.value === 'true')}>
                        <option value="true">Hiragana</option>
                        <option value="false">Romaji</option>
                    </select>
                </div>
            )}
            <div className="button-container">
                <button className="button" onClick={handleButtonClick}>Accept</button>
                {
                    currentUser?.username && (
                        <button className="button" onClick={handleLogout}>Log Out</button>
                    )
                }
            </div>
        </div>
    );
}

export default Setup;
