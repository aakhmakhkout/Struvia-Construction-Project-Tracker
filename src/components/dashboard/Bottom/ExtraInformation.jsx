import React from 'react'
import RecentPhotos from './RecentPhotos'
import PunchListPreview from "./PunchListPreview.jsx"
import TeamonSitepre from './TeamonSitepre.jsx'

const ExtraInformation = () => {
  return (
    <div className='mt-5 flex justify-between'>
      <RecentPhotos />
      <PunchListPreview />
      <TeamonSitepre />
    </div>
  )
}

export default ExtraInformation