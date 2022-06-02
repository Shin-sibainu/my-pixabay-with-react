import './App.css';
import ImageGrallery from './ImageGrallery';

function App() {
  return (
    <div>
      <div className='container'>
        <h2>My Pixabay</h2>
        <input type="text" placeholder='画像を探す'/>
        <ImageGrallery/>
      </div>
    </div>
  );
}

export default App;
