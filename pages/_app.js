import { createTheme, ThemeProvider } from "@mui/material/styles";
import "../styles/globals.css";
const theme = createTheme({
  typography: {
    fontFamily: "Quicksand, sans-serif",
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
