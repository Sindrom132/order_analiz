import React from 'react'
import './oredersBar.css'
import CardsList from './cardList/CardsList'

export default function OrdersBar() {
  
let data = [
  {header: 'Всего заказов', count: "54", summ: "11 458 645.00"},
  {header: 'Дилеры', count: "21", summ: "3 325 412.00"},
  {header: 'Оптовики', count: "4", summ: "1 254 758.00"},
  {header: 'Розница', count: "18", summ: "3 256 412.00"},
]

function onToogle() {
  console.log ( this )
}

  return (
    <div>
      <div className="ordersConteiner">
        <CardsList orders={data} onToogle={onToogle}/>
      </div>
    </div>
  )
}
