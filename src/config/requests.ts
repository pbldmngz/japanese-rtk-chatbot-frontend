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

export const Talk = async (username: string, user_input: string) => {
    const result = await api
        .post(`/chat/${username}`, { user_input })
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.log("post user message error", err);
            return false;
        });
    return result;
};

export const toggleKanjiDisplay = async (username: string, kanji: string) => {
    const result = await api
        .get(`/word/${username}/${kanji}`)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.log("toggle kanji display error", err);
            return false;
        });
    return result;
};

export const getUser = async (username: string) => {
    const result = await api
        .get(`/user/${username}`)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.log("get user error", err);
            return false;
        });
    return result as User;
};

export const createUser = async (username: string) => {
    const result = await api
        .post(`/user`, { username })
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.log("create user error", err);
            return false;
        });
    return result;
};

export const updateUser = async (username: string, userAtrributes: any) => {
    const result = await api
        .put(`/user/${username}`, userAtrributes)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.log("update user error", err);
            return false;
        });
    return result;
};