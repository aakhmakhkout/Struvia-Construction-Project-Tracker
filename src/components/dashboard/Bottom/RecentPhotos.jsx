import rp1 from "../../../assets/rp1.jpg"
import rp2 from "../../../assets/rp2.jpg"
import rp3 from "../../../assets/rp3.jpg"
import rp4 from "../../../assets/rp4.jpg"

const RecentPhotos = () => {
  return (
    <div className='dashboardBottomCards w-[40%] p-4 rounded-lg border border-black/20 gap-3 flex flex-col'>
      <div className='flex justify-between'>
        <h1 className='font-bold text-xl'>Recent Photos</h1>
        <button className='text-sm text-[#ff4800]'>View All</button>
      </div>
      <div className="flex justify-between">
        <img src={rp1} alt="img1" className="w-33 h-50 object-cover object-center rounded-xl"/>
        <img src={rp2} alt="img2" className="w-33 h-50 object-cover object-center rounded-xl"/>
        <img src={rp3} alt="img3" className="w-33 h-50 object-cover object-center rounded-xl"/>
        <img src={rp4} alt="img4" className="w-33 h-50 object-cover object-center rounded-xl"/>
      </div>
    </div>
  )
}

export default RecentPhotos