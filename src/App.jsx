import { useState } from 'react'
import './App.css'
import LandingPage from './components/LandingPage'
import AboutMe from './components/AboutMe'
import Behavior from './components/Behavior'
import DefaultPage from './components/DefaultPage'
import ImagemCodigoEtica from './assets/pawel2.jpg'

function App() {
  return (
    <>
      <LandingPage />
      <AboutMe />
      <Behavior />
      <DefaultPage Id="EthicalCode" Image={ImagemCodigoEtica} BgColor="bg-slate-950" ImageStyle="h-3/6 w-auto rounded-lg" Title="Código de ética" TitleStyle="font-serif text-4xl text-slate-100" Text="Lorem ipsum" TextStyle="font-serif mt-6 text-xl text-slate-100 text-wrap break-all"/>
    </>
  )
}

export default App
