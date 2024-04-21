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