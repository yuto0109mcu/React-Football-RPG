import React from 'react'

const Opening = ({startGame}) => {
   return (
      <div>
         <button onClick={startGame} >
            GO
         </button>
      </div>
   );
}

export default Opening