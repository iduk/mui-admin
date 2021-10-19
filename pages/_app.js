import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from '../theme';
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />

        <Component {...pageProps} />
      </ThemeProvider>
  )
}

export default MyApp