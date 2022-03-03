import { useState, useEffect } from 'react';


function Hello() {
  useEffect(()=>{
    console.log('created');
    return () => console.log("destroyed")
  },[])
  return <h1>Hellooooo</h1>
}

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [showing, setShowing] = useState(false);
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const _onClick = () => setValue((prev) => prev +1);
  const _onChange = (e) => setKeyword(e.target.value);
  const _onClick2 = () => setShowing((prev)=>!prev);
  const _onChange2 = (e) => setToDo(e.target.value);
  const _onSubmit = (e) => {
    e.preventDefault();
    console.log('submitted', {toDo});
    if (toDo === "") {
      return;
    } else {
      setToDos(currentArray => [toDo, ...currentArray]);
      setToDo("");
    }
  }

  useEffect(()=> {
    // if (keyword !== "" && keyword.length > 5) {
      console.log('keyword changes');
    // }
  },[keyword]);
  useEffect(()=> {
      console.log('counter changes');
  },[counter]);
// ------------
const [loading, setLoading] = useState(true);
const [coins, setCoins] = useState([]);
useEffect(()=>{
  fetch("https://api.coinpaprika.com/v1/tickers")
  .then((response)=>response.json())
  .then((json) =>{
    setCoins(json);
    setLoading(false);
  });
},[]);

// ------------
  return (
    <div>
      {showing ? <Hello /> : null}
      <input 
        value={keyword}
        onChange={_onChange} 
        type="text" 
        placeholder="Search here... "/> <br />
      <h1>My Todos ({toDos.length})</h1>
      <form onSubmit={_onSubmit}>
        <input 
        type="text"
        placeholder="Write the thing"
        onChange={_onChange2}
        value={toDo}
        />
        <button>Add todo</button>
      </form>
      <hr />
        <ul>
          {toDos.map((item_toDO, index) => (
          <li key={index}>{item_toDO} <button>❌</button></li>
          ))}
        </ul>
      <hr />
      <h1>{counter}</h1>
      <button onClick={_onClick}>click me</button>
      <button onClick={_onClick2}>{showing ? "hide" : "show"}</button>
      
      <div>
        <h1>The Coins</h1>
        {loading ? <strong>Loading...</strong> : null}
        {loading ? "":
          <select>
            {coins.map((coin)=> 
            ((coin.quotes.USD.price).toFixed(3)>1)?
            (<option key={coin.id}>{coin.name}({coin.symbol}) : ${(coin.quotes.USD.price).toFixed(3)} USD</option>)
            :null)
            }
          </select>
        }
      </div>
    </div>
  );
}

export default App;
