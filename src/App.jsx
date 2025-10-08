import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SimpleForm from './components/SimpleForm/SimpleForm'
import FormAction from './components/FormActions/FormAction'
import ControlledForm from './components/ControlledForm/ControlledForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>React Form</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <FormAction></FormAction> */}
      {/* Controlled Form / Field kaj kore khub besi interactive dorkar like : type korar sathy sathy boltesy submit kora porjonto time ny na */}
      <ControlledForm></ControlledForm>
    </>
  )
}

export default App
