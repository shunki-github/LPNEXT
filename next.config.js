const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Content-Security-Policy",
    value: `
    object-src 'none';
    script-src 'nonce-{random}' 'unsafe-inline' 'unsafe-eval' 'strict-dynamic' https: http:;
    base-uri 'none';
    `,
  },
];

module.exports = {
  async Headers() {
    return securityHeaders;
  },
  i18n: {
    publicRuntimeConfig: {
      localeSubpaths:
        typeof process.env.LOCALE_SUBPATHS === "string"
          ? process.env.LOCALE_SUBPATHS
          : "none",
    },

    locales: ["ja", "en"],
    defaultLocale: "ja",
  },
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_TALK_PATH: process.env.NEXT_PUBLIC_TALK_PATH,
    NEXT_PUBLIC_BASE_LINK: process.env.NEXT_PUBLIC_BASE_LINK
  },
  images: {
    domains: ["media.graphcms.com"],
  },
  compress: false,
};
