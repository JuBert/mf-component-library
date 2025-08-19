import { useState } from 'react'
import './App.css'
import Button from './components/Button.jsx'
import InputText from './components/InputText.jsx'
import InputDate from './components/InputDate.jsx'

function App() {
  const [ name, setName ] = useState('');
  const [ date, setDate ] = useState('');
  return (
    <>
      <h1 className='pb-6'>Component library</h1>
      <div className='flex flex-col gap-y-3'>
        <div>
          <pre>Button</pre>
          <Button />
        </div>
        <div>
          <pre>InputText</pre>
          <InputText
            label="Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Enter your name"
          />
        </div>
        <div>
          <pre>InputDate</pre>
          <InputDate
            label="Date of Birth"
            value={date}
            onChange={(event) => setDate(event.target.value)}
            placeholder="Select your date of birth"
          />
        </div>
      </div>
    </>
  )
}

export default App
