import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:4000', // 필요한 경우 API 서버 주소로 변경
        changeOrigin: true,
      },
    },
  },
  optimizeDeps: {
    include: ['vue', 'vue-router'],
  },
});
