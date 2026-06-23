import { X } from "lucide-react"
import { setPhotosData } from "../../../redux/features/photoSlice"
import {useDispatch, useSelector} from "react-redux"
import { useState } from "react"

const PhotosFormModal = () => {
    const dispatch = useDispatch()
    const data = useSelector(state => state.photos.photosData)
    console.log(data)
    const [photodata, setphotodata] = useState({})
    console.log(photodata)

    function getData(targetElem, targetElemValue) {
        setphotodata((prev) => {
            return {...prev, [targetElem.name]: targetElemValue}
        })
    }
  return (
    <div className=' bg-black/20 backdrop-blur-[2px]  flex justify-center items-center rounded-lg CPCards overflow-hidden'>
        <form className="text-white bg-[#14202e] p-3 w-full flex flex-col gap-3" onSubmit={(elem)=> {
            elem.preventDefault()
            dispatch(setPhotosData(photodata))
            setphotodata({})
        }}>
            <div className="flex flex-col gap-3">
                <div className="flex gap-1 flex-col">
                <label htmlFor="label" className="font-bold text-white/70 ">Album Label <span className="text-red-500">*</span></label>
                <input type="text" placeholder="Enter label" value={photodata.label || ""} required id="label" name="label" className="outline-none bg-black/30 p-2 rounded-lg border border-white/20" onChange={(elem)=>{
                    getData(elem.target, elem.target.value)
                }}/>
                </div>

                <div className="flex flex-col gap-3">
                <label htmlFor="PName" className="font-bold text-white/70 ">Select your project <span className="text-red-500">*</span></label>
                <select name="PName" id="PName" value={photodata.PName || ""} className="bg-black/30 p-2 rounded-lg border border-white/20 w-full" required onChange={(elem)=>{
                    getData(elem.target, elem.target.value)
                }}>
                    <option value="" disabled selected>No project selected</option>
                    <option value="project 1">Project 1</option>
                    <option value="project 2">Project 2</option>
                    <option value="project 3">Project 3</option>
                    <option value="project 4">Project 4</option>
                    <option value="project 5">Project 5</option>
                </select>

                </div>
            </div>

            <div className="flex flex-col gap-3">
                <label htmlFor="uploadImg" className="font-bold text-white/70 ">Upload image here <span className="text-red-500">*</span></label>
                <input type="file" id="uploadImg" name="uploadImg" required accept="image/png, image/jpeg" className="bg-black/30 p-2 rounded-lg border border-white/20" onChange={(elem)=>{
                    const file = elem.target.files[0]
                    const imageURL = URL.createObjectURL(file)
                    getData(elem.target, imageURL)
                }}/>
            </div>

            <div className="w-full flex justify-center items-center">
                <button className="bg-[#7745a7] w-full rounded-lg py-2.5 font-bold cursor-pointer active:scale-95">Create Album</button>
            </div>
        </form>
       
        </div>
  )
}

export default PhotosFormModal