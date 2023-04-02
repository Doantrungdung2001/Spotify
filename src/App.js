import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import DetailSong from './components/DetailSong';
import ListSong from './components/ListSong';
import Playing from './components/Playing';
import {Songs} from './Context';
import DataSongs from './data/songs.json';
function App() {
  return (
    <div className="App ">
      <Songs.Provider value={{DataSongs}}>
        <Navbar />
        <div className='grid grid-cols-3 bg-slate-700 h-screen-navbar-player overflow-hidden'>
          {/* Span 1 */}
          <DetailSong />
          {/* Span 2 */}
          <ListSong />
        </div>
        <Playing />
      </Songs.Provider>
    </div>
    
  );
}

export default App;
