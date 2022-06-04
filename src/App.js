import { useEffect, useRef, useState } from 'react';
import './App.css';
import ImageGrallery from './ImageGrallery';

const API_KEY = "27800439-c51423717090186532fd42957"
const URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+ 'mountain';

function App() {
  const [inputText, setInputText] = useState("")
  const [fetchData, setFetchData] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const ref = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    //fetch data
    try {
      const res = await fetch(URL);
      if(!res.ok) {
        throw new Error(`Error! status: ${res.status}`);
      }

      const jsonData = await res.json();
      console.log(jsonData)
      setFetchData(jsonData);
    } catch (e) {
        return console.log(e);
    } finally {
      setIsLoading(false);
    }
  }

  //useEffect追加して確かめよう
  useEffect(() => {
    fetch(URL)
      .then((res) => {
        return res.json();
      })
      .then((data) => setFetchData(data));
  }, []);

  // console.log(fetchData.hits[0].id)

  // console.log(fetchData.hits[0].id) //1回目はとれてるのか

  return (
    <div>
      <div className='container'>
        <h2>My Pixabay</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="text" placeholder='画像を探す' ref={ref} onChange={(e) => setInputText(e.target.value)}/>
        </form>
        <ImageGrallery fetchData={fetchData} isLoading={isLoading}/>
      </div>
    </div>
  );
}

export default App;
