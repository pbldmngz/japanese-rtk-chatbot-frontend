import { useContext, useState } from 'react';
import { GeneralContext } from 'src/GeneralContext';
import * as wanakana from 'wanakana';

interface GeneralLayoutState {
    username: string;
    setUsername: React.Dispatch<React.SetStateAction<string>>;
    proficiency: number;
    setProficiency: React.Dispatch<React.SetStateAction<number>>;
    rtkLevel: number;
    setRtkLevel: React.Dispatch<React.SetStateAction<number>>;
    message: string;
    setMessage: React.Dispatch<React.SetStateAction<string>>;
    isHiragana: boolean;
    setIsHiragana: React.Dispatch<React.SetStateAction<boolean>>;
    wordSeparation: number;
    setWordSeparation: React.Dispatch<React.SetStateAction<number>>;
    messageLog: Message[];
    selectedWord: SeparateElements;
    toggleKanjiFunction: () => void;
    handleSendMessage: () => void;
    handleEnterSendMessage: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    handleSystemMessage: (message: string) => void;
}

export function useGeneralLayout(): GeneralLayoutState {
    const [username, setUsername] = useState('Test User');
    const [proficiency, setProficiency] = useState(0);
    const [rtkLevel, setRtkLevel] = useState(900);
    const [isHiragana, setIsHiragana] = useState(false);

    const [message, setMessage] = useState('');
    const [messageLog, setMessageLog] = useState([] as Message[]);

    const { selectedWord, toggleKanjiFunction, wordSeparation, setWordSeparation } = useContext(GeneralContext);

    const handleEnterSendMessage = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSendMessage();
        }
    };

    const handleSendMessage = () => {
        setMessageLog([...messageLog, {
            sender: "User",
            content: isHiragana ? message : wanakana.toHiragana(message)
        }]);
        setMessage("");
    };

    const handleSystemMessage = (message: string) => {
        setMessageLog([...messageLog, {
            sender: "System",
            content: message
        }]);
    };

    return { username, setUsername, proficiency, setProficiency, rtkLevel, setRtkLevel, message, setMessage, isHiragana, setIsHiragana, wordSeparation, setWordSeparation, messageLog, selectedWord, toggleKanjiFunction, handleSendMessage, handleEnterSendMessage, handleSystemMessage};
}