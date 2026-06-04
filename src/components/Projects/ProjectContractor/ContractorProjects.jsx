import React from 'react'
import CPTabs from './CPTabs'
import CPCards from './CPCards'
import CPPagination from './CPPagination'
import RecentProjectUpdates from './RecentProjectUpdates'
import ProjectHealth from './ProjectHealth'
import CPQuickActions from './CPQuickActions'

const ContractorProjects = () => {
  return (
    <div>
        <div className='flex justify-between h-30 items-center'>
            <div>
                <h1 className='text-4xl font-bold mb-2'>Projects</h1>
                <p className='text-sm text-black/60'>View and Manage all your construction projects</p>
            </div>
            <div><button className='bg-[#e55707] text-white px-5 py-2.5 rounded-lg font-bold'> + New Project</button></div>
        </div>

        <div><CPTabs /></div>

        <div><CPCards /></div>

        <div> <CPPagination /></div>

        <div>
            <div><RecentProjectUpdates /></div>
            <div><ProjectHealth /></div>
            <div><CPQuickActions /></div>
        </div>
    </div>
  )
}

export default ContractorProjects