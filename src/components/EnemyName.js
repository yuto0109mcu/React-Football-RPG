import React from 'react'
import styled from "styled-components"
import enemyList from "../texts-source/enemyNameText"

const EnemyName = ({phaseIndex}) => {
   const enemyName = enemyList[phaseIndex]
   return (
      // <>
      //    <p></p>
      // </>
      <EnemyNameBox>
         {enemyName}
      </EnemyNameBox>
   )
}

const EnemyNameBox = styled.p`
   display: block;
   color: #fff;
   font-size: 1em;
   text-align: center;
   background-color: rgba(0, 0, 0, 0.8);
   background-color: rgba(13, 80, 224, 0.774);
   height: 30px;
   width: 100%;
   border-radius: 5px;
`

export default EnemyName