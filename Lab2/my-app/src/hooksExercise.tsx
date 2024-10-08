import React, { useState } from 'react';
import './App.css';
import { themes } from './themeContext'; 

interface AddToFavProps {
    favList: string[];
    setFavList: React.Dispatch<React.SetStateAction<string[]>>
    title: string; 
}

interface ToggleThemeProps {
    currentTheme:{
        foreground: string;
        background: string;
    }
    setCurrentTheme: React.Dispatch<React.SetStateAction<{
        foreground: string;
        background: string;
    }>>
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

function ToggleTheme({ currentTheme, setCurrentTheme }: ToggleThemeProps) {
    const toggleTheme = () => {
        setCurrentTheme(currentTheme === themes.light ? themes.dark : themes.light);
    };
    return (
      <button className="toggleTheme" onClick={toggleTheme}>
        Toggle Theme
      </button>
    );
  }

export { AddToFav };
export default ToggleTheme;



