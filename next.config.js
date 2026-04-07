/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {unoptimized: true},
    transpilePackages: [
        '@nextui-org/button',
        '@nextui-org/code',
        '@nextui-org/input',
        '@nextui-org/kbd',
        '@nextui-org/link',
        '@nextui-org/navbar',
        '@nextui-org/react',
        '@nextui-org/snippet',
        '@nextui-org/switch',
        '@nextui-org/system',
        '@nextui-org/theme',
    ],
}

module.exports = nextConfig
