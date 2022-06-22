import { BrowserRouter as Router, Route, Routes, Switch, Link } from 'react-router-dom';
import './App.css';
import Main from './components/Main';

const App = () => {
  return (
    <Routes>
      <Route path="/react-cj-ai/" element={<Main />} />
    </Routes>
  );
};

export default App;
