import { useState, useEffect } from 'react';
import Movie from '../components/Movie';

function Home() {
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
      // console.log('keyword changes');
    // }
  },[keyword]);
  useEffect(()=> {
      // console.log('counter changes');
  },[counter]);

// ------------
function Hello() {
  useEffect(()=>{
    console.log('created');
    return () => console.log("destroyed")
  },[])
  return <h1>Hellooooo</h1>
}
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
const [movies, setMovies] = useState([]);
const getMovies = async() => {
  const json = await (
    await fetch(
    `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
    )
  ).json();

  setMovies(json.data.movies);
  setLoading(false);
};

useEffect(()=> {
 getMovies();
},[]);


// ------------
  return (
    <div>
      <div className='theToDos'>
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
          <ul>
            {toDos.map((item_toDO, index) => (
              <li key={index}>{item_toDO} <button>❌</button></li>
              ))}
          </ul>
      </div>
      <hr />
      <div className='theClicks'>
        <h1>{counter}</h1>
        {showing ? <Hello /> : null}
        <button onClick={_onClick}>click me</button>
        <button onClick={_onClick2}>{showing ? "hide" : "show"}</button>
      </div>
      <hr />
      <div className='theCoins'>
        <h1>The Coins</h1>
        {loading ? <strong>Loading...</strong> : null}
        {loading ? "":
          <select>
            {/* {coins.map((coin)=> 
            ((coin.quotes.USD.price).toFixed(3)>100)?
            (<option key={coin.id}>{coin.name}({coin.symbol}) : ${(coin.quotes.USD.price).toFixed(3)} USD</option>)
            :null)
            } */}
          </select>
        }
      </div>
      <hr />
      <div className='theMovies'>
        <h1>The Movies</h1>
        {loading ? <h1>Loading...</h1> : 
          <div>
            {movies.map((movie) => (
              <Movie 
                key={movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}
              />
            ))}
          </div>
        }
      </div>
    </div>
  );
}

export default Home;