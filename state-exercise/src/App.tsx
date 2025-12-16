import { useState } from 'react'
import LightToggle from './components/LightToggle'
import ClickCounter from './components/ClickCounter'
import LottoNumbers from './components/LottoNumbers'
import './App.css'

function App() {
  const [isLightsOn, setIsLightsOn] = useState(true);
  const [lottoNumbers, setLottoNumbers] = useState<number[]>([]);
  const [count, setCount] = useState(0)

  return (
   <div>
    <h2>Light Toggle</h2>
    <LightToggle setIsLightsOn={setIsLightsOn}/>
    <div style={{
      backgroundColor: isLightsOn ? "white" : "black",
      color: isLightsOn ? "black" : "white",
      padding: "1rem"
    }}>
      The lights are {isLightsOn ? "On" : "Off"}
    </div>

    <h2>Lotto Numbers</h2>
    <LottoNumbers setLottoNumbers={setLottoNumbers}/>
    <div className='output'>
      {lottoNumbers.length > 0 ? lottoNumbers.join(",") : "No numbers generated yet"}
    </div>
    <h2>Click Counter</h2>
    <ClickCounter setCount={setCount}/>
    <div className='output'>Count: {count}</div>
   </div>
  )
}

export default App
