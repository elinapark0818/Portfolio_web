import React from 'react';
import styles from './app.module.css';
import TopBtn from './components/topBtn/topBtn';
import { ThemeProvider } from 'styled-components';
import theme from "./styles/theme/theme";
import NavControl from './components/navbar/navControl';
import Pages from './components/page/pages';


export default function App() {

  return (
    <ThemeProvider theme={theme}>
      <NavControl/>
      <Pages/>
      <TopBtn/>
    </ThemeProvider>
  );
}

