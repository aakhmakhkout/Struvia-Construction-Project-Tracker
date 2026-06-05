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
    team: ["pfp", "pfp", "pfp", "pfp"],
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
    team: ["pfp", "pfp", "pfp", "pfp", "pfp"],
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
    team: ["pfp", "pfp", "pfp", "pfp"],
  },

  ]
  return (
    <div>
        <div>
          {cardHeadings.map((items)=> {
            return <div key={items.id}>
              <h1>{items.title}</h1>
            </div>
          })}
        </div>

        <div>
          {cardsData.map((items)=> {
            return <div key={items.id}>
              <div>

                  <div>
                  <img src={items.img} alt="img" />
                  </div>

                  <div>
                    <h1>{items.title}</h1>
                    <h3>{items.type}</h3>
                  </div>
                </div>

                  <div>
                    <p>{items.location}</p>
                  </div>

                  <div>
                    <p>{items.status}</p>
                  </div>

                  <div>
                    <p>{items.startDate}</p>
                  </div>

                  <div>
                    <p>{items.endDate}</p>
                  </div>

                  <div>
                    <h1>{items.budget}</h1>
                  </div>

                  <div>
                    
                  </div>

            </div>
          })}
        </div>
    </div>
  )
}

export default CPCards