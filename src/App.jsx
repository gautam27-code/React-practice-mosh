import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import List from './components/ListItems';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <List></List>
    </>
  )
}

export default App
