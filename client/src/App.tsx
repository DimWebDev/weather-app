import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./utils/theme";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>{/* Your components go here */}</ThemeProvider>
  );
};

export default App;
