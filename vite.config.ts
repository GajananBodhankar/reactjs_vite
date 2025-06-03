import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
const ReactCompilerConfig = {
  target: "19", // '17' | '18' | '19'
};
import react from "@vitejs/plugin-react";
export default defineConfig(() => {
  return {
    plugins: [
      tailwindcss(),
      react({
        babel: {
          plugins: [["babel-plugin-react-compiler", ReactCompilerConfig]],
        },
      }),
    ],
  };
});
