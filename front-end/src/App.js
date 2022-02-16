import {BrowserRouter , Route ,Routes , Link} from 'react-router-dom';
import './App.css';
import Actualite from './components/Actualite';
import ArticleInfo from './components/ArticleInfo';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
              <Route exact path='/' element={<Actualite/>} />
              <Route path='/:id' element={<ArticleInfo/>} />

          </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
