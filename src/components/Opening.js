import React, {useState} from 'react'
import openingTexts from "../texts-source/openingTexts"
import styled from "styled-components"

const Opening = ({startGame}) => {
   const [openingIndex, setOpeningIndex] = useState(0)
   const nextText = () => {
      setOpeningIndex(openingIndex + 1)
      if (openingIndex === openingTexts.length - 1) {
         startGame()
      }
   }
   return (
            <OpeningScreen onClick={nextText}>
               <p>
                  {openingTexts[openingIndex]}
               </p>
            </OpeningScreen>
   );
}

const OpeningScreen = styled.div`
   width: 100%;
   height: 100%;
   margin: 0 auto;
   display: flex;
   align-items: center;
   /* padding: 0 10px;  */
   p {
      background-color: rgba(0, 0, 0, 0.86);
      font-size: 1.3em;
      margin: 0 auto;
      width: 90%;
      height: 40%;
      padding: 20px 12px;
      color: #fff;
      line-height: 2em;
      border-radius: 6px;
   }
`


export default Opening