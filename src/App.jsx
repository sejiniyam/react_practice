import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LampController from './LampController'
import Counter from './Counter'
import Info from './Info'
import MultiCounterTest from './MultiCounterTest'
import MultiCounter from './MultiCounterTest'


function App() {

  return (
    <>
      {/* <h3>----- 나는 전구 -----</h3>
      <LampController />
      <h3>----- 여기는 카운터 -----</h3>
      <Counter />
      <h3>----- 여기는 인포 -----</h3>
      <Info /> */}
      <h3>----- 나는 멀티 카운터 -----</h3>
      {/* <MultiCounterTest />  */}
      <MultiCounter />
    </>
  );ㅌ
}

export default App
