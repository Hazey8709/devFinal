import profile from "./data/user";
import axios from "axios";
//import PokeApi from "./data/pokemon";

fetch("https://pokeapi.co/api/v2/pokemon/")
    .then((res) => {
        console.log(res);
        return res.json();
    })
    .then((data) => console.log( data ))(() => {
    //console.log(res);
})();
