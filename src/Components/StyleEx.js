import React from 'react'

const StyleEx = () => {
    const mystyle ={
        backgroundColor:"yellow",
        padding:50,
        color:"black",
        Width: 50
    }
  return (
    <div>
        <h1 style={{color: "black" , backgroundColor:"red"}}>Style</h1>
        <h1 style={mystyle}>Style</h1>
    </div>
  )
}

export default StyleEx