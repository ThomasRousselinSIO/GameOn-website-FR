// Menu mobile
function editNav() {
  var nav = document.getElementById("myTopnav");

  if (nav.className === "topnav") {
    nav.className += " responsive";
  } else {
    nav.className = "topnav";
  }
}

// Ouverture / fermeture modale
var modal = document.querySelector(".bground");
var modalBtn = document.querySelectorAll(".modal-btn");
var closeBtn = document.querySelector(".close");
var form = document.querySelector("form");

modalBtn.forEach(function (btn) {
  btn.addEventListener("click", function () {
    modal.style.display = "block";
  });
});

closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

// Afficher une erreur
function afficherErreur(input, message) {
  var formData = input.parentElement;
  formData.setAttribute("data-error", message);
  formData.setAttribute("data-error-visible", "true");
}

// Enlever les erreurs
function enleverErreurs() {
  var erreurs = document.querySelectorAll(".formData");

  erreurs.forEach(function (erreur) {
    erreur.removeAttribute("data-error");
    erreur.removeAttribute("data-error-visible");
  });
}

// Validation du formulaire
function validate() {
  enleverErreurs();
  //prenom, nom, email, date de naissance, nombre, ville choisie, conditions générales
  var first = document.getElementById("first");
  var last = document.getElementById("last");
  var email = document.getElementById("email");
  var birthdate = document.getElementById("birthdate");
  var quantity = document.getElementById("quantity");
  var checkbox1 = document.getElementById("checkbox1");
  var locations = document.querySelectorAll("input[name='location']");

  var valide = true;
  //Validation du prénom
  if (first.value.trim().length < 2) {
    afficherErreur(first, "Le prénom doit contenir au moins 2 caractères.");
    valide = false;
  }
  //Validation du nom
  if (last.value.trim().length < 2) {
    afficherErreur(last, "Le nom doit contenir au moins 2 caractères.");
    valide = false;
  }
  //Validation de l'email
  if (email.value.trim() === "" || !email.value.trim().includes("@")) {
    afficherErreur(email, "Veuillez entrer un email valide.");
    valide = false;
  }
  //Validation de la date de naissance
  if (birthdate.value === "") {
    afficherErreur(birthdate, "Veuillez entrer une date de naissance.");
    valide = false;
  }
  //Validation du nombre de tournois
  if (quantity.value === "" || quantity.value < 0) {
    afficherErreur(quantity, "Veuillez entrer un nombre valide.");
    valide = false;
  }

  var villeChoisie = false;
 
  locations.forEach(function (location) {
    if (location.checked) {
      villeChoisie = true;
    }
  });
  
  if (villeChoisie === false) {
    afficherErreur(locations[0], "Veuillez choisir une ville.");
    valide = false;
  }

  if (checkbox1.checked === false) {
    afficherErreur(checkbox1, "Vous devez accepter les conditions.");
    valide = false;
  }

  if (valide === true) {
  form.style.display = "none";

  document.querySelector(".modal-body").innerHTML = `
    <div style="text-align:center; padding-top:150px;">
      <p>Merci! Votre réservation a bien été reçue.</p>

      <button
        class="btn-submit"
        type="button"
        onclick="location.reload()"
      >
        Fermer
      </button>
    </div>
  `;
}

  return false;
}