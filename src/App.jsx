import { useState } from "react"

function App() {
  const [count, setCount] = useState(0)

  const incCount = () => {
    setCount(count + 1)
  }

  return <>
  <div><p>Count: {count}</p></div>
  <button onClick={incCount}> Inc</button>
  </>

}

export default App
