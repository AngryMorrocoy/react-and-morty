import "./App.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Header />
    </Router>
  );
};

export default App;
