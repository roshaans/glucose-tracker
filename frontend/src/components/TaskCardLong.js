import React from 'react'
import "../App.css"
import "./TaskCardLong.css"
import { CheckBox } from '@material-ui/icons'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

/**
 * @param: (thumbnail, title, type, desc, url)
 * @returns: TaskCardLong
 */

function TaskCardLong({alertType, when, dateTime, roomId, bedId, message, isDone}) {

  if (!isDone) {
    return(
      <div className='flex long-card-container space-btw align-center bg-red'>
        <div className='flex'>
          <div className='bold'>{alertType}</div>
          <div className='pd-l-4 bold red'> F{roomId}B{bedId}</div>
          <div className='pd-l-8'>{message}</div>
        </div>
        <div className='flex align-center'>
          <div>{when}</div>
          <div className='pd-l-8 flex align-center'>
            {(isDone) ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
          </div>
        </div>
      </div>
    )
  } else {
    return(
      <div className='flex long-card-container space-btw align-center bg-gray'>
        <div className='flex'>
          <div className='bold'>{alertType}</div>
          <div className='pd-l-8 bold'> F{roomId}B{bedId}</div>
          <div className='pd-l-8'>{message}</div>
        </div>
        <div className='flex align-center'>
          <div>{when}</div>
          <div className='pd-l-8 flex align-center'>
            {(isDone) ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
          </div>
        </div>
      </div>
    )
  }
  
}

export default TaskCardLong