import { useState } from 'react'
import List from './components/ListItems';
import './App.css'
import Alert from './components/Alert';
import Button from './components/Button'

function App() {
  const arr = ["New York", "Singapore", "London"];
  const heading = "Cities";

  const [alertVisible, setAlertVisible] = useState(false);

  const onClose = () => {
    setAlertVisible(false);
  }

  const handleItemClick = (item, index) => {
    console.log("Parent got", item, index);
  }

  return (
    <>
      {alertVisible && <Alert close={onClose}> Hey Hey Alert!! </Alert>}
      <List arr={arr} heading={heading} onItemClick={handleItemClick}></List>
      <Button color={"info"} onClick={() => {console.log("Clicked Button"), setAlertVisible(true)}}>My Button</Button>
    </>
  )
}

export default App
