import logo from './logo.svg'
import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [value, setValue] = useState('')
  useEffect(() => {
    console.log('hello')
  })

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(event) => {
          setValue(event.target.value)
        }}
      />
    </div>
  )
}

export default App
