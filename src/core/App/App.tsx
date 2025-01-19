import { ThemeProvider } from "@emotion/react";
import { HomeModule } from "@muc/modules";
import { theme } from "@muc/styles";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <HomeModule />
    </ThemeProvider>
  );
};

export default App;
