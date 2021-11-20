import { createTheme, ThemeProvider } from "@mui/material/styles";
import "../styles/globals.css";
const theme = createTheme({
  typography: {
    fontFamily: "Quicksand, sans-serif",
  },
  palette: {
    secondary: {
      main: "#00c853",
      contrastText: "#fff",
    },
  },
  shape: {
    borderRadius: 4,
  },
});
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
