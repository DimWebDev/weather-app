import { createTheme } from "@mui/material/styles";

// Declare module augmentation
declare module "@mui/material/styles" {
  interface Theme {
    // Add custom properties here if any
  }
  // Allow configuration using `createTheme`
  interface ThemeOptions {
    // Add custom properties here if any
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: "#4A90E2", // This is a placeholder blue, choose the exact color using a color picker tool.
      contrastText: "#FFFFFF", // White text for good contrast on primary color.
    },
    secondary: {
      // Color similar to the sun.
      main: "#FFC107", // This is a standard yellow, adjust as needed.
    },
    error: {
      main: "#D32F2F", // Red color for errors.
    },
    warning: {
      // Color for warning messages.
      main: "#FFA000", // Amber color for warnings.
    },
    info: {
      // Color for informational messages.
      main: "#1976D2", // Blue color for information.
    },
    success: {
      // Color for success messages.
      main: "#388E3C", // Green color for successes.
    },
    background: {
      // Background colors for application.
      default: "#E0F7FA", // Light blue for the default background, simulating a clear sky.
      paper: "#FFFFFF", // White background for paper elements, like cards.
    },
    text: {
      // Text colors.
      primary: "#212121", // Dark gray for primary text, providing good readability.
      secondary: "#757575", // Lighter gray for secondary text and less emphasis.
    },
  },
  typography: {
    // Define the typography for the entire application.
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', // Common Material Design font.
  },
  components: {
    // Component-specific styles and overrides.
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8, // Example of rounded corners for buttons.
        },
      },
    },
  },
});
