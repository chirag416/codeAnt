import React from 'react'
import RightPanel from '../components/RightPanel'
import LeftPanel from '../components/LeftPanel'

const Home = () => {
  return (
    <div className='flex'>
        <LeftPanel />
        <RightPanel />
    </div>
  )
}

export default Home