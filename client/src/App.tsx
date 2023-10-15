import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Router,Route} from "react-router-dom"
import Routes from './routes/Routes'

function App() {
  return (
    <>
      <Routes/>
    </>
  )
}

export default App
