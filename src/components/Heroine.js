import React from 'react'
import styled from "styled-components"

const Heroine = ({imgUrl}) => {
   return (
      
         <HeroineStyle>
            <img src={imgUrl} alt="ヒロインの写真" className="heroine-img" />
         </HeroineStyle>
      
   )
}

const HeroineStyle = styled.div`
   /* height: 40%; */
   width: 100%;
   position: absolute;
   bottom: 220px;
   .heroine-img {
      /* height: 100%; */
      width: 100%;
   }
`

export default Heroine