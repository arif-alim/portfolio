import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import rehypePrism from '@mapbox/rehype-prism'
import withImages from 'next-images'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['jsx', 'mdx'],
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    newNextLinkBehavior: false,
    scrollRestoration: false,
  },
  images: {
    domains: ['arifalim.com', 'www.arifalim.com'], // Add domains for external image fetching
    formats: ['image/avif', 'image/webp'], // Only supported formats
    disableStaticImages: true, // Disables automatic static image imports
  },
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
})

export default withImages(withMDX(nextConfig))
