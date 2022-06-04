import axios from "axios";

export const setAxiosDefaultAccessToken = (response) => {
    const access_token = response.data.accessToken;

    axios.defaults.headers.common["Authorization"] = access_token;
};
