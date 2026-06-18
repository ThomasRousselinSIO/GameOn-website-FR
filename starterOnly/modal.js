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
function showErrors(input, message) {
  var formData = input.parentElement;
  formData.setAttribute("data-error", message);
  formData.setAttribute("data-error-visible", "true");
}

// Enlever les erreurs
function clearErrors() {
  var errors = document.querySelectorAll(".formData");

  errors.forEach(function (error) {
    error.removeAttribute("data-error");
    error.removeAttribute("data-error-visible");
  });
}

// Validation du formulaire
function validate() {
  console.log("Validation en cours...");
  clearErrors();
  //prenom, nom, email, date de naissance, nombre, ville choisie, conditions générales
  var first = document.getElementById("first");
  var last = document.getElementById("last");
  var email = document.getElementById("email");
  var birthdate = document.getElementById("birthdate");
  var quantity = document.getElementById("quantity");
  var checkbox1 = document.getElementById("checkbox1");
  var locations = document.querySelectorAll("input[name='location']");

  var validate = true;
  //Validation du prénom
  if (first.value.trim().length < 2) {
    showErrors(first, "Le prénom doit contenir au moins 2 caractères.");
    validate = false;
  }
  //Validation du nom
  if (last.value.trim().length < 2) {
    showErrors(last, "Le nom doit contenir au moins 2 caractères.");
    validate = false;
  }
  //Validation de l'email
  if (email.value.trim() === "" || !email.value.trim().includes("@")) {
    showErrors(email, "Veuillez entrer un email valide.");
    validate = false;
  }
  //Validation de la date de naissance
  if (birthdate.value === "") {
    showErrors(birthdate, "Veuillez entrer une date de naissance.");
    validate = false;
  }
  //Validation du nombre de tournois
  if (quantity.value === "" || quantity.value < 0) {
    showErrors(quantity, "Veuillez entrer un nombre valide.");
    validate = false;
  }

  var chosenCity = false;
 
  locations.forEach(function (location) {
    if (location.checked) {
      chosenCity = true;
    }
  });
  
  if (chosenCity === false) {
    showErrors(locations[0], "Veuillez choisir une ville.");
    validate = false;
  }

  if (checkbox1.checked === false) {
    showErrors(checkbox1, "Vous devez accepter les conditions.");
    validate = false;
  }

  if (validate === true) {
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