import profile from "./data/user";

//! gets data but doesn't print to browser
const pokeUsers = [];

fetch("https://pokeapi.co/api/v2/pokemon/")
    .then((res) => {
        //console.log(res);
        return res.json();
    })
    .then((data) => {
        //console.log(res);
        pokeUsers.push(data.results);
    });

const buildPokemon = (pokeUsers) => {
    //console.log("In function build Pokemon", pokeUsers);
    const usersContainer = document.getElementById("pokeUsers");
    usersContainer.innerText = "";

    for (let i = 0; i < 20; i++) {
        const userList = document.createElement("section");

        const nameTitle = document.createElement("h3");
        const name = document.createElement("p");

        nameTitle.innerText = "Pokemon-Name: ";
        name.innerText = pokeUsers[0].name;

        userList.appendChild(nameTitle);
        userList.appendChild(name);
        console.log("in for loop:", pokeUsers[i].name);

        usersContainer.appendChild(userList);
    }
};

const buildUsers = (profile, pokeUsers) => {
    buildFakerUser(profile);
    buildPokemon(pokeUsers);
};

const buildFakerUser = (profile) => {
    const profileContainer = document.getElementById("fakerUser");
    profileContainer.innerText = "";

    const userSection = document.createElement("section");

    const avatar = document.createElement("img");
    const nameTitle = document.createElement("h3");
    const name = document.createElement("p");
    const emailTitle = document.createElement("h3");
    const email = document.createElement("p");
    const userIdTitle = document.createElement("h3");
    const userId = document.createElement("p");
    const birthdateTitle = document.createElement("h3");
    const birthdate = document.createElement("p");
    const vehicleTitle = document.createElement("h3");
    const vehicle = document.createElement("p");

    avatar.src = profile.avatar;

    nameTitle.innerText = "Name: ";
    name.innerText = profile.name;
    emailTitle.innerText = "Email: ";
    email.innerText = profile.email;
    userIdTitle.innerText = "User-Id: ";
    userId.innerText = profile.userId;
    birthdateTitle.innerText = "Birthdate: ";
    birthdate.innerText = profile.birthdate;
    vehicleTitle.innerText = "Vehicle: ";
    vehicle.innerText = profile.vehicle;

    userSection.appendChild(avatar);
    userSection.appendChild(nameTitle);
    userSection.appendChild(name);
    userSection.appendChild(emailTitle);
    userSection.appendChild(email);
    userSection.appendChild(userIdTitle);
    userSection.appendChild(userId);
    userSection.appendChild(birthdateTitle);
    userSection.appendChild(birthdate);
    userSection.appendChild(vehicleTitle);
    userSection.appendChild(vehicle);

    profileContainer.appendChild(userSection);
};

(() => {
    console.log(pokeUsers);
    //console.log(".then-data", pokeUsers);
    //console.log("Profile:", profile);
    buildUsers(profile);
})();
