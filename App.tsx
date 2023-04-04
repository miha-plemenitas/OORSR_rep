import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header, Footer, Main } from './Components';

function App() {
    return (
        <>
            <Header teamName="Chelsea FC" />
            <Main />
            <Footer />
        </>
    );
}

export default App;
