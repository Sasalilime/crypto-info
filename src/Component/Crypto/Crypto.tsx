import React, {useEffect, useState} from 'react';
import {CryptoType, Currency} from "../../utils/interfaces";
import './Crypto.css';

const Crypto = () => {


    const [result, setResult] = useState<Array<CryptoType>>();
    const [result1, setResult1] = useState<Array<Currency>>();
    let data: Array<CryptoType>;
    let data1: Array<Currency>;


    const fetchCryptoIntro = async (api: string) => {
        try {
            const response = await fetch(api);

            data = await response.json();
            setResult(data);

        } catch (err) {
            console.error(err);
        }
    }

    const fetchCryptoInfo = async (api: string) => {
        try {
            const response = await fetch(api);

            data1 = await response.json();
            setResult1(data1);

        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        fetchCryptoIntro(`https://api.nomics.com/v1/currencies?key=bf98d6b1cc552f8bbe69c2204f9a3652&ids=ETH&interval=1d,7d,365d&attributes=id,name,logo_url,description,reddit_url&convert=EUR`);
        fetchCryptoInfo('https://api.nomics.com/v1/currencies/ticker?key=bf98d6b1cc552f8bbe69c2204f9a3652&ids=ETH&interval=1d,30d,365d&convert=EUR')
        console.log(result?.[0])
    }, [])

    return (
        <div>
            <div className="container">
                <p className="cryptoName">{result?.[0].name}</p>
                <img src={result?.[0].logo_url} alt="" className="cryptoLogo"/>
                <p className="description">{result?.[0].description}</p>
                <p>Price: {result1?.[0].price}</p>
                <a href="https://nomics.com" className="link">Crypto Market Cap & Pricing Data Provided By Nomics</a>
            </div>
        </div>
    );
};

export default Crypto;