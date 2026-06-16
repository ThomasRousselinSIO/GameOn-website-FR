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

  var first = document.getElementById("first");
  var last = document.getElementById("last");
  var email = document.getElementById("email");
  var birthdate = document.getElementById("birthdate");
  var quantity = document.getElementById("quantity");
  var checkbox1 = document.getElementById("checkbox1");
  var locations = document.querySelectorAll("input[name='location']");

  var valide = true;

  if (first.value.length < 2) {
    afficherErreur(first, "Le prénom doit contenir au moins 2 caractères.");
    valide = false;
  }

  if (last.value.length < 2) {
    afficherErreur(last, "Le nom doit contenir au moins 2 caractères.");
    valide = false;
  }

  if (email.value === "" || !email.value.includes("@")) {
    afficherErreur(email, "Veuillez entrer un email valide.");
    valide = false;
  }

  if (birthdate.value === "") {
    afficherErreur(birthdate, "Veuillez entrer une date de naissance.");
    valide = false;
  }

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
    modal.innerHTML = `
      <div class="content">
        <span class="close" onclick="location.reload()">×</span>
        <div class="modal-body">
          <p style="color:white; text-align:center; font-size:24px; margin-top:200px;">
            Merci ! Votre réservation a bien été envoyée.
          </p>
          <button class="btn-submit" onclick="location.reload()">Fermer</button>
        </div>
      </div>
    `;
  }

  return false;
}