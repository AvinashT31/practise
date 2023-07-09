import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import FetchAPI from './useParams/FetchAPI';
import FetchAPIparam from './useParams/FetchAPIparam';

function App() {
  return (
    <>
      <Routes>
      <Route exact path='/' element={<FetchAPI/>} />
      <Route exact path='/:id' element={<FetchAPIparam/>} />
      </Routes>
    </>
  );
}

export default App;
