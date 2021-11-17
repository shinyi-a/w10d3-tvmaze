// import logo from './logo.svg';
import './index.css';
import Home from './components/Home'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Result from './components/Result';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/result" element={<Result/>} />
        </Routes>
      </Router>   
    </div>
  );
}

export default App;
