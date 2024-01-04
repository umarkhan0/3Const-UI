import { useState } from 'react'
import CenterMode from './componenets/cardsCarasol'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Counter from './componenets/counter'
import BuildingsIntro from './componenets/buildings'
import './App.css'
import buildingsImages from "./images/berner.png"
import DrawerAppBar from './componenets/header'
import Slider from './componenets/slider'
export default function App() {

  return (
    <>
      <DrawerAppBar />
      <div className=' mt-8 sm:mt-14'>
        <Slider />
      </div>
     <BuildingsIntro />
     <Counter />
<CenterMode />
    </>
  )
}


