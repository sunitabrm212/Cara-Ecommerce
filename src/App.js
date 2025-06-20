import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Blog from './pages/Blog';
import About from './pages/About';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
import './App.css';


function App() {
  return (
      <Routes>
        <Route path = "/" element = {<Layout />}>
          <Route index element = {<Home />} />
          <Route path = "shop" element = {<Shop />} />
          <Route path = "blog" element = {<Blog />} />
          <Route path = "about" element = {<About />} />
          <Route path = "contact" element = {<Contact />} />
          <Route path = '*' element = {<NoPage />} />
        </Route>
      </Routes>
  );
}

export default App;
