import React, { useContext, useState } from 'react';
import { GeneralContext } from 'src/GeneralContext';
import "src/components/SystemMessage/SystemWordDisplay.scss";

interface SystemWordDisplayProps {
    element: SeparateElements;
}

const SystemWordDisplay: React.FC<SystemWordDisplayProps> = ({ element }) => {
    const [showKanji, setShowKanji] = useState<boolean>(element.show_kanji);

    const toggleKanji = () => {
        element.show_kanji = !element.show_kanji;
        setShowKanji(element.show_kanji);
    };

    const { selectKanji, wordSeparation, selectedWord } = useContext(GeneralContext);

    if (element.is_word) {
        return (
            <div
                key={Math.random()}
                className={`word-wrapper ${selectedWord.kanji === element.kanji ? 'word-is-selected' : ''}`}
                onClick={() => selectKanji(toggleKanji, element)}
                style={{ cursor: 'pointer', marginRight: `${Number(wordSeparation) / 10}rem` }}
            >
                {showKanji ?
                    element.kanji.split('').map((char, index) => {
                        let className = 'no-kanji-character';

                        if (element.known_kanji.includes(char)) {
                            className = 'is-known-kanji';
                        } else if (element.unknown_kanji.includes(char)) {
                            className = 'is-unknown-kanji';
                        }

                        return (
                            <div key={index} className={className}>
                                {char}
                            </div>
                        );
                    })
                    :
                    (element.contains_no_kanji ? element.kanji : element.hiragana).split('').map((char, index) =>
                        <div key={index} className='no-kanji-character'>
                            {char}
                        </div>
                    )
                }
            </div>
        );
    } else {
        return (
            <div
                className='character-wrapper'
                style={{ marginRight: `${Number(wordSeparation) / 10}rem` }}
            >
                {element.content}
            </div>
        );
    }
};

export default SystemWordDisplay;