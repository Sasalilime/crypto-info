import React, {useEffect, useRef, useState} from 'react';
import {CryptoType, Currency} from "../../utils/interfaces";
import './Crypto.css';

const Crypto = () => {


    const [result, setResult] = useState<Array<CryptoType>>();
    const [result1, setResult1] = useState<Array<Currency>>();
    let data: Array<CryptoType>;
    let data1: Array<Currency>;

    const descriptionEl = useRef<HTMLParagraphElement>(null);
    const closeEL = useRef<HTMLParagraphElement>(null);

    const toggleText = () => {
        // descriptionEl?.current?.classList.add('overlay');
        // descriptionEl?.current?.classList.remove('description');
        descriptionEl?.current?.classList.replace('description', 'overlay');
        if (closeEL.current)
            closeEL.current.style.display = 'flex';


    }

    const closeModal = () => {
        // descriptionEl?.current?.classList.add('description');
        // descriptionEl?.current?.classList.remove('overlay');
        descriptionEl?.current?.classList.replace('overlay', 'description');
        if (closeEL.current)
            closeEL.current.style.display = 'none';
    }


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
                <div ref={descriptionEl} className="description"><p
                    className="modal-content description-content">{result?.[0].description}</p>
                    <p ref={closeEL} className="modal-content close" onClick={closeModal}>X</p>
                </div>

                <div className="btn-container">
                    <button onClick={toggleText} className="btn">Voir plus</button>
                </div>
                <p className="price">Price: {result1?.[0].price}</p>
                <a href="https://nomics.com" className="link">Crypto Market Cap & Pricing Data Provided By
                    Nomics</a>
            </div>
        </div>
    );
};

export default Crypto;