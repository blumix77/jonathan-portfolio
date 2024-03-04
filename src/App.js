import './App.css';

import { Header } from './components/Header/Header';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Publications } from './pages/Publications';
import { Teaching }  from '../src/pages/Teaching';
import { Bio} from '../src/pages/Bio';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home'

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path='/publications' element={<Publications/>}/>
            <Route path='/teaching' element={<Teaching/>}/>
            <Route path='/bio' element={<Bio/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
