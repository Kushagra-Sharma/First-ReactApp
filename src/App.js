import React, {useState} from 'react';
import Tweet from './Tweet';

function App() {

  const [isRed, setRed] = useState(false)   /*State example*/
  const [count, setCount] = useState(0);
  const[users, setUser] = useState([    
    {name : 'Ed', tweet : 'Hello There'},
    {name : 'John', tweet : 'I am JS'},
    {name : 'Kush', tweet : 'I am awesome'}
  ]);
  const increment = () => {
    setCount(count+1);
    setRed(!isRed);
  };

  return (
    <div className="app">
      {/* <Tweet name="Kush" tweet="I'M A LEGEND" likes="1K"/>
      <Tweet name="Charu" tweet="MEH!!" likes="1K"/>
      <Tweet name="Jack" tweet="WELL HELLO DEAR" likes="20,000"/>
      <Tweet name="Tony" tweet="I AM IRON MAN!!" likes="20K"/> */}
      {/* <h1 className={isRed ? 'red' : ""}>Change my color</h1>
      <button onClick={increment}>Increment</button>
      <h1>{count}</h1> */}

      {users.map(user => (
        <Tweet name={user.name} tweet={user.tweet} />
      ))}
    </div>
  );
}
export default App;