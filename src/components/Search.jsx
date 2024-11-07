import { useParams, useNavigate } from "react-router-dom"

const Search = ( { puppies }) => {
  const { name } = useParams();
  const navigate = useNavigate();

  const capitalName = name[0].toUpperCase() + name.slice(1);
  const searchedPuppy = puppies.filter((puppy) => {
    return puppy.name === capitalName;
  })

  console.log(`searchedPuppy:`, searchedPuppy);
  return (
    <section id="searched-puppies" >
      {
        searchedPuppy.length > 0 ? (
        searchedPuppy.map((puppy) => (
          <section key={puppy.id}
            onClick={() => { navigate(`/${puppy.teamId}/${puppy.id}`)}}>
          <img src={puppy.imageUrl} height="300" />
          <h2 key={puppy.id}>{puppy.name}</h2>
          </section>
        ))
      ) : (
        <h2>No puppy found</h2>
      )
    }
    </section>
  );
};

export default Search;