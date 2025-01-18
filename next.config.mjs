import withImages from 'next-images'
import nextMDX from '@next/mdx'
import rehypeHighlight from 'rehype-highlight'

const nextConfig = {
  pageExtensions: ['jsx', 'mdx'],
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
  images: {
    domains: ['arifalim.com', 'www.arifalim.com'],
    formats: ['image/avif', 'image/webp'],
    disableStaticImages: true,
  },
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [rehypeHighlight],
  },
})

export default withImages(withMDX(nextConfig))
