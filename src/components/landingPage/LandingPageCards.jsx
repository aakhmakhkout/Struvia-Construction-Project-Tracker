// import { Link } from "react-router-dom"
import {ArrowRight} from "lucide-react"

const LandingPageCards = ({data}) => {
    console.log(data)
  return (
    <div className="flex flex-col gap-4">
        <div className="text-2xl font-bold text-[#fdba03]">
            <p>Choose Your Role</p>
        </div>
    <div className='flex gap-10'>
        {
            data.map((items)=> {
                return <div key={items.id} className={`flex flex-col bg-white/20 w-80 relative rounded-xl overflow-hidden border border-[#ffa6007e] landingPageCards`}>
                    <div className=''>
                        <img src={items.img} alt="roleimgs" />
                    </div>
                    <div className='absolute inset-0 bg-black/60 backdrop-blur-[3px]'></div>

                    <div className='absolute z-10 w-full h-full flex flex-col justify-between'>
                    <div className={`p-3 text-[#fdba03]`} >{items.logo}</div>
                    <div className="flex flex-col">
                    <div className=" flex flex-col gap-3 px-2">
                        <h1 className="text-2xl font-bold">{items.role}</h1>
                        <p className="text-white/80">{items.description}</p>
                    </div>
                    <div className=" text-[#fdba03] flex justify-end p-3"><button><ArrowRight size={30} strokeWidth={1.5} /></button></div>
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