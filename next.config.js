/** @type {import('next').NextConfig} */

const API_URL = process.env.API_URL;
module.exports = {
    reactStrictMode: true,
    async rewrites() {
        return [
            { source: "/main", destination: `${API_URL}/main` },
            {
                source: "/login/direct",
                destination: `${API_URL}/login/direct`,
            },
            { source: "/posts", destination: `${API_URL}/posts` },
        ];
    },
};
