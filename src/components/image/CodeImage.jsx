import React from 'react'
import './CodeImage.css'

export const CodeImage = (props) => {
  return (
    <div className="container">
      <img src={props.url} alt="Print do código" />
    </div>
  )
}