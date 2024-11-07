import { useState } from "react"

const Form = ({puppies, setPuppies}) => {
  const [newPuppyName, setNewPuppyName] = useState(``);
  const [newPuppyBreed, setNewPuppyBreed] = useState(``);
  const [newPuppyStatus, setNewPuppyStatus] = useState(``);
  const [newPuppyImg, setNewPuppyImg] = useState(``);
  const [newPuppyTeamId, setNewPuppyTeamId] = useState(Number(``));

  const submitPuppy = async (event) => {
    event.preventDefault();
    await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2409-ftb-et-web-ft/players`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: newPuppyName,
        breed: newPuppyBreed,
        status: newPuppyStatus,
        imageUrl: newPuppyImg,
        teamId: newPuppyTeamId
      }),

    });
  }
  return (

    <>
      <h2>Add-A-Puppy</h2>

      <form onSubmit={submitPuppy}>
      <input placeholder="name"
          onChange={(event) => {setNewPuppyName(event.target.value)}}
      />
      <br></br>
      <input placeholder="breed"
        onChange={(event) => {setNewPuppyBreed(event.target.value)}}
      />
        <br></br>

      <input placeholder="status(field/bench)"
        onChange={(event) => {setNewPuppyStatus(event.target.value)}}
      />
        <br></br>

      <input placeholder="imageUrl"
        onChange={(event) => {setNewPuppyImg(event.target.value)}}
      />
        <br></br>

      <input placeholder="teamID(1863/1864)"
        onChange={(event) => {setNewPuppyTeamId(event.target.value)}}
      />
        <br></br>

        <button>Add Puppy!</button>
      </form>
    </>
  )
}

export default Form