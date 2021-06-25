import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SearchResults from "./components/SearchResults";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <Router>
      <Navbar />
      <Header />
      <QueryClientProvider client={queryClient}>
        <Route path="/" exact component={Home} />
        <Route path="/search/" exact component={SearchResults} />
      </QueryClientProvider>
    </Router>
  );
};

export default App;
