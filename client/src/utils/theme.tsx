// src/utils/theme.tsx
import { createTheme } from "@mui/material/styles";

/* ----------------------------------------------------------------
 *  Type augmentation (unchanged – kept for completeness)
 * ---------------------------------------------------------------- */
declare module "@mui/material/styles" {
  interface Theme { primaryGradient: string }
  interface ThemeOptions { primaryGradient?: string }
}

/* ----------------------------------------------------------------
 *  Base theme
 * ---------------------------------------------------------------- */
export const theme = createTheme({
  palette: {
    primary:   { main: "#1565c0", contrastText: "#ffffff" },
    secondary: { main: "#ffc107" },
    error:     { main: "#d32f2f" },
    warning:   { main: "#ffa000" },
    info:      { main: "#1976d2" },
    success:   { main: "#388e3c" },
    background: {
      default: "#eef4fb",  // pale blue fallback if gradient fails
      paper:   "#ffffff"
    },
    text: {
      primary:   "#2e2e2e",
      secondary: "#757575"
    }
  },

  typography: {
    fontFamily:
      '"Inter","Nunito Sans","Roboto","Helvetica","Arial",sans-serif',
    fontWeightLight:   300,
    fontWeightRegular: 400,
    fontWeightBold:    600,
    h4: { fontWeight: 600, letterSpacing: -0.25 },
    subtitle1: { fontWeight: 400 }
  },

  shape: { borderRadius: 12 },

  shadows: [
    "none",
    "0 1px 3px rgba(0,0,0,.12)",
    "0 4px 12px rgba(0,0,0,.08)",
    ...Array(22).fill("none")
  ] as any,

  transitions: {
    easing: {
      easeInOut: "cubic-bezier(.2,.8,.2,1)",
      easeIn:    "cubic-bezier(.4,0,1,1)",
      easeOut:   "cubic-bezier(0,0,0.2,1)",
      sharp:     "cubic-bezier(.4,0,.6,1)"
    }
  },

  components: {
    /* Soft, rounded cards */
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "0 1px 3px rgba(0,0,0,.12)",
          borderRadius: 12
        }
      }
    },

    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
          padding: "10px 24px",
          borderRadius: 12
        }
      }
    },

    /* ------------------------------------------------------------
       Global background via CssBaseline
       ------------------------------------------------------------ */
    MuiCssBaseline: {
      styleOverrides: {
        "html, body, #root": {
          minHeight: "100%",
          /* Dual-stop gradient + subtle noise PNG for depth */
          background:
            `linear-gradient(180deg,#f4f8fc 0%, #e1ecf9 60%) center/cover,
             url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQIW2P8//8/AwAI/AL+Z8MRJAAAAABJRU5ErkJggg==") repeat`,
        }
      }
    }
  }
});

/* Helper for other components that want the same gradient */
theme.primaryGradient = "linear-gradient(135deg,#2196f3 0%,#1565c0 100%)";

export default theme;
