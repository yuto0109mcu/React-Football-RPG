import React from 'react'
import styled from "styled-components"

const LoveGuage = ({love}) => {

   // const heightStyle = {height: {love}%}

   return (
      <GuageContainer love={love} style >
         <p>♥</p>
         <div id="love-guage" ></div>
      </GuageContainer>
   )
}

   const GuageContainer = styled.div`
      width: 20px;
      height: 200px;
      border: 3px solid rgb(255, 100, 183);
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
      position: absolute;
      right: 25px;
      top: 80px;
      
      p {
         position: absolute;
         color: #fff;
         top: -90px; 
         font-size: 6em;
         color: rgb(255, 14, 183);
      }
      #love-guage {
         width: 100%;
         background-color: rgb(255, 14, 183);
         height: ${props => props.love}%;
         bottom: 0;
      }
   `

export default LoveGuage