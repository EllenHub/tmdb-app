import {BrowserRouter as Router} from "react-router-dom";

import Header from "./Components/header/Header";
import Main from "./Components/main/Main";

import {Provider} from "react-redux";
import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";
import themeReducer from "./Components/redux/reducer/themeReducer";

import {Container} from "./Components/theme-switcher/ThemeSwitcher";

const store = createStore(combineReducers({themeReducer}), applyMiddleware(thunk))
function App() {
  return (
      <Provider store={store}>
          <Container>
              <Router>
                  <Header/>
                  <Main/>
              </Router>
          </Container>
      </Provider>
  );
}

export default App;
