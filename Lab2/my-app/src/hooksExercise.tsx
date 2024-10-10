import React, { useState } from 'react';
import './App.css';

interface AddToFavProps {
    favList: string[];
    setFavList: React.Dispatch<React.SetStateAction<string[]>>
    title: string; 
}

function AddToFav(prop:AddToFavProps) {
    const [isFav, setIsFav] = useState(false);

    const handleClick = () => {
    setIsFav(!isFav);

    if (prop.favList.includes(prop.title)) {
        prop.setFavList((prevFavList) => prevFavList.filter(item => item !== prop.title));
    } else{
        prop.setFavList((prevFavList) => [...prevFavList, prop.title])
    }
    };

    return (
    <button onClick={handleClick}>
        {isFav ? '❤️' : '♡' }
    </button>
    );
}

export default AddToFav 



