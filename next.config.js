const nextConfig = {
  transpilePackages: ["@vercel/geist", "@vercel/geist-test-utils"],
  experimental: {},
  modularizeImports: {
    "geist/icons": {
      transform: "@vercel/geist/icons/{{ kebabCase member }}",
      skipDefaultConversion: true,
    },
    "geist/styles.css": {
      transform: "@vercel/geist/styles.css",
      skipDefaultConversion: true,
    },
    "geist/core": {
      transform: "@vercel/geist/core",
      skipDefaultConversion: true,
    },
    "geist/components": {
      transform: "@vercel/geist/components/{{ kebabCase member }}",
      skipDefaultConversion: true,
    },
    "geist/icons": {
      transform: "@vercel/geist/icons/{{ kebabCase member }}",
      skipDefaultConversion: true,
    },
    "geist/new-icons/16": {
      transform: "@vercel/geist/new-icons/16/{{ kebabCase member }}",
      skipDefaultConversion: true,
    },
    "@vercel/geist/components": {
      transform: "@vercel/geist/components/{{ kebabCase member }}",
      skipDefaultConversion: true,
    },
  },
};

module.exports = nextConfig;
