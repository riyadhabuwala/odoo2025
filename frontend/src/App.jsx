import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LandingPage from './pages/LandingPage'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import Footer from './components/Footer'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <SearchBar />
      <LandingPage />
      <Footer />
    </>
  )
}

export default App
