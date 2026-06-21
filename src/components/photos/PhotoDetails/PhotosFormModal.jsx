import { X } from "lucide-react"

const PhotosFormModal = () => {
  return (
    <div className=' bg-black/20 backdrop-blur-[2px]  flex justify-center items-center rounded-lg CPCards overflow-hidden'>
        <form className="text-white bg-[#14202e] p-3 w-full flex flex-col gap-3">
            <div className="flex flex-col gap-3">
                <div className="flex gap-1 flex-col">
                <label htmlFor="label" className="font-bold text-white/70 ">Album Label <span className="text-red-500">*</span></label>
                <input type="text" placeholder="Enter label" id="label" name="label" className="outline-none bg-black/30 p-2 rounded-lg border border-white/20"/>
                </div>

                <div className="flex flex-col gap-3">
                <label htmlFor="PName" className="font-bold text-white/70 ">Select your project <span className="text-red-500">*</span></label>
                <select name="PName" id="PName" className="bg-black/30 p-2 rounded-lg border border-white/20 w-full">
                    <option value="" disabled selected>No project selected</option>
                    <option value="p1">Project 1</option>
                    <option value="p2">Project 2</option>
                    <option value="p3">Project 3</option>
                    <option value="p4">Project 4</option>
                    <option value="p5">Project 5</option>
                </select>

                </div>
            </div>

            <div className="flex flex-col gap-3">
                <label htmlFor="uploadImg" className="font-bold text-white/70 ">Upload image here <span className="text-red-500">*</span></label>
                <input type="file" id="uploadImg" name="uploadImg" accept="image/png, image/jpeg" className="bg-black/30 p-2 rounded-lg border border-white/20"/>
            </div>

            <div className="w-full flex justify-center items-center">
                <button className="bg-[#7745a7] w-full rounded-lg py-2.5 font-bold cursor-pointer">Upload Photo</button>
            </div>
        </form>
       
        </div>
  )
}

export default PhotosFormModal