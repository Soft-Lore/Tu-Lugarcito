import React from 'react';
import reactDom from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import './sass/components/index.scss'
const root = document.getElementById('root');

const theme = createTheme({
    palette: {
        primary: {
            main: "#e57373"
        },
        secondary: {
            main: "#d32f2f"
        }
    }
})

reactDom.render(<ThemeProvider theme={theme}>
    <App />
</ThemeProvider>
    , root);
reportWebVitals();
