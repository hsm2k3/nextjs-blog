/** @type {import('next').NextConfig} */
const nextConfig = {
    // compiler: {
    //     styledComponents: true,
    // },

    // Disable image optimization for SVGs if needed
    // images: {
    //     dangerouslyAllowSVG: true,
    //     contentDispositionType: 'attachment',
    //     contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // },
    reactStrictMode: true,
    images: {
        domains: ['api.dicebear.com'],
    },
}

module.exports = nextConfig
