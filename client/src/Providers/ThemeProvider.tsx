import React from 'react';
import { amber, grey, deepOrange, blue, pink } from '@mui/material/colors';
import { createTheme, ThemeProvider } from "@mui/material/styles"
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

const getDesignTokens = mode => ({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            // palette values for light mode
            primary: blue,
            divider: amber[200],
            text: {
              primary: grey[900],
              secondary: grey[800],
            },
          }
        : {
            // palette values for dark mode
            primary: {main: '#6d41a1'},
            divider: blue[700],
            background: {
              default: '#000000',
              paper: '#000000',
            },
            text: {
              primary: '#ffffff',
              secondary: grey[500],
            },
          }),
    },
  });

const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [rtlPlugin],
  });

const theme = createTheme({
    direction: "rtl",
    typography: {
        fontSize: 16
    },
    ...getDesignTokens('light'),
})

const CustomThemeProvider = ({ children }) =>
    <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme} >
            {children}
        </ThemeProvider>
    </CacheProvider>


export default CustomThemeProvider;