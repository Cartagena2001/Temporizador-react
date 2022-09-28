import { useState } from 'react'
import CountDown from './components/CountDown'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex items-center justify-center h-screen bg-slate-100'>
      <CountDown />
    </div>
  )
}

export default App
