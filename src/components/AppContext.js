import * as React from "react";
import "./App.css";
import Home from "./Home.js";
import Pokemon from "./Pokemon.js";
import Types from "./Types.js";
import Favorites from "./Favorites.js";
import Cart from "./Cart.js";
import { Switch, Redirect, Route } from "react-router-dom";
import SearchAppBar from "./SearchAppBar.js";
import { useState, useEffect, useContext, createContext } from "react";
import RecipeReviewCard from "./RecipeReviewCard";
import App from "../App.js";

export const AppContext = createContext(null);

function AppProvider({children}) {

    // const [list1, setList1] = useState({
    //     pokeList1: [],
    // });

    // const [list2, setList2] = useState({
    //     pokeList2: [],
    // });

    const [pokeList1, setList1] = useState([]);
    const [pokeList2, setList2] = useState([]);

    const [favorites, setFavorites] = useState([]);


    function addFavorite(pokeName){
        setFavorites([...favorites, {pokeName}]);
    }

    function removeFavorite(pokeName){
        setFavorites(favorites.filter(favorite => favorite.name !== pokeName))
    }

    function isFavorite(pokeName) {
        let isFavorite = favorites.some(favorite => favorite.pokeName === pokeName)
        return (isFavorite)
    }

    function getJSON(res) {
        return res.json();
    }

    useEffect(() => {
        let isMounted = true
        async function fetchPokemonList1() {
            for (let i=1; i < 11; i++){
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
        addFavorite, 
        removeFavorite, 
        isFavorite
    };

    console.log(`pokeList1`, pokeList1)

    return (
    // <>
        <div className="App-provider">
        {/* <AppContext.Provider value={list1Context, list2Context, favoritesContext, favFuncContext}> */}
            <AppContext.Provider value={valueObj}>
                {children}
                {/* <App />
                <Pokemon />
                <Home />
                <Favorites />
                <RecipeReviewCard /> */}
            </AppContext.Provider>
        </div>
    // </>
    );
}

export default AppProvider;
