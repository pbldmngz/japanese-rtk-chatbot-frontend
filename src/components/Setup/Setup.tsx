import React from 'react';
import { useNavigate } from 'react-router-dom';
import "src/components/Setup/Setup.scss";


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
    } = layoutHook;
    const navigate = useNavigate();

    return (
        <div className="setup">
            <div className="option-row">
                <label>Username:</label>
                <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" />
            </div>
            <div className="option-row">
                <label>Proficiency level (chatbot level):</label>
                <select value={proficiency} onChange={e => setProficiency(Number(e.target.value))}>
                    <option value={0}>Normal</option>
                    <option value={1}>Hard</option>
                    <option value={2}>Native</option>
                </select>
            </div>
            <div className="option-row">
                <label>RTK Level (your current kanji #):</label>
                <input type="number" min="0" max="3000" value={rtkLevel} onChange={e => setRtkLevel(Number(e.target.value))} />
            </div>
            <div className="option-row">
                <label>Word spacing (real Japanese is 0):</label>
                <input type="number" min="0" max="20" value={wordSeparation} onChange={e => setWordSeparation(Number(e.target.value))} />
            </div>
            <div className="option-row">
                <label>Input mode (keyboard):</label>
                <select value={isHiragana.toString()} onChange={e => setIsHiragana(e.target.value === 'true')}>
                    <option value="true">Hiragana</option>
                    <option value="false">Romaji</option>
                </select>
            </div>
            <div className="button-container">
                <button className="button" onClick={() => navigate('/chat')}>Accept</button>
            </div>
        </div>
    );
}

export default Setup;
