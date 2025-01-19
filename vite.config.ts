import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@muc/components": path.resolve(
        __dirname,
        "src/components/components.ts"
      ),
      "@muc/constants": path.resolve(__dirname, "src/constants/constants.ts"),
      "@muc/modules": path.resolve(__dirname, "src/modules/modules.ts"),
      "@muc/screens": path.resolve(__dirname, "src/screens/screens.ts"),
      "@muc/types": path.resolve(__dirname, "src/types/types.ts"),
      "@muc/routes": path.resolve(__dirname, "src/constants/routes.ts"),
      "@muc/router": path.resolve(__dirname, "src/core/core.ts"),
      "@muc/styles": path.resolve(__dirname, "src/styles/theme.ts"),
      "@muc/layout": path.resolve(__dirname, "src/layout/layout.ts"),
      "@muc/hooks": path.resolve(__dirname, "src/hooks/hooks.ts"),
      "@muc/context": path.resolve(__dirname, "./src/context/context.ts"),
      "@muc/services": path.resolve(__dirname, "./src/services/services.ts"),
      "@muc/hoc": path.resolve(__dirname, "./src/hoc/hoc.ts"),
      "@muc/validations": path.resolve(
        __dirname,
        "src/validations/validations.ts"
      ),
      "@muc/utils": path.resolve(__dirname, "./src/utils/utils.ts"),
    },
  },
})
