import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { DndProvider } from 'react-dnd';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import rawTheme from './theme.json'
import { HTML5Backend } from 'react-dnd-html5-backend';

// const darkTheme = createMuiTheme({
//   palette: {
//     type: 'dark',
//   },
// });

const theme = createMuiTheme(rawTheme)

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <DndProvider backend={HTML5Backend} >
      <App />
    </DndProvider>
  </MuiThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

