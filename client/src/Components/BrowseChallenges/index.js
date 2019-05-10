import React from 'react'

export default function BrowseChallegnes(props) {
  return (
    <div className="row">
    
        {/* start map function here */}
        <div onClick={() => props.handleClick(props.id)} className="card">
          <div className="img-container">
            <img alt={props.name} src="https://spng.pngfly.com/20180601/elo/kisspng-check-mark-clip-art-true-sign-5b115b4133e421.2059374415278641292126.jpg" />
            <h4>{props.catgoryName}  </h4>
            
          </div>
        
        </div>
    </div>
   
  )
}
