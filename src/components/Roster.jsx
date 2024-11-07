import { useState, useEffect } from 'react'

const Roster = () => {

  const [puppies, setPuppies] = useState([]);

  useEffect(() => {

    const getPuppies = async () => {
      const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2409-ftb-et-web-ft/teams`)
      const responseJSON = await response.json();
      const puppiesToBeAdded = responseJSON.data.teams;
      console.log(`puppiesToBeAdded:`, puppiesToBeAdded)
      setPuppies(puppiesToBeAdded);


    }
    getPuppies();
  }, [])
      

  return (
    <>
      <h1>Roster</h1>
      <section id="all-puppies">
        {
          puppies.map((puppyTeam) => 
            puppyTeam.players.map((player) => (
              <section key={player.id}>
                <img src={player.imageUrl} height="200" />
                <h3>{player.name}</h3>
              </section>
            ))
          )
        }
      </section>
    </>
  )
}

export default Roster