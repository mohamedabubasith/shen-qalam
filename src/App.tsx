import { useState, useEffect } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Contact } from './components/Contact'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setDarkMode(isDark)
  }, [])

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'dark bg-[#121212]' : 'bg-white'
    }`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-radial opacity-5 animate-move-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1E88E5]/5 via-transparent to-[#1E88E5]/5 dark:from-[#1E88E5]/10 dark:to-[#1E88E5]/10 animate-pulse-slow" />
        </div>
        <Hero />
        <Features />
        <Contact />
      </main>
    </div>
  )
}

export default App
