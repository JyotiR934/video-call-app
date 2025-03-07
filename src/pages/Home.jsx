import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const [roomcode,setroomcode]=useState('');
  const navigate=useNavigate();
  const handleformsubmit=(event)=>{
      event.preventDefault();
      navigate(`/room/${roomcode}`)
  }
  return (
    <>
      <div className='homepage'>
        <form onSubmit={handleformsubmit} className='form'>
          <div>
            <label htmlFor="">Enter Room Code</label>
            <input value={roomcode} onChange={(e)=>setroomcode(e.target.value)} type="text" name="roomcode" required placeholder='Enter Your Room Code' />
          </div>
          <button type="submit">Enter Room</button>
        </form>
      </div>
    </>
  )
}

export default Home