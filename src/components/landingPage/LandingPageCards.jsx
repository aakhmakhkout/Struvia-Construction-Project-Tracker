import { Link } from "react-router-dom"
import {ArrowRight} from "lucide-react"
import { useDispatch } from "react-redux"
import { getRole } from "../../redux/features/authSlice"

const LandingPageCards = ({data}) => {
    const dispatch = useDispatch()
  return (
    <div className="flex flex-col gap-4 max-md:my-10">
        <div className="text-2xl font-bold text-[#fdba03]">
            <p>Choose Your Role</p>
        </div>
    <div className='flex gap-10 max-md:flex-col'>
        {
            data.map((items)=> {
                return <div key={items.id} className={`flex flex-col bg-white/20 w-80 relative rounded-xl overflow-hidden border border-[#ffa6007e] landingPageCards max-emd:w-65`}>
                    <div className=''>
                        <img src={items.img} alt="roleimgs" />
                    </div>
                    <div className='absolute inset-0 bg-black/60 backdrop-blur-[3px]'></div>

                    <div className='absolute z-10 w-full h-full flex flex-col justify-between '>
                    <div className={`p-3 text-[#fdba03] max-lg:hidden max-md:block`} >{items.logo}</div>
                    <div className="flex flex-col max-lg:justify-evenly max-lg:h-full">
                    <div className=" flex flex-col gap-3 px-2 ">
                        <h1 className="text-2xl font-bold max-xl:text-xl max-lg:text-lg">{items.role}</h1>
                        <p className="text-white/80 max-lg:text-sm">{items.description}</p>
                    </div>
                    <div className=" text-[#fdba03] flex justify-end p-3 max-lg:p-1"><Link to="/home/dashboard" onClick={()=> {
                        dispatch(getRole(items.role))
                    }}><ArrowRight size={30} strokeWidth={1.5} /></Link></div>
                    </div>
                    </div>
                </div>
            })
        }
    </div>
    </div>
  )
}

export default LandingPageCards