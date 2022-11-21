import profile from "./data/user";
import axios from 'axios'
//import PokeApi from "./data/pokemon";

const PokeApi = axios.get("https://pokeapi.co/api/v2/pokemon/").then((res) => {
    res.results;
});

(() => {
    //console.log(res);
    console.log("faker:", profile);
    console.log("Pokemon:", PokeApi);
    console.log("HERE", PokeApi);
})();
