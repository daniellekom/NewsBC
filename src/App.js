import { useState } from 'react';
import './App.css';
import NewsList from './components/NewsList';



function App() {



  const [hideNews, setHideNews] =useState(false)
 
  // const addImgs = () => {
  // const addImg = [...cardImages, ...cardImages]
  //   .sort(() => Math.random() - 0.5)
  //   .map((card) => ({...card, id: Math.random()}))

  //   setCards(addImg)

  // }

  return (
        <div className="App">

            {hideNews
              ?<button onClick={() => setHideNews()}>Hide News</button> 
              :<button onClick={() => setHideNews(true)}>Show News</button>
            } 
             {hideNews && <NewsList/>}

            
            
        </div>
        );
}

export default App;

