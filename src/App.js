import React, { useState, useEffect } from 'react'
import { MainContext } from './context'
import Footer from './components/Footer';
import Header from './components/Header'

function App() {
  const [logoText, setLogoText] = useState('yucelSarikaya.net');
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    document.body.className = theme
  }, [theme])


  const data = {
    theme,
    setTheme,
    logoText,
    setLogoText
  }
  return (
    <MainContext.Provider value={data}>
      <Header />
      <Footer />
    </MainContext.Provider>
  );
}

export default App;
