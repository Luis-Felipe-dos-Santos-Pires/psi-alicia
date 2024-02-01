import { useState } from 'react'
import './App.css'
import LandingPage from './components/LandingPage'
import AboutMe from './components/AboutMe'
import Behavior from './components/Behavior'
import DefaultPage from './components/DefaultPage'

function App() {
  return (
    <>
      <LandingPage />
      <AboutMe />
      <Behavior />
      <DefaultPage Id="TESTE" Image="" ImageStyle="" Title="" TitleStyle="" Text="" TextStyle=""/>
    </>
  )
}

export default App
