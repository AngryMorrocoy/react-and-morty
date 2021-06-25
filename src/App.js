import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { QueryClient, QueryClientProvider } from "react-query";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <Router>
      <Navbar />
      <Header />
      <QueryClientProvider client={queryClient}>
        <Route path="/" component={Home} />
      </QueryClientProvider>
    </Router>
  );
};

export default App;
