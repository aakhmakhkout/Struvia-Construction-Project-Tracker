import React from 'react'
import PhotoTabs from './PhotoTabs'
import PhotoCards from './PhotoCards'

const PhotosDetails = () => {
  return (
    <div>
      <div className='flex flex-col h-30 justify-center'>
        <h1 className='text-4xl font-bold'>Photos</h1>
        <p className='text-black/70'>View and manage site photos across you projects.</p>
      </div>

      <PhotoTabs />
      <PhotoCards />
    </div>
  )
}

export default PhotosDetails