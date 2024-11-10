import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// https://vitejs.dev/config/
import fs from "fs";
import dotenv from "dotenv";

// .env 파일 로드
dotenv.config();

export default defineConfig({
  server: {
    https:
      process.env.NODE_ENV === "development" // 개발 환경에서만 HTTPS 사용
        ? {
            key: fs.readFileSync(
              process.env.PEM_KEY_PATH || "localhost+2-key.pem"
            ),
            cert: fs.readFileSync(
              process.env.PEM_CERT_PATH || "localhost+2.pem"
            ),
          }
        : undefined, // 배포 환경에서는 HTTPS 설정 생략
  },
  plugins: [react()],
  resolve: {
    alias: {
      //경로 별칭(Alias)으로 경로 관리하기
      "@atoms": path.resolve(__dirname, "src/atoms"),
      "@components": path.resolve(__dirname, "src/components"),
      "@constants": path.resolve(__dirname, "src/constants"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@layout": path.resolve(__dirname, "src/layout"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@apis": path.resolve(__dirname, "src/apis"),
    },
  },
});
