import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";


function App() {

  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/:id" component={Detail}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
