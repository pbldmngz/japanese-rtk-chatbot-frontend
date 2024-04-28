interface TableItem {
    contains_known_kanji: boolean;
    hiragana: string;
    index: number;
    kanji: string;
    meaning: string;
}

interface SystemResponse {
    hiragana: string;
    known_rtk_kanji: string[];
    non_kanji_characters: SeparateElements[];
    original: string;
    table: TableItem[];
}

type SeparateElements = {
    contains_known_kanji: boolean;
    content: string | number;
    hiragana: string;
    is_word: boolean;
    kanji: string;
    meaning: string;
    show_kanji: boolean;
    known_kanji: string[];
    unknown_kanji: string[];
    known_rtk_kanji: string[];
    contains_no_kanji: boolean;
};

type Message = {
    sender: string;
    content: string;
};

type ChatWindowProps = {
    messageLog: Message[];
    handleSystemMessage: (message: string) => void;
    userProperties: UserProperties;
};

type UserProperties = {
    username: string;
    proficiency: number;
    rtkLevel: number;
};

interface GeneralLayoutState {
    username: string;
    setUsername: React.Dispatch<React.SetStateAction<string>>;
    proficiency: number;
    setProficiency: React.Dispatch<React.SetStateAction<number>>;
    rtkLevel: number;
    setRtkLevel: React.Dispatch<React.SetStateAction<number>>;
    message: string;
    setMessage: React.Dispatch<React.SetStateAction<string>>;
    setMessageLog: React.Dispatch<React.SetStateAction<Message[]>>;
    setSelectedWord: React.Dispatch<React.SetStateAction<SeparateElements>>;
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

interface User {
    difficulty_level: number;
    gpt_model: string;
    input_mode: boolean;
    known_kanjis: string[];
    message_log: Message[];
    rtk_level: number;
    username: string;
    word_spacing: number;
}