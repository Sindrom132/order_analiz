import React from 'react'
import './cardsList.css'

import Card from './card/Card'

export default function CardsList( props ) {
  return (
    <div className='cardsList'>
        {props.orders.map(order => {
            return <Card 
                order={order} 
                key={order.header}
                onClick={props.onToggle}
            />
        })}
    </div>
  )
}
