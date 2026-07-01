import Bottom from "./Bottom";
import TeamCards from "./TeamCards";
import Top from "./Top";

export default function Teams({state}) {
  return (
    <div className='fixed inset-0 bg-black/30 backdrop-blur-[2px] z-50 flex justify-center items-center'>
        <div className="bg-[#f0f5ff] w-[65%] h-[80%] CPCards p-4 border border-black/20">
            <Top teamsModalState = {state}/>
            <TeamCards />
            <Bottom />
        </div>
    </div>
  )
}
