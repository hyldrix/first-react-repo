import Container from './components/Container/Container.js';
import NavBar from './components/NavBar/NavBar.js';
import Home from './components/Home/Home.js';
import About from './components/About/About.js';
import Favorite from './components/Favorite/Favorite.js';
import Error from './components/Error/Error.js';
import List from './components/List/List.js';
import {Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <main>
    <NavBar />
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/list" element={<List />} />
        <Route path="/list/:listId" element={<List />} />
        <Route path="*" element={<Error />} />
        
      </Routes>
    </Container>
</main>
  );
};

export default App;