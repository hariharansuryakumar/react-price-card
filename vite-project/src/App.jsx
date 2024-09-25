import { useState } from 'react'
import reactLogo from './assets/react.svg'
import LeftCard from './LeftCard'
import CenterCard from './CenterCard'
import RightCard from './RightCard'

function App() {

  return (
    
      <div className='row px-5 py-5 bg-primary'>
      <LeftCard/>
      <CenterCard/>
      <RightCard/>
    </div>
    
  )
}

export default App