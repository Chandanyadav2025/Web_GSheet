const scriptURL =
  "https://script.google.com/macros/s/AKfycbydtsJezRSrb6yKEXSbgyQVPLybvQu9JpiVFMlQ6Qk0azdDTyrtW6sj2Bn_KE-8EIXLMg/exec";

const form = document.forms["contact-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => alert("Thank you! Form is submitted"))
    .then(() => {
      window.location.reload();
    })
    .catch((error) => console.error("Error!", error.message));
});
