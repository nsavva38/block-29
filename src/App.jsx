import { Routes, Route, Link } from 'react-router-dom'

import Roster from "./components/Roster.jsx"
import SinglePuppy from './components/SinglePuppy.jsx'

const App = () => {


  return (
    <>
      <Link to='/'>Roster</Link>
      <h1>Puppy Bowl</h1>

      <Routes>
        <Route path="/" element={<Roster />} />
        <Route path="/:teamId/:id" element={<SinglePuppy />} /> 

      </Routes>
    </>
  )
}

export default App
