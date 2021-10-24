import { BrowserRouter, Route, Switch } from "react-router-dom";
//Styling
import "./styles/App.scss";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Landing from "./pages/landing";
import About from "./pages/about";
import Academics from "./pages/academics";
import Admission from "./pages/admission";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" component={Landing} exact />
          <Route path="/about" component={About} />
          <Route path="/academics" component={Academics} />
          <Route path="/admission" component={Admission} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
