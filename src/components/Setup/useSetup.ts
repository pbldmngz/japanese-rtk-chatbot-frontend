import React, { useEffect } from 'react';
import { getUser, updateUser, createUser } from 'src/config/requests';
import { useNavigate } from 'react-router-dom';

interface SetupState {
    currentUser: User;
    handleButtonClick: () => void;
    handleLogout: () => void;
}

interface SetupProps {
    username: string;
    setUsername: React.Dispatch<React.SetStateAction<string>>;
    proficiency: number;
    setProficiency: React.Dispatch<React.SetStateAction<number>>;
    rtkLevel: number;
    setRtkLevel: React.Dispatch<React.SetStateAction<number>>;
    isHiragana: boolean;
    setIsHiragana: React.Dispatch<React.SetStateAction<boolean>>;
    wordSeparation: number;
    setWordSeparation: React.Dispatch<React.SetStateAction<number>>;
    setMessageLog: React.Dispatch<React.SetStateAction<Message[]>>;
    setSelectedWord: React.Dispatch<React.SetStateAction<SeparateElements>>;
}

const useSetup = ({
    setUsername,
    username,
    setRtkLevel,
    rtkLevel,
    setWordSeparation,
    wordSeparation,
    setIsHiragana,
    isHiragana,
    setProficiency,
    proficiency,
    setMessageLog,
    setSelectedWord
}: SetupProps): SetupState => {
    const navigate = useNavigate();

    const [currentUser, setCurrentUser] = React.useState<User>({} as User);

    if (!localStorage.getItem('username') || localStorage.getItem('username') === undefined || localStorage.getItem('username') === null || localStorage.getItem('username') === "" || localStorage.getItem('username') === "undefined" || localStorage.getItem('username') === "null") {
        localStorage.clear();
    }

    const handleButtonClick = () => {
        if (!currentUser?.username) {
            if (!username) {
                return;
            }
            getUser(username).then(user => {
                if (user) {
                    setCurrentUser(user);
                    localStorage.setItem('username', user.username);
                } else {
                    createUser(username).then(user => {
                        setCurrentUser(user);
                        localStorage.setItem('username', user.username);
                    });
                }
            });
        } else {
            const changes = {
                rtk_level: rtkLevel,
                word_spacing: wordSeparation,
                input_mode: isHiragana,
                difficulty_level: proficiency
            }
            updateUser(username, changes).then(_ => {
                setCurrentUser({ ...currentUser, ...changes });
            });
            navigate('/chat');
        }
        setMessageLog([]);
        setSelectedWord({
            kanji: "Word",
            hiragana: "Hiragana",
            meaning: "Meaning",
            show_kanji: true,
        } as SeparateElements);
    };

    const handleLogout = () => {
        setCurrentUser({} as User);
        localStorage.removeItem('username');
    };

    useEffect(() => {
        if (currentUser?.username) {
            setUsername(currentUser.username);
            setProficiency(currentUser.difficulty_level);
            setRtkLevel(currentUser.rtk_level);
            setWordSeparation(currentUser.word_spacing);
            setIsHiragana(currentUser.input_mode);
        }
    }, [currentUser]);

    useEffect(() => {
        const username = localStorage.getItem('username') || '';
        if (!!username) {
            getUser(username).then(user => {
                if (user) {
                    setCurrentUser(user);
                }
            });
        }
    }, []);

    return { currentUser, handleButtonClick, handleLogout };
};

export default useSetup;