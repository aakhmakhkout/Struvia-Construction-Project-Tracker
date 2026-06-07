import {EllipsisVertical} from "lucide-react"

const CPCards = () => {
  const cardHeadings = [
    {
      id: 1,
      title: "Project Name"
    },
    {
      id: 2,
      title: "Location"
    },
    {
      id: 3,
      title: "Status"
    },
    {
      id: 4,
      title: "Start Date"
    },
    {
      id: 5,
      title: "End Date"
    },
    {
      id: 6,
      title: "Budget"
    },
    {
      id: 7,
      title: "Team"
    },
    {
      id: 8,
      title: "Actions"
    },

  ]

  const cardsData = [
  {
    id: 1,
    img: "img",
    title: "Skyline Villa",
    type: "Luxury Villa Construction",
    location: "Jaipur, Rajasthan",
    country: "India",
    status: "In Progress",
    startDate: "10-Feb, 2026",
    endDate: "20-Aug, 2027",
    budget: "20,00,000",
    team: ["pfp", "pfp", "pfp"],
  },
  {
    id: 2,
    img: "img",
    title: "Green Heights Residency",
    type: "Residential Apartment Complex",
    location: "Pune, Maharashtra",
    country: "India",
    status: "Completed",
    startDate: "15-Jan, 2025",
    endDate: "30-Dec, 2025",
    budget: "1,20,00,000",
    team: ["pfp", "pfp", "pfp"],
  },
  {
    id: 3,
    img: "img",
    title: "Tech Park Tower",
    type: "Commercial Office Building",
    location: "Bengaluru, Karnataka",
    country: "India",
    status: "On Hold",
    startDate: "05-Mar, 2026",
    endDate: "15-Nov, 2027",
    budget: "3,50,00,000",
    team: ["pfp", "pfp", "pfp"],
  },
  {
    id: 4,
    img: "img",
    title: "Riverside Mall",
    type: "Shopping Mall Development",
    location: "Ahmedabad, Gujarat",
    country: "India",
    status: "In Progress",
    startDate: "01-Apr, 2026",
    endDate: "10-Oct, 2027",
    budget: "5,00,00,000",
    team: ["pfp", "pfp", "pfp"],
  },
  {
    id: 5,
    img: "img",
    title: "Sunrise Township",
    type: "Township Infrastructure Project",
    location: "Hyderabad, Telangana",
    country: "India",
    status: "In Progress",
    startDate: "20-Feb, 2026",
    endDate: "15-Dec, 2028",
    budget: "8,50,00,000",
    team: ["pfp", "pfp", "pfp"],
  },
  ]

  return (
    <div className='flex flex-col gap-5'>

      <div className='grid grid-cols-[2.5fr_1.5fr_1fr_1.5fr_1.5fr_1.5fr_1.5fr_1fr] border-b-2 border-black/20'>
        {cardHeadings.map((items)=> {
          return <div key={items.id}>
            <div className='h-15 flex items-center font-bold'>
            {items.title}
            </div>
            </div>
        })}
        </div>
          

        <div className='flex flex-col gap-5'>   
        {cardsData.map((items)=> {
          return <div key={items.id} className='grid grid-cols-[2.5fr_1.5fr_1fr_1.5fr_1.5fr_1.5fr_1.5fr_1fr] border border-black/10 h-15 items-center px-3 rounded-lg'>
            <div className=''>
              <div className='flex gap-2'>
              <div className="flex bg-black/20 w-15 h-10 items-center justify-center rounded-sm"> 
                {items.img}
                </div>
                <div >
                <h1 className="font-bold">
                  {items.title}
                  </h1>
                <div>
                  <h3 className="text-sm text-black/70">
                  {items.type}
                  </h3>
                  </div>
                </div>
              </div>
              </div>
            <div className='flex'>
              <div className='flex flex-col '>
                <div>
                  {items.location}
                </div>
                <div>
                  {items.country}
                </div>
              </div>
              </div>
            <div>{items.status}</div>
            <div>{items.startDate}</div>
            <div>{items.endDate}</div>
            <div>{items.budget}</div>
            <div>{items.team.map(items => items)}</div>
            <div><button className=" w-[50%] flex justify-center"><EllipsisVertical size={20} strokeWidth={1.5} /></button></div>
          </div>
        })}
        </div>
     
    </div>
  )
}

export default CPCards