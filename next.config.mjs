/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
};
import withVideo from 'next-videos'

export default nextConfig;

export const withVideos = withVideo()
