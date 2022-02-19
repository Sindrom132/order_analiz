import React from 'react'
import './card.css'

export default function Card( {order, index} ) {
    

  return (
    <div>
        <div className="card" onClick={() =>{console.log (order.header)}}>
            
            <div className="palet palet_1">

                <div className="palet_1_header" unselectable="on">
                    <span>{ order.header }</span>
                </div>
                <div className="count major_colored" unselectable="on">
                    <span>{ order.count }</span>
                </div>

            </div>

            <div className="palet palet_2">

                <div className="summa major_colored" unselectable="on">
                    <span>{ order.summ }</span>
                </div>

            </div>

        </div>
    </div>
  )
}
