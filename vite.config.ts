import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import tsConfigPaths from "vite-tsconfig-paths";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsConfigPaths()],
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "src/assets"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@components": path.resolve(__dirname, "src/components"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@locale": path.resolve(__dirname, "src/locale"),
      "@layouts": path.resolve(__dirname, "src/layouts"),
      "@context": path.resolve(__dirname, "src/context"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@app-types": path.resolve(__dirname, "src/types"),
    },
  },
});
