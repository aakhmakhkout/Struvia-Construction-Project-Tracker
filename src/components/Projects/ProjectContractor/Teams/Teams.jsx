import { useState } from "react";
import Bottom from "./Bottom";
import TeamCards from "./TeamCards";
import Top from "./Top";
import { useSelector } from "react-redux";

export default function Teams({state}) {
  const [isATMformOpen, setisATMformOpen] = useState(false)
   const teamMembersData = useSelector(state => state.teams.teamsMembers)
  return (
    <div className='fixed inset-0 bg-black/30 backdrop-blur-[2px] z-50 flex justify-center items-center'>
        <div className="bg-[#f0f5ff] w-[65%] h-[80%] CPCards p-4 border border-black/20 relative flex flex-col justify-between">
        <div>
            <Top teamsModalState = {state} AddtmState = {{isATMformOpen, setisATMformOpen}}/>
            <TeamCards AddtmState = {{setisATMformOpen}}/>
        </div>
            <Bottom data = {teamMembersData}/>
        </div>
    </div>
  )
}
