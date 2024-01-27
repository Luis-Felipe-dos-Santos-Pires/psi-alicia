import { useState } from 'react'
import './App.css'
import Menu from './components/Menu'

function App() {
  return (
    <div class="w-screen h-full">
      <div class="h-full w-full gap-0 columns-2">
        <div class="h-full w-full bg-yellow-300"></div>
        <Menu />
      </div>
    </div>
  )
}

export default App
