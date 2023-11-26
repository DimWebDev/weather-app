import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./utils/theme";
import { Header } from "./components/Header";
import { MainContent } from "./components/MainContent";

export const App = () => {
  // Dummy data for the MainContent component
  const dummyData = {
    city: "London",
    date: "today",
    condition: "Sunny",
    temperature: "19°C",
    iconCode: "01d", // This would correspond to the icon for sunny weather, for example
  };

  return (
    <ThemeProvider theme={theme}>
      <Header city={dummyData.city} date={dummyData.date} />
      <MainContent
        condition={dummyData.condition}
        temperature={dummyData.temperature}
        iconCode={dummyData.iconCode}
      />
    </ThemeProvider>
  );
};

export default App;
