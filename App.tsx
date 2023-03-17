import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header, Footer, Main } from './Components';

function App() {
  return (
    <>
      <Header teamName="Chelsea FC" />
      <Main
        letoUstanovitve="1905"
        direktor="Todd Boehly"
        trener="Graham Potter"
      />
      <Footer />
    </>
  );
}

export default App;
