import { useSelector } from 'react-redux'
import {EllipsisVertical} from "lucide-react"

const PhotoCards = () => {
  const photoData = useSelector(state => state.photos.photosData)
  console.log(photoData)
  const photosLength = 20
  return (
    <div className='flex h-160 mt-5 gap-5 flex-wrap'>
      {photoData.map((items, idx)=> {
        return  <div key={idx} className='CPCards w-80 h-80 border border-black/20 overflow-hidden'>
        <div className='w-full h-50'>
        <img src={items.uploadImg} alt="img" className='w-full h-full object-cover object-center'/>
      </div>
      <div className='p-2'>
        <h1 className='font-bold text-xl capitalize'>{items.label}</h1>
        <h2 className='text-black/70 capitalize'>{items.PName}</h2>
      </div>
      <div className='flex items-center justify-between p-2'>
        {photosLength > 1 ? <p>{photosLength} Photos</p>:<p>{photosLength} Photo</p>}
        <button><EllipsisVertical size={20} strokeWidth={1.5} /></button>
      </div>
        </div>
      })}

    </div>
  )
}

export default PhotoCards