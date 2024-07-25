/**
 * @type {import('next').NextConfig}
 */
const config = {
  output: "export",
  productionBrowserSourceMaps: false,
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  experimental: {
    // 禁用一些实验性功能
    optimizeCss: false,
    // 其他实验性功能设置...
  },
  webpack: config => {
    config.resolve.fallback = { fs: false };
    config.output.webassemblyModuleFilename = "static/wasm/[modulehash].wasm";
    config.experiments = { asyncWebAssembly: true };
    return config;
  },
};

module.exports = config;
