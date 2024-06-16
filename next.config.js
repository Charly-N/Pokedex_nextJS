/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            // https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/1/regular.png
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
                port: '',
                pathname: '/Yarkis01/TyraDex/images/**',
            },
        ],
    }
};

module.exports = nextConfig;
