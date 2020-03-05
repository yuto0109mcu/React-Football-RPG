import React from 'react'
import styled from "styled-components"
import enemyList from "../texts-source/enemyNameText"

const EnemyName = ({phaseIndex}) => {
   const enemyName = enemyList[phaseIndex]
   return (
      <>
         <p>{enemyName}</p>
      </>
   )
}

export default EnemyName