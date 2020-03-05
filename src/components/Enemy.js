import React from 'react'
import EnemyName from "./EnemyName"
import enemyImg from "../img/enemy-img/teki.png"
import styled from "styled-components"

const Enemy = ({phrase, goNextText, phaseIndex, decisionJudge, attack , afterTextIndex}) => {
   const enemyImgSrc = enemyImg

   return (
      <EnemyStyle
         phrase={phrase}
         goNextText={goNextText}
         decisionJudge={decisionJudge}
         attack={attack}
         afterTextIndex={afterTextIndex}
      >
         <img src={enemyImgSrc} alt="enemy"/>
         <EnemyName phaseIndex={phaseIndex} />
      </EnemyStyle>
   )
}

const EnemyStyle = styled.div`
   height: 30%;
   display: block;
   display: ${props => props.afterTextIndex > 0 || props.phrase === props.goNextText ? "none" : "block"};
   transition: 1s;
   animation: ${props => 
      props.attack ? "gururi 1.5s linear 1" : "none"
   };
   animation-fill-mode: forwards;
   position: absolute;
   left: 20px;
   bottom: 400px;
   /* animation: gururi 0.5s linear infinite; */
   @keyframes gururi { 
      0% {
         transform: rotateZ(0deg) scale(1);
      }
      100% {
         transform: rotateZ(2000deg) scale(0);
         opacity: 0;
      }
   }
   @keyframes scale {
      0% {
         transform: scale(1);
      }
      100% {
         transform: scale(0);
      }
   }

   img {
      height: 100%;
   }
`

export default Enemy