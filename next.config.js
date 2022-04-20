module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["media.discordapp.net"],
    webpackDevMiddleware: config => {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      }

      return config
    }
  },
  async redirects() {
    return [
      {
        source: "/resume",
        destination: "/files/my-resume.pdf",
        permanent: true,
      },
    ]
  },
}