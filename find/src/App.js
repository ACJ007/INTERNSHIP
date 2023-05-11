import './App.css';
import Basics from './components/Basics';
import StBa from './components/StBa';
import Ba from './components/Ba';
import TabArr from './components/TabArr';
import Navi from './components/Navi';
import View from './components/View';
import {Route, Routes, Router} from 'react-router-dom';
function App() {
  return (
    <div className="App">
  {/*<Basics></Basics>*/}
      {/*<StBa></StBa>*/}
      {/*<Ba></Ba>*/}
      {/*<TabArr></TabArr>*/}
    <Navi></Navi>
        
        <Routes>
          <Route path="/state" element={<Basics/>}/>
          <Route path="/table" element={<TabArr/>}/>
          <Route path="/View" element={<View/>}/>
        </Routes>
    </div>
  );
}

export default App;
