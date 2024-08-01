import Player from './components/Player.jsx';
import TimeChallenger from './components/TimeChallenger.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges"> 
      <TimeChallenger title="Easy" targetTime={1}/>
      <TimeChallenger title="Not easy" targetTime={5}/>
      <TimeChallenger title="Getting tough" targetTime={10}/>
      <TimeChallenger title="Props only" targetTime={15}/>
      </div>
    </>
  );
}

export default App;
