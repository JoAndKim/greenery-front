/** @type {import('next').NextConfig} */

const API_URL = process.env.API_URL;
module.exports = {
    reactStrictMode: true,
    async rewrites() {
        return [
            {
                source: "/api/:direction*",
                destination: `${API_URL}/api/:direction*`
            }
        ];
    }
};
