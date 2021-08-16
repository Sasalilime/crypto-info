import React, {useEffect, useState} from 'react';
import {CryptoType} from "../../utils/interfaces";
import './Crypto.css';

const Crypto = () => {


    const [result, setResult] = useState<Array<CryptoType>>();
    let data: Array<CryptoType>;

    const fetchCrypto = async (api: string) => {
        try {
            const response = await fetch(api, {
                mode: 'no-cors'
            });

            data = await response.json();
            setResult(data);

        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        fetchCrypto(`https://api.nomics.com/v1/currencies?key=bf98d6b1cc552f8bbe69c2204f9a3652&ids=ETH&interval=1d,7d,365d&attributes=id,name,logo_url,description,reddit_url&convert=EUR`);
        console.log(result?.[0])
    }, [])

    return (
        <div>
            <div className="container">
                <p className="cryptoName">{result?.[0].name}</p>
                <img src={result?.[0].logo_url} alt="" className="cryptoLogo"/>
                <p>{result?.[0].description}</p>
                <p>{result?.[0].price}</p>
            </div>
        </div>
    );
};

export default Crypto;