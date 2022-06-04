import { useEffect, useRef, useState } from "react";
import "./App.css";
import ImageGrallery from "./ImageGrallery";

const API_KEY = "27800439-c51423717090186532fd42957";

function App() {
  const [inputText, setInputText] = useState("");
  const [fetchData, setFetchData] = useState([]);

  const ref = useRef();
  const URL = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + `apple`;

  // console.log(ref.current.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(ref.current.value);
    const searchURL =
      "https://pixabay.com/api/?key=" + API_KEY + "&q=" + ref.current.value;

    //fetch data
    fetch(searchURL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setFetchData(data.hits);
      });
  };

  // useEffect追加して確かめよう;
  useEffect(() => {
    fetch(URL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.hits); //これは配列。配列の中にオブジェクトがある。
        setFetchData(data.hits);
      });
  }, []);

  //リロードするとなくなる⇨エラーになる。
  // console.log(fetchData.hits[0].id);

  // console.log(fetchData.hits[0].id) //1回目はとれてるのか

  return (
    <div>
      <div className="container">
        <h2>My Pixabay</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="text" placeholder="画像を探す" ref={ref} />
        </form>
        <ImageGrallery fetchData={fetchData} />
      </div>
    </div>
  );
}

export default App;
