import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
// import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), 
    // tailwindcss()
  ],
  server: {
    host: "0.0.0.0", // Разрешить доступ с других устройств
    port: 5173, // Убедитесь, что порт совпадает
    allowedHosts: [
      "4z4mp91wnoiv.share.zrok.io", // Разрешить доступ через zrok
    ],
  },
});
