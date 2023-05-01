import React from 'react'
import CardItem from './CardItem'

export default function CardsList(props) {
  return (
    <div className={`cardlist ${props.style}`}>
      {props.data.map(item => (
        <CardItem item={item} style={props.style} />
      ))}
    </div>  
  )
}
