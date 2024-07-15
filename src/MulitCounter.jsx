import MultiCounterViewer from './MultiCounterViewer'
import MultiCounterController from './MultiCounterController'
import { useEffect, useState } from 'react'


function App() {

  // 카운터에 사용되는 친구들
  const [ count, setCount ] = useState(0);

  {/* 이랬는데
  const toValue = (e) => {
      const num = parseInt(e.target.value);
      calculator(num);
  }
  
  const calculator = (num) => {
    setNumber(preNumber => preNumber + num);
  }
  */}

  //요래됐으여 굿굿..
  const calculator = (value) => {
    setCount(preCount => preCount + value);
  }

  useEffect(() => { // 최신 값 받아옴 (비동기 작업을 수행한다)
    console.log(`count: ${count}`)
  }, [count]); // 최신 반영할 객체

  return (
    <>
      <MultiCounterViewer count={count}/>
      <MultiCounterController calculator={calculator}/>
    </>
  );ㅌ
}

export default App
