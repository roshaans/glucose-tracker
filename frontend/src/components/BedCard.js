import React from 'react'
import "../App.css"
import "./BedCard.css"
import AddIcon from '@mui/icons-material/Add';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

/**
 * @param: (thumbnail, title, type, desc, url)
 * @returns: BedCard
 */


function BedCard({id, roomId, bedId, patientName, startTime, sensorId, sensorLeftTime, transmitterId, transmitterLeftTime}) {
  const emptyBed = [3,4,11,12,14];
  const [dropdownState, setDropdownState] = React.useState(false);

  const handleButtonClick = () => {
    setDropdownState(!dropdownState);
    console.log(dropdownState);
  };
  
  if (!emptyBed.includes(id)) {
    return (
      <>
        <div className='bed-container'>
          <div className='flex flex-end'>
            
            <MoreHorizIcon className='setting-icon' onClick={handleButtonClick}/>

            {(dropdownState) &&
              <div class="dropdown">
                <ul>
                  <li>Option 1</li>
                  <li>Option 2</li>
                  <li>Option 3</li>
                  <li>Option 4</li>
                </ul>
              </div>
            }
          </div>
          <div className='bed-texts-container'>
              <div className='flex justify-center bed-label'>Bed {bedId}</div>
              <div className='flex justify-center patient-name-label pd-t-8'>{patientName}</div>

              <div className='flex justify-center'>Since {startTime}</div>

              <div className='flex justify-center pd-t-16'>Sensor({sensorId}) expires in</div>
              <div className='flex justify-center bold'>{sensorLeftTime}</div>

              <div className='flex justify-center pd-t-8'>Transmitter({transmitterId}) expires in</div>
              <div className='flex justify-center bold'>{transmitterLeftTime}</div>
          </div>
        </div>
      </>
  )} else {
    return (
      <>
        <div className='bed-container'>

            <div className='flex justify-center bed-label pd-t-24'>
              Bed {bedId}
            </div>

            <div className='flex justify-center align-center pd-t-32 add-icon'>
              <AddIcon sx={{ fontSize: 60 }} />
            </div>

        </div>
      </>
    )
  }
}

export default BedCard