import axios from "axios";

export default function setAxiosDefaultAccessToken(data) {
    const access_token = data.accessToken;
    axios.defaults.headers.common["Authorization"] = access_token;
}
