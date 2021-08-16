import React, {useEffect, useState} from 'react';
import './App.css';



 function App() {

     const [result, setResult] = useState<[]>();
     let data = [];

const  fetchCrypto = async () => {
    try {
        const response = await fetch(`https://api.nomics.com/v1/currencies?key=bf98d6b1cc552f8bbe69c2204f9a3652&ids=ethereum&convert=EUR&attributes=id,name,logo_url,description,reddit_url`);

        data = await response.json();

        setResult(data);

      //  console.log(result[0])
    } catch (err) {
        console.error(err);
    }
}

useEffect(()=> {
    fetchCrypto();
}, [])


    return (
        <div className="App">
            <header className="App-header">

            </header>
        </div>
    );
}

export default App;
