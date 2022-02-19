import React from 'react'
import './headerbar.css'

import DateRangeIcon from '@mui/icons-material/DateRange';

export default function top() {
  return (
    <div className='headerbar'>
      <div className="headerWrapper">
        <div className="logo">
          Epicenter Dashboard
        </div>
        <div className="timestamp">
          <span className='rangeButton'>12.04.2022</span> 
        </div>
        <div className="dateRange">
          <div className="dateRangeButtonConteiner">
            <button className='dateRangeButton'></button>
          </div>
          <span></span> 
        </div>
      </div>
    </div>
  )
}
