import './App.css';
import { BrowserRouter, Route, Router, Routes, Switch } from 'react-router-dom';
import { Home } from './pages/Home';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
 export default App;