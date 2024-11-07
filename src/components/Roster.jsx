import { useNavigate } from 'react-router-dom';

const Roster = ({ puppies }) => {

  const navigate = useNavigate();

      

  return (
    <>
      <h1>Roster</h1>
      <section id="all-puppies">
        {
          puppies.map((puppyTeam) => 
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