import {BrowserRouter as Router} from "react-router-dom";

import './App.css';

import Header from "./Components/header/Header";
import Main from "./Components/main/Main";


function App() {
  return (
      <Router>
          <div>
              <div>
                  <Header/>
                  <Main/>
              </div>
          </div>
      </Router>
  );
}

export default App;
