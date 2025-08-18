import useCount from './store.js'
import './App.css'
import Button from './Button.jsx'

function App() {
  const [count, setCount] = useCount();
  return (
    <>
      <h1>Remote app</h1>
      <div>
        <Button />
      </div>
      <div style={{ marginTop: '20px' }}>
        <button onClick={() => setCount(count + 1)}>
          App Count: {count}
        </button>
      </div>
    </>
  )
}

export default App
