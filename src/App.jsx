import { useState } from 'react'
import './App.css'
import LandingPage from './components/LandingPage'
import DefaultPage from './components/DefaultPage'
import ImagemCodigoEtica from './assets/pawel2.jpg'
import AboutMeImg from "./assets/Pawel-about-me.jpg"
import BehaviorImg from "./assets/Behavior.jpg"

function App() {
  return (
    <>
      <LandingPage />
      <DefaultPage Id="AboutMe" Image={AboutMeImg} BgColor="bg-slate-800" ImageStyle="h-3/6 w-auto rounded-lg" Title="Sobre mim" TitleStyle="font-serif text-4xl text-slate-100" Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vulputate ante quis leo ultrices egestas ultricies eu ex. Duis eu maximus magna. Vivamus egestas sem vitae posuere pretium. Maecenas vel dui eu mi consequat facilisis. Etiam nec elit a ante iaculis semper. Integer suscipit et dolor sed aliquam. Etiam gravida lorem nulla, sed varius nibh scelerisque vel. Integer tortor ipsum, faucibus in pulvinar at, molestie ac metus. Suspendisse imperdiet venenatis urna quis luctus. Sed quis tincidunt dui. Nam congue diam vel nulla pulvinar semper." TextOrder="order-last" TextStyle="font-serif mt-6 text-xl text-slate-100 text-wrap break-all"/>
      <DefaultPage Id="Behavior" Image={BehaviorImg} BgColor="bg-slate-800" ImageStyle="h-3/6 w-auto rounded-lg" Title="Abordagem" TitleStyle="font-serif text-4xl text-slate-100" Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vulputate ante quis leo ultrices egestas ultricies eu ex. Duis eu maximus magna. Vivamus egestas sem vitae posuere pretium. Maecenas vel dui eu mi consequat facilisis. Etiam nec elit a ante iaculis semper. Integer suscipit et dolor sed aliquam. Etiam gravida lorem nulla, sed varius nibh scelerisque vel. Integer tortor ipsum, faucibus in pulvinar at, molestie ac metus. Suspendisse imperdiet venenatis urna quis luctus. Sed quis tincidunt dui. Nam congue diam vel nulla pulvinar semper." TextOrder="order-first" TextStyle="font-serif mt-6 text-xl text-slate-100 text-wrap break-all"/>
      <DefaultPage Id="EthicalCode" Image={ImagemCodigoEtica} BgColor="bg-slate-800" ImageStyle="h-3/6 w-auto rounded-lg" Title="Código de ética" TitleStyle="font-serif text-4xl text-slate-100" Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vulputate ante quis leo ultrices egestas ultricies eu ex. Duis eu maximus magna. Vivamus egestas sem vitae posuere pretium. Maecenas vel dui eu mi consequat facilisis. Etiam nec elit a ante iaculis semper. Integer suscipit et dolor sed aliquam. Etiam gravida lorem nulla, sed varius nibh scelerisque vel. Integer tortor ipsum, faucibus in pulvinar at, molestie ac metus. Suspendisse imperdiet venenatis urna quis luctus. Sed quis tincidunt dui. Nam congue diam vel nulla pulvinar semper." TextOrder="order-last" TextStyle="font-serif mt-6 text-xl text-slate-100 text-wrap break-all"/>
    </>
  )
}

export default App
