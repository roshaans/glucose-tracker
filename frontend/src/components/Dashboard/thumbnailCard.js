import React from 'react'
import "./thumbnailCard.css"

/**
 * @param: (thumbnail, title, type, desc, url)
 * @returns: ThumbnailCard
 */


function ThumbnailCard({}) {

  // create handleChange function that will update the isDone value in the database

  return(
    <div className='thumbnail-container'>
        <iframe src="https://eu.dexcom.com/dw/image/v2/BDHK_PRD/on/demandware.static/-/Sites-Dexcom-EasternEU-Library/default/dw5c60a743/images/Learn%20about%20CGM/CGM%20vs%20BGM%20Graph%20for%20website.png?sw=606" width="100%" height="100%" frameborder="0"></iframe>
    </div>
  )
}

export default ThumbnailCard