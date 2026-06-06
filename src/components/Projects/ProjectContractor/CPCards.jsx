import React from 'react'

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
    <div className='CPCards border border-black/20 p-4 mt-3'>
      <table className='w-full'>
        <thead>
        <tr className='border-b border-black/20'>
        {cardHeadings.map((items)=> {
          return <th key={items.id}>
            <div className='h-10 flex items-center '>
            {items.title}
            </div>
            </th>
        })}
          </tr>
        </thead>

        <tbody>
        {cardsData.map((items)=> {
          return <tr key={items.id}>
            <td>
              <div className='flex gap-2'>
              <div>
                {items.img}
                </div>
                <div>
                {items.title}
                <div>
                  {items.type}
                  </div>
                </div>
              </div>
              </td>
            <td>
              <div className='flex flex-col'>
                <div>
                  {items.location}
                </div>
                <div>
                  {items.country}
                </div>
              </div>
              </td>
            <td>{items.status}</td>
            <td>{items.startDate}</td>
            <td>{items.endDate}</td>
            <td>{items.budget}</td>
            <td>{items.team.map(items => items)}</td>
            <td><button>...</button></td>
          </tr>
        })}
        </tbody>
        </table>
    </div>
  )
}

export default CPCards