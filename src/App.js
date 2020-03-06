import React, { useState } from 'react'
import Main from "./components/Main"
import Opening from "./components/Opening"
import Ending from "./components/Ending"
import styled from "styled-components"

const App = () => {

   const [start, setStart] = useState(false)
   const [end, setEnd] = useState(false)
   const startGame = () => {
      setStart(true)
   }
   const endGame = () => {
      setEnd(true)
   }

   let Screen
   if (end === true) {
      Screen = () => {
         return (
            <Ending/>
         )
      }
   } else if (start === false) {
      Screen = () => {
         return (
            <Opening startGame={startGame} />
         )
      }
   } else if (start === true) {
      Screen = () => {
         return (
            <Main endGame={endGame} />
         )
      }
   }


   return (
      <ScreenStyle>
         <Screen />
      </ScreenStyle>
   )
}

const ScreenStyle = styled.div`
   height: 100vh;
   max-height: 900px;
   width: 100%;
   max-width: 600px;
`

export default App