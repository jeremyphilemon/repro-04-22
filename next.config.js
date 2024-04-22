const nextConfig = {
  transpilePackages: ["geist", "geist-test-utils"],
  experimental: {},
  modularizeImports: {
    "geist/icons": {
      transform: "geist/icons/{{ kebabCase member }}",
      skipDefaultConversion: true,
    },
    "geist/styles.css": {
      transform: "geist/styles.css",
      skipDefaultConversion: true,
    },
    "geist/core": {
      transform: "geist/core",
      skipDefaultConversion: true,
    },
    "geist/components": {
      transform: "geist/components/{{ kebabCase member }}",
      skipDefaultConversion: true,
    },
    "geist/icons": {
      transform: "geist/icons/{{ kebabCase member }}",
      skipDefaultConversion: true,
    },
    "geist/new-icons/16": {
      transform: "geist/new-icons/16/{{ kebabCase member }}",
      skipDefaultConversion: true,
    },
  },
};

module.exports = nextConfig;
