import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Roster = () => {

  const [pupps, setPupps] = useState([])
  const navigate = useNavigate();
  useEffect(() => {
    const getPupps = async () => {
      const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2409-ftb-et-web-ft/players`)
      const responseJSON = await response.json();
      console.log(responseJSON.data.players);
      const puppiesToBeAdded = responseJSON.data.players;
      setPupps(puppiesToBeAdded);
    }

    getPupps();
  }, []);
      

  return (
    <>
      <h1>Roster</h1>
      <section id="all-puppies">
        {
          pupps.map((puppyTeam) => 
            // puppyTeam.players.map((player) => (
              <section 
                key={puppyTeam.id}
                onClick={() => { navigate(`/${puppyTeam.teamId}/${puppyTeam.id}`)}}
              >
                <img src={puppyTeam.imageUrl} height="200" />
                <h3>{puppyTeam.name}</h3>
              </section>
            
          )
        }
      </section>
    </>
  )
}

export default Roster