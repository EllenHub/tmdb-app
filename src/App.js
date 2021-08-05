import {BrowserRouter as Router} from "react-router-dom";

import './App.css';

import Header from "./Components/header/Header";
import Main from "./Components/main/Main";


function App() {
  return (
      <Router>
          <div>
              <Header/>
              <Main/>
          </div>
      </Router>
  );
}

export default App;
