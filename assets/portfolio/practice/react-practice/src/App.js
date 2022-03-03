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

  
  const _onClick = () => setValue((prev) => prev +1);
  const _onChange = (e) => setKeyword(e.target.value);

  const _onClick2 = () => setShowing((prev)=>!prev);


  useEffect(()=> {
    // if (keyword !== "" && keyword.length > 5) {
      console.log('keyword changes');
    // }
  },[keyword]);
  useEffect(()=> {
      console.log('counter changes');
  },[counter]);

  return (
    <div>
      {showing ? <Hello /> : null}
      <input 
        value={keyword}
        onChange={_onChange} 
        type="text" 
        placeholder="Search here... "/>
      <h1>{counter}</h1>
      <button onClick={_onClick}>click me</button>
      <button onClick={_onClick2}>{showing ? "hide" : "show"}</button>

    </div>
  );
}

export default App;
