import * as React from "react";
import "./App.css";
import { useState, useEffect, createContext } from "react";

export const AppContext = createContext(null);

function AppProvider({children}) {

    const [pokeList1, setList1] = useState([]);
    const [pokeList2, setList2] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [isFav, setIsFav] = useState([]);

    function addFavorite(pokemonObj){
        if (!favorites.includes(pokemonObj)) {
            setFavorites(favorites.concat(pokemonObj));
            setIsFav(isFav.concat(pokemonObj.name));
        } 
    }

    function removeFavorite(pokemonObj){
        let index = favorites.indexOf(pokemonObj);
        let temp = [...favorites.slice(0, index), ...favorites.slice(index + 1)];
        setFavorites(temp);
        let index2 = isFav.indexOf(pokemonObj.name);
        let temp2 = [...isFav.slice(0, index2), ...isFav.slice(index2 + 1)];
        setIsFav(temp2);
    }

    function getJSON(res) {
        return res.json();
    }

    useEffect(() => {
        let isMounted = true
        async function fetchPokemonList1() {
            // for (let i=1; i < 10; i++){
            // const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
            // const data = await getJSON(res);
            // setList1((prevState) => ([...prevState, data]));
            // }
            let pokeArray = [1,4,7,152,155,158,252,255,258,387,390,393]
            for (let i of pokeArray){
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
                const data = await getJSON(res);
                setList1((prevState) => ([...prevState, data]));
            }
        }
        fetchPokemonList1();
    }, []);

    useEffect(() => {
        let isMounted = true
        async function fetchPokemonList2() {
            for (let i=1; i < 152; i++){
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
            const data = await getJSON(res);
            setList2((prevState) => ([...prevState, data]));
            }
        }
        fetchPokemonList2();
    }, []);

    const valueObj = {
        pokeList1,
        pokeList2,
        setList1,
        setList2,
        favorites,
        setFavorites,
        isFav,
        setIsFav,
        addFavorite, 
        removeFavorite,
    };

    return (
        <div className="App-provider">
            <AppContext.Provider value={valueObj}>
                {children}
            </AppContext.Provider>
        </div>
    );
}

export default AppProvider;
