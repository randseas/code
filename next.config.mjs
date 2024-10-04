import path from "path";
import { fileURLToPath } from "url"; // ESM için doğru dosya yollarını almak
import MonacoWebpackPlugin from "monaco-editor-webpack-plugin";

// __dirname'i ESM modunda almak için aşağıdaki iki satır gerekiyor
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
  webpack: (config) => {
    // Monaco Editor için gerekli olan Webpack yapılandırmasını ekle
    config.plugins.push(
      new MonacoWebpackPlugin({
        languages: ["typescript", "javascript"], // Dil desteği
      })
    );

    config.resolve.alias = {
      ...config.resolve.alias,
      "monaco-editor": "monaco-editor/esm/vs/editor/editor.api", // ESM için Monaco alias
    };

    return config;
  },
};
export default nextConfig