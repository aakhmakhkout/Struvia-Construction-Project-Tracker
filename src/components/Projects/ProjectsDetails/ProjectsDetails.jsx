import React from 'react'
import ProjectCards from './ProjectCards'
import ProjectTimeLine from './ProjectTimeLine'
import CPTeams from './CPTeams.jsx'

const ProjectsDetails = () => {
  const currentProjectData = [
    {
      id:1,
      label: "Project Name",
      data: "Skyline Villa",
    },

      {
        id: 2,
        label: "Contractor",
        data: "Kaneki Ken",
      },
      {
        id: 3,
        label: "Location",
        data: "somewhere in india",
      },

      {
        id: 4,
        label: "Status",
        data: "In Progress",
      },
      {
        id: 5,
        label: "Start Date",
        data: "12 jan 2026"
      },
      {
        id: 6,
        label: "End Date",
        data: "26 aug 2027"
      }
  ]

  return (
    <div>
      <div className='flex flex-col h-30 justify-center'>
        <h1 className='font-bold text-4xl'>Current Project</h1>
        <p className='text-sm text-black/70'>Track your Project Details and Timeline here</p>
      </div>

      <div className='flex justify-between h-96'>
        <ProjectCards data ={currentProjectData}/>
        <div className='w-[38%]'>
        <CPTeams />
        </div>
      </div>

      <div>
        <ProjectTimeLine />
      </div>
    </div>
  )
}

export default ProjectsDetails