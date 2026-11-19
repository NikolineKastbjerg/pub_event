// Interaktiv SVG-side
const svgBar = document.querySelector(".svg-bar");

if (svgBar) {
  const bootleggers = document.querySelector("#details-bootleggers");
  const farfars = document.querySelector("#details-farfars");
  const sorens_veartshus = document.querySelector("#details-sorens_veartshus");

  bootleggers.addEventListener("toggle", updateSvgPosition);
  farfars.addEventListener("toggle", updateSvgPosition);
  sorens_veartshus.addEventListener("toggle", updateSvgPosition);

  function updateSvgPosition() {
    console.log("updateSvgPosition");
    const openDetails = document.querySelector(".accordion-item:open");

    if (openDetails) {
      //hvis der er en åben
      // console.log(openDetails.dataset.position);

      svgBar.dataset.position = openDetails.dataset.bar;
    } else {
      //hvis de rikke er nogen åben
      delete svgBar.dataset.position;
    }
  }
}
// Form
const form = document.querySelector("form");

if (form) {
  function cancelPopup(event) {
    event.preventDefault();
    form.querySelector(":invalid").focus();
  }

  form.addEventListener("invalid", cancelPopup, true);
}

// Opsamlingsside
const opsamlingPlaceholder = document.querySelector(".opsamling-placeholder");

if (opsamlingPlaceholder) {
  const params = new URLSearchParams(window.location.search);
  // Eksempel: params.get("navn") henter værdien fra et formularfelt med name="navn".
  //document.querySelector(".navn-output").textContent = params.get("navn")

  // Hent værdier fra formularen
  const navn = params.get("navn");
  const alder = params.get("alder");
  const musik = params.get("musik");
  const drink = params.get("drink");
  const humearValue = params.get("humear");
  const reason = params.get("reason");
  const color = params.get("color");

  // Find elementerne på navneskiltet
  const navnOutput = document.querySelector(".navn-output");
  const alderOutput = document.querySelector(".alder-output");
  const musikOutput = document.querySelector(".musik-output");
  const drinkOutput = document.querySelector(".drink-output");
  const humearOutput = document.querySelector(".humear-output");
  const reasonOutput = document.querySelector(".reason-output");

  // Indsæt værdierne
  navnOutput.textContent = navn;
  alderOutput.textContent = alder;
  musikOutput.textContent = musik;
  drinkOutput.textContent = drink;
  reasonOutput.textContent = reason;
  opsamlingPlaceholder.dataset.color = color;

  // Bestem humøret
  if (humearValue >= 75) {
    humearOutput.textContent = "Højt";
  } else if (humearValue >= 50) {
    humearOutput.textContent = "Middel";
  } else {
    humearOutput.textContent = "Lavt";
  }
}
