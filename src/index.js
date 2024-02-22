import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { AuthProvider } from './state/auth'

import App from './App';
import './index.css'

import { deepPurple, red } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: deepPurple[400],
    },
    secondary: {
      main: red[900],
    },
  },
});

/** Faz mais sentido user os provider no index e não no App, assim o App gerencie as Rotas e o Index gerencie as configurações de estado, um context Api */
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <App />
      </AuthProvider>  
    </ThemeProvider>    
  </React.StrictMode>,
  document.getElementById('root')
)