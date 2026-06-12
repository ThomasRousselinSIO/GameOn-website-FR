function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
const closeBtn = document.querySelector(".close");
closeBtn.addEventListener("click", closeModal);


// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

//initialisation des variables pour la validation du formulaire

const firstName = document.getElementById("prénom");
const lastName = document.getElementById("nom");
const email = document.getElementById("email");
const birthdate = document.getElementById("anniversaire");
const competitionNumber = document.getElementById("concours");
const location = document.getElementById("Ville");
const UserConditions = document.getElementById("CGU");

//limitation du texte à 2 caractères pour les champs prénom et nom

firstName.value.length >= 2 && lastName.value.length >= 2

//validation du champ prénom
if (firstName.value === "") {
  firstName.parentElement.setAttribute(
    "data-error",
    "Veuillez renseigner votre prénom"
  );
  firstName.parentElement.setAttribute("data-error-visible", "true");
}

//validation du champ nom

if (lastName.value === "") {
  lastName.parentElement.setAttribute(
    "data-error",
    "Veuillez renseigner votre nom"
  );
  lastName.parentElement.setAttribute("data-error-visible", "true");
}

//validation de l'email
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


//validation du champ birthdate
if (birthdate.value === "") {
  birthdate.parentElement.setAttribute(
    "data-error",
    "Veuillez renseigner votre date de naissance"
  );
  birthdate.parentElement.setAttribute("data-error-visible", "true");
}

const competitionNumber = document.getElementById("quantity");

if (competitionNumber.value === "" || isNaN(competitionNumber.value)) {
  competitionNumber.parentElement.setAttribute(
    "data-error",
    "Veuillez entrer un nombre valide"
  );
  competitionNumber.parentElement.setAttribute("data-error-visible", "true");
}

//validation du champ location
const locations = document.querySelectorAll(
  'input[name="location"]'
);

let citySelected = false;

// Vérification si une ville est sélectionnée
locations.forEach((location) => {
  if (location.checked) {
    citySelected = true;
  }
});

if (!citySelected) {
  document
    .querySelector(".location-container")
    .setAttribute(
      "data-error",
      "Veuillez sélectionner une ville"
    );

  document
    .querySelector(".location-container")
    .setAttribute("data-error-visible", "true");
}


//validation du champ CGU
const UserConditions = document.getElementById("checkbox1");

if (!UserConditions.checked) {
  UserConditions.parentElement.setAttribute(
    "data-error",
    "Vous devez accepter les conditions d'utilisation"
  );

  UserConditions.parentElement.setAttribute(
    "data-error-visible",
    "true"
  );
}

