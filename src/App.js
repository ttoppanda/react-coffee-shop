import React from 'react';
import { useEffect  } from 'react';
import axios from 'axios';

function App() {
  useEffect(()=>{
    axios.get('https://localhost:3004/items/product')
    .then(res=>console.log(res.data)).catch(err=>console.log(err))
  }, [])
  return(
    <div className='App'>Trying Axios</div>
  )
}

export default App;
