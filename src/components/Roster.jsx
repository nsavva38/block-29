import { useNavigate } from 'react-router-dom';

const Roster = ({ puppies }) => {

  const navigate = useNavigate();

      

  return (
    <>
      <h1>Roster</h1>
      <section id="all-puppies">
        {
          puppies.map((puppyTeam) => 
            puppyTeam.players.map((player) => (
              <section 
                key={player.id}
                onClick={() => { navigate(`/${player.teamId}/${player.id}`)}}
              >
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