import { useParams, useNavigate, Link } from "react-router-dom"
import { useState, useEffect } from "react";

const SinglePuppy = () => {


  const [selectedPuppy, setSelectedPuppy] = useState({});
  const [puppyTeamName, setPuppyTeamName] = useState(``);
  const { teamId, id } = useParams();
  const navigate = useNavigate();



  useEffect(() => {
    const getSinglePuppy = async () => {
      const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2409-ftb-et-web-ft/teams/`);
      const teams = await response.json();
      const teamsArray = teams.data.teams;
      const puppyTeam = teamsArray.filter((team) => team.id == teamId)

      setPuppyTeamName(puppyTeam[0].name);
      const puppyObjTeam = puppyTeam[0].players;

      const foundPuppy = puppyObjTeam.find((player) => {
        return player.id === Number(id);
      });

      console.log(foundPuppy);
      console.log(puppyTeamName);
      setSelectedPuppy(foundPuppy);


  
    }

    getSinglePuppy();
  }, [])


  const removePuppy = async () => {
    await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2409-ftb-et-web-ft/players/${id}`,{
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json"
      }

    })
    navigate(`/roster`);
  }


  return (
    <section id="puppy">
      <h2>Meet {selectedPuppy.name}!</h2>
      <img src={selectedPuppy.imageUrl} height="300"/>
      <p>{selectedPuppy.name} plays for {puppyTeamName}!</p>
      <p>{selectedPuppy.name}'s current status is: {selectedPuppy.status}</p>

      <button onClick={ removePuppy }>Remove From Puppy Bowl</button>
      <Link to={`/roster`}>Back To Roster</Link>
    </section>

  )
}

export default SinglePuppy