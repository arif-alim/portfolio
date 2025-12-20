import { dirname } from 'path'
import { fileURLToPath } from 'url'
import nextMDX from '@next/mdx'
import rehypeHighlight from 'rehype-highlight'

const __dirname = dirname(fileURLToPath(import.meta.url))

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [rehypeHighlight],
  },
})

const nextConfig = {
  pageExtensions: ['jsx', 'mdx'],
  reactStrictMode: true,
  outputFileTracingRoot: __dirname,

  experimental: {
    scrollRestoration: true,
  },

  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'arifalim.com', pathname: '/**' },
      { protocol: 'https', hostname: 'www.arifalim.com', pathname: '/**' },
    ],
    formats: ['image/avif', 'image/webp'],
  },
}

export default withMDX(nextConfig)
