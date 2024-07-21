import './App.css';
import AddPlayers from './components/AddPlayers';
import Home from './components/Home';
import TopFive from './components/TopFive';
import Layout from './components/Layout';
import NoMatch from './components/NoMatch';
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import AllPlayers from './components/AllPlayers';

function App() {
  return (
    <div className="App">
      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="add" element={<AddPlayers />} />
          <Route path="top-5" element={<TopFive />} />
          <Route path="all-players" element={<AllPlayers />} />
          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
