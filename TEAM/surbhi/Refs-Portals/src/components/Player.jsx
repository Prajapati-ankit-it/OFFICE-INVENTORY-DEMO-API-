import { useRef, useState } from "react";

export default function Player() {

const playerName = useRef();

// const [submitted, setSubmitted] = useState(false);

  function handleClick() {
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value ='';
  }

const [enteredPlayerName,setEnteredPlayerName] = useState(null);

    // function handlechange(event) {
    //   setSubmitted(false);
    //   setEnteredPlayerName(event.target.value);
    // }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? 'unknown entry' } </h2>
      <p>
        <input 
          type="text" 
          ref={playerName} 
          //onChange={handlechange} 
          //value={enteredPlayerName}
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
