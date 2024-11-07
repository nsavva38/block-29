import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Roster = () => {

  const [pupps, setPupps] = useState([])
  const [puppyName, setPuppyName] = useState(``);
  const navigate = useNavigate();
  useEffect(() => {
    const getPupps = async () => {
      const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2409-ftb-et-web-ft/players`)
      const responseJSON = await response.json();
      const puppiesToBeAdded = responseJSON.data.players;
      setPupps(puppiesToBeAdded);
    }

    getPupps();
  }, []);
      

  return (
    <>
      <h1>Roster</h1>

      <form onSubmit={() => navigate(`/search/${puppyName}`)}>
        <input placeholder="search by name"
          onChange={(event) => {setPuppyName(event.target.value)}}
        />
        <button>Search</button>
      </form>
      <br></br>

      <section id="all-puppies">
        {
          pupps.map((puppy) => 
              <section 
                key={puppy.id}
                onClick={() => { navigate(`/${puppy.teamId}/${puppy.id}`)}}
              >
                <img src={puppy.imageUrl} height="200" />
                <h3>{puppy.name}</h3>
              </section>
            
          )
        }
      </section>
    </>
  )
}

export default Roster