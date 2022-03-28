import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginPage from"./LoginPage/index"
import MainPage from "./MainPage/index";

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={LoginPage}></Route>
        <Route exact path="/main" component={MainPage}></Route>
      </Router>
    </div>
  )
}

export default App;
