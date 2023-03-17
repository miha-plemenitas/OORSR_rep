import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header, Footer, Main } from './Components';

function App() {
  return (
    /*      <div>
          <Oseba ime = "Janez" opis="nek opis">
              <div>
                  <em>Profile img</em>
                  <strong>hqnciqncnq</strong>
              </div>
          </Oseba>
          <Oseba ime = "Matija" opis="nek opis"></Oseba>
          <Ekipa></Ekipa>
      </div>*/

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
