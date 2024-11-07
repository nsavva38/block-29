import { Routes, Route, Link } from 'react-router-dom'

import Roster from "./components/Roster.jsx"
import SinglePuppy from './components/SinglePuppy.jsx'
import Form from './components/Form.jsx'

const App = () => {


  return (
    <>
      <nav>
        <Link to='/'>Roster</Link>
        <Link to='/form'>Add-A-Puppy</Link>

      </nav>
      <h1>Puppy Bowl</h1>

      <Routes>
        <Route path="/" element={<Roster />} />
        <Route path="/:teamId/:id" element={<SinglePuppy />} /> 
        <Route path="/form" element={<Form />} />
      </Routes>
    </>
  )
}

export default App
