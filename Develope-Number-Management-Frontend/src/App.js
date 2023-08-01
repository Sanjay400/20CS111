import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [urls,setUrls] = useState([""])
  const [inputChange,setInputChange] = useState(false)


  return (
   <div>
    <form method="GET" action="http://localhost:8008/numbers">
       {
        urls.map((url,index)=>{
          return (<input type="url" name="url" value={url} onChange={(e)=>{
                urls[index]=e.target.value;
                setInputChange(!inputChange);
          }}/>)
        })
       }
       <input type="submit"/>
    </form>
    <button onClick={()=>setUrls([...urls,""])}>Add New</button>
  </div>
  )
}

export default App;
