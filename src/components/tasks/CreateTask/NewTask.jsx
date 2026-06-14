import React from 'react'

const NewTask = ({state}) => {
    const {setisNTP} = state
  return (
    <div className='fixed inset-0 bg-black/20 text-white text-4xl flex justify-center items-center'>
        <h1>hello this is new task form</h1>
        <button onClick={()=> {
            setisNTP(false)
        }}>X</button>
    </div>
  )
}

export default NewTask