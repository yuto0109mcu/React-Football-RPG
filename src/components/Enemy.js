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
         <EnemyName phaseIndex={phaseIndex} />
         <img src={enemyImgSrc} alt="enemy"/>
      </EnemyStyle>
   )
}

const EnemyStyle = styled.div`
   /* height: 30%; */
   width: 50%;
   display: block;
   display: ${props => props.afterTextIndex > 0 || props.phrase === props.goNextText ? "none" : "block"};
   transition: 1s;
   -webkit-animation: ${props => 
      props.attack ? "gururi 1.5s linear 1" : "none"
   };
   -webkit-animation-fill-mode: forwards;
   position: absolute;
   left: 20px;
   top: 120px;
   @keyframes gururi { 
      0% {
         -webkit-transform: rotateZ(0deg) scale(1);
      }
      100% {
         -webkit-transform: rotateZ(360deg) scale(1);
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
      width: 100%;
   }
`

export default Enemy