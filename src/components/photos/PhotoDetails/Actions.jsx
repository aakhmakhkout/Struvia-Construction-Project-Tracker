import { ChevronRight, SquareArrowOutUpRight, BatteryMedium, Delete, SquarePen,  Trash2} from "lucide-react"
import { useDispatch } from "react-redux"
import { deleteAlbum } from "../../../redux/features/photoSlice"
import supabase from "../../../lib/supabase"



const Actions = ({state, albData}) => {
    console.log(albData)
  const {setisOptionsID} = state
  const dispatch = useDispatch()

  const handleDeleteAlbum = async ()=> {
    const {data, error} = await supabase.storage.from("struvia-media").remove([albData.coverImgObj.path])
    if(error) {
        return
    }
    console.log(data, error)
    dispatch(deleteAlbum(albData.albumid))
    setisOptionsID(null)
  }
 


  return (
    <div className='w-50 bg-[#e7f0fa] text-black absolute right-4 bottom-11 rounded-lg flex z-20 CPCards border border-black/20'>
        <div className='p-2 flex flex-col justify-start items-start w-full'>
         <button className="flex justify-between items-center w-full cursor-pointer hover:bg-black/10 transition-all ease-in rounded-lg p-1">
            <div className="flex gap-3 items-center">
            <div><SquareArrowOutUpRight size={15} strokeWidth={1.5} /></div>
            <h1>Open</h1>
            </div>
            <div><ChevronRight size={15} strokeWidth={1.25} /></div>
          </button>


          <button className="flex justify-between items-center w-full cursor-pointer hover:bg-black/10 transition-all ease-in rounded-lg p-1">
            <div className="flex gap-3 items-center">
            <div><SquarePen size={15} strokeWidth={1.25} /></div>
            <h1>Edit</h1>
            </div>
          <div><ChevronRight size={15} strokeWidth={1.25} /></div>
          </button>

          <button className="flex w-full justify-between items-center cursor-pointer hover:bg-black/10 transition-all ease-in rounded-lg p-1" onClick={handleDeleteAlbum}>
            <div className="flex gap-3 items-center">
              <div><Trash2 size={15} strokeWidth={1.25} /></div>
              <h1 className="cursor-pointer">Delete</h1>
            </div>
          <div><ChevronRight size={15} strokeWidth={1.25} /></div>
          </button>
        </div>    
    </div>
  )
}

export default Actions