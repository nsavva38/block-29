import { Routes, Route, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Roster from "./components/Roster.jsx"
import SinglePuppy from './components/SinglePuppy.jsx'
import Form from './components/Form.jsx'

const App = () => {
  const [puppies, setPuppies] = useState([]);

  useEffect(() => {

    const getPuppies = async () => {
      const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2409-ftb-et-web-ft/players`)
      const responseJSON = await response.json();
      const puppiesToBeAdded = responseJSON.data.players;
      setPuppies(puppiesToBeAdded);


    }
    getPuppies();
  }, [])


  return (
    <>
      <nav>
        <Link to='/roster'>Roster</Link>
        <Link to='/form'>Add-A-Puppy</Link>

      </nav>
      <h1>Puppy Bowl</h1>

      <Routes>
        <Route path="/roster" element={<Roster puppies={puppies} setPuppies={setPuppies}/>} />
        {/* <Route path="/search" element={<Searched />} /> */}
        <Route path="/:teamId/:id" element={<SinglePuppy />} /> 
        <Route path="/form" element={<Form />} />
      </Routes>
    </>
  )
}

export default App
