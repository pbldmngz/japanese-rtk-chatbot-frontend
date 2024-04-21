import axios from "axios";
import config from "src/config/requestConfig.json";

const api = axios.create({
    baseURL: config.url,
    withCredentials: true,
    headers: {
        // "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
    },
});

api.interceptors.request.use(
    function (config) {
        config.headers.withCredentials = true;
        return config;
    },
    function (err) {
        return Promise.reject(err);
    }
);

// export const Talk = async (difficulty_level: number, rtk_level: number, session_id: string, user_input: string) => {
//     const result = await api
//         .post(`/chat/${difficulty_level}/${rtk_level}/${session_id}`, { user_input })
//         .then((res) => {
//             return res.data;
//         })
//         .catch((err) => {
//             console.log("post user message error", err);
//             return false;
//         });
//     return result;
// };

export const Talk = async (difficulty_level: number, rtk_level: number, session_id: string, user_input: string) => {
    return {
        "hiragana": "すみませんが、というぶんはすこしいみがふめいです。もうすこしぐたいてきなしつもんかれいをいただければこたえやすいです。",
        "known_rtk_kanji": [
            "明",
            "意",
            "味",
            "少",
            "具",
            "的"
        ],
        "non_kanji_characters": [
            {
                "contains_known_kanji": false,
                "content": "が、という",
                "hiragana": null,
                "is_word": false,
                "kanji": null,
                "known_kanji": [],
                "meaning": null,
                "show_kanji": false
            },
            {
                "contains_known_kanji": false,
                "content": 16,
                "hiragana": "です",
                "is_word": true,
                "kanji": "です",
                "known_kanji": [],
                "meaning": "(copula) is; am; are",
                "show_kanji": false
            },
            {
                "contains_known_kanji": false,
                "content": "は",
                "hiragana": null,
                "is_word": false,
                "kanji": null,
                "known_kanji": [],
                "meaning": null,
                "show_kanji": false
            },
            {
                "contains_known_kanji": false,
                "content": 5,
                "hiragana": "か",
                "is_word": true,
                "kanji": "か",
                "known_kanji": [],
                "meaning": "? (question particle)",
                "show_kanji": false
            },
            {
                "contains_known_kanji": true,
                "content": 6,
                "hiragana": "すこし",
                "is_word": true,
                "kanji": "少し",
                "known_kanji": [
                    "少"
                ],
                "meaning": "A little",
                "show_kanji": false
            },
            {
                "contains_known_kanji": false,
                "content": "が",
                "hiragana": null,
                "is_word": false,
                "kanji": null,
                "known_kanji": [],
                "meaning": null,
                "show_kanji": false
            },
            {
                "contains_known_kanji": true,
                "content": 7,
                "hiragana": "いみ",
                "is_word": true,
                "kanji": "意味",
                "known_kanji": [
                    "意",
                    "味"
                ],
                "meaning": "Meaning",
                "show_kanji": false
            },
            {
                "contains_known_kanji": false,
                "content": 3,
                "hiragana": "なに",
                "is_word": true,
                "kanji": "何",
                "known_kanji": [],
                "meaning": "What",
                "show_kanji": false
            },
            {
                "contains_known_kanji": false,
                "content": "。",
                "hiragana": null,
                "is_word": false,
                "kanji": null,
                "known_kanji": [],
                "meaning": null,
                "show_kanji": false
            },
            {
                "contains_known_kanji": true,
                "content": 8,
                "hiragana": "ふめい",
                "is_word": true,
                "kanji": "不明",
                "known_kanji": [
                    "明"
                ],
                "meaning": "Unclear",
                "show_kanji": false
            },
            {
                "contains_known_kanji": false,
                "content": 5,
                "hiragana": "か",
                "is_word": true,
                "kanji": "か",
                "known_kanji": [],
                "meaning": "? (question particle)",
                "show_kanji": false
            },
            {
                "contains_known_kanji": false,
                "content": 9,
                "hiragana": "もう",
                "is_word": true,
                "kanji": "もう",
                "known_kanji": [],
                "meaning": "More",
                "show_kanji": false
            },
            {
                "contains_known_kanji": false,
                "content": "な",
                "hiragana": null,
                "is_word": false,
                "kanji": null,
                "known_kanji": [],
                "meaning": null,
                "show_kanji": false
            },
            {
                "contains_known_kanji": true,
                "content": 10,
                "hiragana": "ぐたいてき",
                "is_word": true,
                "kanji": "具体的",
                "known_kanji": [
                    "具",
                    "的"
                ],
                "meaning": "Specific",
                "show_kanji": false
            },
            {
                "contains_known_kanji": false,
                "content": 4,
                "hiragana": "です",
                "is_word": true,
                "kanji": "です",
                "known_kanji": [],
                "meaning": "(copula) is; am; are",
                "show_kanji": false
            },
            {
                "contains_known_kanji": false,
                "content": 11,
                "hiragana": "しつもん",
                "is_word": true,
                "kanji": "質問",
                "known_kanji": [],
                "meaning": "Question",
                "show_kanji": false
            },
            {
                "contains_known_kanji": false,
                "content": "を",
                "hiragana": null,
                "is_word": false,
                "kanji": null,
                "known_kanji": [],
                "meaning": null,
                "show_kanji": false
            },
            {
                "contains_known_kanji": false,
                "content": 12,
                "hiragana": "れい",
                "is_word": true,
                "kanji": "例",
                "known_kanji": [],
                "meaning": "Example",
                "show_kanji": false
            },
            {
                "contains_known_kanji": false,
                "content": 13,
                "hiragana": "いただければ",
                "is_word": true,
                "kanji": "いただければ",
                "known_kanji": [],
                "meaning": "If I can receive",
                "show_kanji": false
            },
            {
                "contains_known_kanji": false,
                "content": 14,
                "hiragana": "こたえ",
                "is_word": true,
                "kanji": "答え",
                "known_kanji": [],
                "meaning": "Answer",
                "show_kanji": false
            },
            {
                "contains_known_kanji": false,
                "content": 3,
                "hiragana": "なに",
                "is_word": true,
                "kanji": "何",
                "known_kanji": [],
                "meaning": "What",
                "show_kanji": false
            },
            {
                "contains_known_kanji": false,
                "content": "。",
                "hiragana": null,
                "is_word": false,
                "kanji": null,
                "known_kanji": [],
                "meaning": null,
                "show_kanji": false
            }
        ],
        "original": "すみませんが、という文は少し意味が不明です。もう少し具体的な質問か例をいただければ答えやすいです。",
        "table": [
            {
                "contains_known_kanji": false,
                "hiragana": "すみません",
                "index": 0,
                "kanji": "すみません",
                "meaning": "Sorry; Excuse me"
            },
            {
                "contains_known_kanji": false,
                "hiragana": "あなたの",
                "index": 1,
                "kanji": "あなたの",
                "meaning": "Your"
            },
            {
                "contains_known_kanji": false,
                "hiragana": "ため",
                "index": 2,
                "kanji": "ため",
                "meaning": "For; sake"
            },
            {
                "contains_known_kanji": false,
                "hiragana": "なに",
                "index": 3,
                "kanji": "何",
                "meaning": "What"
            },
            {
                "contains_known_kanji": false,
                "hiragana": "です",
                "index": 4,
                "kanji": "です",
                "meaning": "(copula) is; am; are"
            },
            {
                "contains_known_kanji": false,
                "hiragana": "か",
                "index": 5,
                "kanji": "か",
                "meaning": "? (question particle)"
            },
            {
                "contains_known_kanji": true,
                "hiragana": "すこし",
                "index": 6,
                "kanji": "少し",
                "meaning": "A little"
            },
            {
                "contains_known_kanji": true,
                "hiragana": "いみ",
                "index": 7,
                "kanji": "意味",
                "meaning": "Meaning"
            },
            {
                "contains_known_kanji": true,
                "hiragana": "ふめい",
                "index": 8,
                "kanji": "不明",
                "meaning": "Unclear"
            },
            {
                "contains_known_kanji": false,
                "hiragana": "もう",
                "index": 9,
                "kanji": "もう",
                "meaning": "More"
            },
            {
                "contains_known_kanji": true,
                "hiragana": "ぐたいてき",
                "index": 10,
                "kanji": "具体的",
                "meaning": "Specific"
            },
            {
                "contains_known_kanji": false,
                "hiragana": "しつもん",
                "index": 11,
                "kanji": "質問",
                "meaning": "Question"
            },
            {
                "contains_known_kanji": false,
                "hiragana": "れい",
                "index": 12,
                "kanji": "例",
                "meaning": "Example"
            },
            {
                "contains_known_kanji": false,
                "hiragana": "いただければ",
                "index": 13,
                "kanji": "いただければ",
                "meaning": "If I can receive"
            },
            {
                "contains_known_kanji": false,
                "hiragana": "こたえ",
                "index": 14,
                "kanji": "答え",
                "meaning": "Answer"
            },
            {
                "contains_known_kanji": false,
                "hiragana": "やすい",
                "index": 15,
                "kanji": "やすい",
                "meaning": "Easy"
            },
            {
                "contains_known_kanji": false,
                "hiragana": "です",
                "index": 16,
                "kanji": "です",
                "meaning": "(copula) is; am; are"
            },
            {
                "contains_known_kanji": false,
                "hiragana": "ぶん",
                "index": 17,
                "kanji": "文",
                "meaning": "Sentence; writings"
            }
        ]
    } as SystemResponse;
};


export const toggleKanjiDisplay = async (kanji: string) => {
    const result = await api
        .get(`/word/${kanji}`)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.log("toggle kanji display error", err);
            return false;
        });
    return result;
};