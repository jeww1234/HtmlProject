import './App.css';
import { Route, Routes} from 'react-router';
import Home from './component/HomePage/Home'

function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
