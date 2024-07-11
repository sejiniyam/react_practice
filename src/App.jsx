import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Lamp from './Lamp'
import LampController from './LampController'
import Counter from './Counter'
import Info from './Info'

function App() {
  return (
    <>
      <h3>----- 나는 전구 -----</h3>
      <LampController />
      <h3>----- 여기는 카운터 -----</h3>
      <Counter />
      <h3>----- 여기는 인포 -----</h3>
      <Info />
    </>
  )
}

export default App
