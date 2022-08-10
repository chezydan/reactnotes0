import React from 'react'

function  Header({handleTogleDarkMode}){
 
  return (    <div className='header'>
        <h1> Notes  </h1>
        <h4> cloned from chrisblakely </h4>
        <button className='save'
        onClick={
          ()=>(handleTogleDarkMode((prevDarkMode)=> !prevDarkMode )  )}    > Toggle Mode</button>
    </div>
  )
}

export default  Header 

