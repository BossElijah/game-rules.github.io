import { Routes, Route, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Games from './components/Games';
import Bang from './components/games/Bang';
import Dart from './components/games/Dart';
import Ludo from './components/games/Ludo';
import Matador from './components/games/Matador';
import './styles/styles.scss';
import ScrollToTop from './components/ScrollToTop';

// TODO: Change teaser hover effects.

// TODO: Customize 404 page.

const App = () => (
  <ScrollToTop>
    <Helmet>
      <title>Game Rules</title>
    </Helmet>
    <header>
      <div className="header__left">
        <Link to="/">
          <img src="/favicon.png" alt="" /> Game Rules
        </Link>
      </div>
      <div className="header__right">
        <div className="dropdown">
          <Link to="/" className="dropbtn">
            Games
          </Link>
          <div className="dropdown-content">
            <Link to="/dart">Dart</Link>
            <Link to="/bang">Bang</Link>
            <Link to="/ludo">Ludo</Link>
            <Link to="/matador">Matador</Link>
          </div>
        </div>
      </div>
    </header>

    <div className="content">
      <Routes>
        <Route exact path="/" element={<Games />} />
        <Route exact path="/bang" element={<Bang />} />
        <Route exact path="/dart" element={<Dart />} />
        <Route exact path="/ludo" element={<Ludo />} />
        <Route exact path="/matador" element={<Matador />} />
        <Route
          exact
          path="/page-not-found"
          element={<h1>Page Not Found</h1>} />
        <Route path="*" element={<Navigate to="/page-not-found" />} />
      </Routes>
    </div>
  </ScrollToTop>
);

export default App;
