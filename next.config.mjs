/** @type {import('next').NextConfig} */
const nextConfig = {
    output:"export",
    images:{
        unoptimized:true,
        remotePatterns:[
            {
                protocol:"https",
                hostname:"images.pexels.com"
            },
            {
                protocol:"https",
                hostname:"https://postimg.cc"
            },
        ]
    }
};

export default nextConfig;
