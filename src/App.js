import React, { useState } from 'react'
import Main from "./components/Main"
import Opening from "./components/Opening"

const App = () => {

   const [start, setStart] = useState(true)
   const startGame = () => {
      setStart(true)
   }

   let Screen
   if (start === false) {
      Screen = () => {
         return (
            <Opening startGame={startGame} />
         )
      }
   } else if (start === true) {
      Screen = () => {
         return (
            <Main />
         )
      }
   }


   return (
      <Screen />
   )
}

export default App