import React from 'react'
import styled from "styled-components"
const Ending = () => {

   const reload = () => {
      window.location.reload();
   }

   return (
      <EndScreen>
         <button onClick={reload} >PLAY AGAIN</button>
         {/* <button>他のゲームで遊ぶ</button> */}
      </EndScreen>
   )
}

const EndScreen = styled.div`
   background-color: #000;
   width: 100%;
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   button {
      width: 70%;
      height: 50px;
      border: 3px solid #fff;
      background: none;
      color: #fff;
      font-size: 1.6em;
      font-weight: bold;
      &:hover {
         background-color: #fff;
         cursor: pointer;
         color: #000;
      }
   }
`

export default Ending