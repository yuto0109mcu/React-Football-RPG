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
         <img 
            src={enemyImgSrc} 
            alt="enemy"
            className={
               attack ? "gururi" : ""
            }
         />
      </EnemyStyle>
   )
}

const EnemyStyle = styled.div`
   /* height: 30%; */
   width: 40%;
   display: block;
   display: ${props => props.afterTextIndex > 0 || props.phrase === props.goNextText ? "none" : "block"};
   /* transform: ${props => 
      props.attack ? "scale(0)" : "none"
   }; */
   position: absolute;
   left: 20px;
   top: 8%;

   .gururi {
      transform: ${({decisionJudge}) => decisionJudge ? "rotate(100deg)" : "rotate(45deg)"};
   }
   img {
      transition: all 1s 0s ease;
      /* height: 100%; */
      width: 100%;
   }
`

export default Enemy