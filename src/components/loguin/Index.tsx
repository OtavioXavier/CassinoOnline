'use client';
import React, {useState} from 'react'
import Cadastro from './CadastroScreen';

export function getLocalStorage(key: string) {
    const data = window.localStorage.getItem(key);

    return JSON.parse(data!);
}

export function setLocalStorage(key: string, value: unknown) {
    const data = JSON.stringify(value);

    return window.localStorage.setItem(key, data);
}

const Storage = () => {
    const [data, setData] = useState();
     
    function handleGetLocalStorage() {
        const item = getLocalStorage('item_key');
        setData(item);
    }

    function handleSetLocalStorage() {
        setLocalStorage('item_key', 'Junior')
    }

    return (
        
        <div>
          <h2>Storage</h2>
          <p>{data}</p>
          <div className='flex gap-6'>
          <button className="bg-green-600 px-5 font-bold text-lg" onClick={handleSetLocalStorage}>Set</button>
          <button className="bg-green-600 px-5 font-bold text-lg" onClick={handleGetLocalStorage}>Get</button>
          </div>
        </div>
    );
};

export default Storage;