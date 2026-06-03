import { useSelector } from "react-redux"
import {MapPin} from "lucide-react"
import sun from "../../../assets/sun.png"

const Welcome = () => {
  const username = useSelector(state => state.auth.username)
  return (
    <div className="flex justify-between">
      <div className="h-30 flex flex-col justify-center gap-2">
        <h1 className="font-bold text-3xl">Good Morning, {username}</h1>
        <p className="text-sm text-black/60">Here's what is happening on your project today</p>
      </div>

      <div className="flex gap-10 h-30 items-center flex-col justify-center" >
        <div className="flex items-center gap-10 weatherandlocation p-3 rounded-lg">
          <div className="flex gap-4 items-center">
            <div className="w-8"><img src={sun} alt="weather png" /></div>
            <div>
              <h1>32 °C </h1>
              <p className="text-sm text-black/60">Sunny</p>
            </div>
          </div>
            <div className="w-[2px] h-10 bg-black/50"></div>
          <div className="flex gap-4 items-center">
            <div><MapPin size={20} strokeWidth={1.5} /></div>
            <div>
              <h1>Sopore, Kashmir</h1>
              <p className="text-sm text-black/60">India</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome