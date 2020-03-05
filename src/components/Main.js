import React, { useState } from 'react';
import Decision from "./Decision"
import LoveGuage from "./LoveGauge"
import Heroine from "./Heroine"
import Enemy from "./Enemy"
import {
   mainPhrases, 
   decisions, 
   goodText, 
   badText, 
   goNextText, 
   goodEndingText, 
   badEndingText, 
   normalEndingText
} from "../texts-source/texts"
import ResetCSS from "./resetCSS"
import styled from "styled-components"

import waohImg from "../img/heroine-img/waoh.PNG"
import sadImg from "../img/heroine-img/sad.PNG"
import yeahImg from "../img/heroine-img/yeah.PNG"
import hmmImg from "../img/heroine-img/hmm.PNG"

import bgImg from "../img/battle-bg.jpg"

const Main = () => {
   
   const [textIndex, setTextIndex] = useState(0)
   const [phaseIndex, setPhaseIndex] = useState(0)
   const [decisionIndex, setDecisionIndex] = useState(0)
   const [afterTextIndex, setAfterTextIndex] = useState(0)
   const [endingIndex, setEndingIndex] = useState(0)

   const [phrase, setPhrase] = useState(mainPhrases[phaseIndex][textIndex])

   const [decisionTime, setDecisionTime] = useState(false)
   const [decisionJudge, setDecidionJudge] = useState(true)
   const [battleTime, setBattleTime] = useState(true)
   const [attack, setAttack] = useState(false)

   const [love, setLove] = useState(50)

   const [imgUrl, setImgUrl] = useState(waohImg)

   let ShowBattle
   if (afterTextIndex === 2 && phaseIndex === mainPhrases.length - 1) {
      ShowBattle = () => {
         const ending = () => {
            setEndingIndex(endingIndex + 1)
            if (love > 50) {
               setPhrase(goodEndingText[endingIndex])
               setImgUrl(yeahImg)
            } else if (love === 50) {
               setPhrase(normalEndingText[endingIndex])
               setImgUrl(hmmImg)
            } else if (love < 50) {
               setPhrase(badEndingText[endingIndex])
               setImgUrl(sadImg)
            }
         }
         return (
            <>
               <Heroine imgUrl={imgUrl} />
               <p 
                  onClick={ending} 
                  className="text-box"
               >
                  {phrase}
               </p>
            </>
         )
      }
   } else if (battleTime === true) {
      ShowBattle = () => {
         const processBattle = () => {
            if (textIndex === mainPhrases[phaseIndex].length) {
               setPhrase("どう対処する？")
               setDecisionTime(true)
               setTextIndex(0)
               setImgUrl(hmmImg)
            } else {
               setTextIndex(textIndex + 1)
               setPhrase(mainPhrases[phaseIndex][textIndex])
               setImgUrl(waohImg)
            }
         }
         return(
            <>
               <Enemy 
                  phrase={phrase} 
                  goNextText={goNextText}
                  phaseIndex={phaseIndex}
                  decisionJudge={decisionJudge}
                  attack={attack}
                  afterTextIndex={afterTextIndex}
               />
               <Heroine imgUrl={imgUrl} />
               <p 
                  onClick={processBattle} 
                  className="text-box"
               >
                  {phrase}
               </p>
            </>
         )
      }
   } else if (battleTime === false) {
      let afterBattle
      const resetStates = () => {
         setPhaseIndex(phaseIndex + 1)
         setBattleTime(true)
         setTextIndex(0)
         setAfterTextIndex(0)
         setAttack(false)
      }
      if (decisionJudge === true) {
         ShowBattle = () => {
            afterBattle = () => {
               if (afterTextIndex === goodText.length) {
                  setPhrase(goNextText)
                  resetStates()
                  setImgUrl(hmmImg)
               } else {
                  setAfterTextIndex(afterTextIndex + 1)
                  setPhrase(goodText[afterTextIndex])
                  setImgUrl(yeahImg)
               }
            }
            return(
               <>
                  <Enemy 
                     phrase={phrase} 
                     goNextText={goNextText}
                     phaseIndex={phaseIndex}
                     decisionJudge={decisionJudge}
                     attack={attack}
                     afterTextIndex={afterTextIndex}
                  />
                  <Heroine imgUrl={imgUrl} />
                  <p 
                     onClick={afterBattle}
                     className="text-box" 
                  >
                     {phrase}
                  </p>
               </>
            )
         }
      } else if (decisionJudge === false) {
         ShowBattle = () => {
            afterBattle = () => {
               if (afterTextIndex === badText.length) {
                  setPhrase(goNextText)
                  resetStates()
                  setImgUrl(hmmImg)
               } else {
                  setAfterTextIndex(afterTextIndex + 1)
                  setPhrase(badText[afterTextIndex])
                  setImgUrl(sadImg)
               }
            }
            return(
               <>
                  {/* <Enemy /> */}
                  <Enemy 
                     phrase={phrase} 
                     goNextText={goNextText}
                     phaseIndex={phaseIndex}
                     decisionJudge={decisionJudge}
                     attack={attack}
                     afterTextIndex={afterTextIndex}
                  />
                  <Heroine imgUrl={imgUrl} />
                  <p 
                     onClick={afterBattle} 
                     className="text-box"
                  >
                     {phrase}
                  </p>
               </>
            )
         }
      }
   } else if (phrase === goNextText) {
      ShowBattle = () => {
         const nextPhase = () => {
            setPhrase(mainPhrases[phaseIndex][textIndex])
            setAttack(false)
            // setBattleTime(true)
         }
         return (
            <>
               <Heroine imgUrl={imgUrl} />
               <p 
                  onClick={nextPhase} 
                  className="text-box"
               >
                  {phrase}
               </p>
            </>
         )
      }
   }



   let showChoices
   if (decisionTime === true) {
      const Choice = decisions[decisionIndex].map( (x, i) => {
         const decisionMaking = () => {
            setDecisionIndex(decisionIndex + 1)
            setDecisionTime(false)
            setBattleTime(false)
            setAttack(true)
            if(x.good === true) {
               setPhrase(x.text)
               setLove(love + 5)
               setDecidionJudge(true)
            } else if (x.good === false) {
               setPhrase(x.text)
               setLove(love - 5)
               setDecidionJudge(false)
            }
         }
         return (
            <button 
               onClick={decisionMaking}
               key={i}
               className="decision-btn"
            >
               {x.text}
            </button>
         )
      })
      showChoices = (
         <div className="decision-bg">
            <div className="btn-box">
               {Choice}
            </div>
         </div>
      )
   }
   

   return (
      <Screen bgImg={bgImg}>
         <ResetCSS />
         <Decision 
            showChoices={showChoices}
         />
         <ShowBattle />
         <LoveGuage love={love} />
      </Screen>
   );
}


const Screen = styled.div`
   height: 100vh;
   max-height: 900px;
   width: 100%;
   max-width: 600px;
   margin: 0 auto;
   background-image: url(${({bgImg}) => bgImg});
   background-size: cover;
   position: relative;

   .text-box {
      background-color: blue;
      position: absolute;
      bottom: 20px; 
      width: 94%;
      height: 24%;
      padding: 20px 20px;
      left: 50%;
      transform: translateX(-50%);
      background-color: rgba(255, 255, 255, 0.705);
      border-radius: 10px;
      font-size: 1.3em;
      border: 4px solid #fff;
   }
   .decision-bg {
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      position: absolute;
      z-index: 10;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      .btn-box {
         display: flex;
         flex-direction: column;
         justify-content: space-between;
         height: 30%;
         width: 80%;
         .decision-btn {
            width: 100%;
            height: 40%;
            border: none;
            padding: 0 5px;
            margin: 0 auto;
            background-color: rgba(0, 221, 210, 0.7); 
            border: 3px solid rgb(13, 182, 224);
            border-radius: 6px;
         }
      }
   }
`

export default Main;