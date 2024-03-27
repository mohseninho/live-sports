import { BrowserRouter, Routes , Route } from 'react-router-dom';
import './App.css';
import Main from './pages/main/Main';
import NotFound from './pages/notFound/NotFound';
import Match from './pages/match/Match';

function App() {
  return (
    <Routes>
      <Route path='*' element={<NotFound />}  />
      <Route path='/' element={<Main />} />
      <Route path='/match/:id' element={<Match />} />
    </Routes>
  );
}

export default App;
