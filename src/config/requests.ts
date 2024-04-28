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

export const Talk = async (difficulty_level: number, rtk_level: number, session_id: string, user_input: string) => {
    const result = await api
        .post(`/chat/${difficulty_level}/${rtk_level}/${session_id}`, { user_input })
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.log("post user message error", err);
            return false;
        });
    return result;
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