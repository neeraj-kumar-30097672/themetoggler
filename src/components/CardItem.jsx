import React from 'react'

export default function CardItem(props) {
  const item = props.item
  return (
    <div className={`card ${props.style}`}>
      <h1>{item.name}</h1>
      <h2>{item.continent}</h2>
    </div>
  )
}
