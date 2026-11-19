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

// Opsamlingsside
const opsamlingPlaceholder = document.querySelector(".opsamling-placeholder");

if (opsamlingPlaceholder) {
  const params = new URLSearchParams(window.location.search);

  // navn

  // Eksempel: params.get("navn") henter værdien fra et formularfelt med name="navn".
  const navnOutput = document.querySelector(".navn-output");
  const navn = params.get("navn");

  //document.querySelector(".navn-output").textContent = params.get("navn")
  navnOutput.textContent = navn;

  // alder

  const alderOutput = document.querySelector(".alder-output");
  const alder = params.get("alder");
  alderOutput.textContent = alder;

  // Yndlingsmusik
  const musikOutput = document.querySelector(".musik-output");
  const musik = params.get("musik");
  musikOutput.textContent = musik;

  // Yndlingsdrink
  const drinkOutput = document.querySelector(".drink-output");
  const drink = params.get("drink");
  drinkOutput.textContent = drink;

  // Humør
  const humørOutput = document.querySelector(".humør-output");
  const humør = params.get("humør");
  humørOutput.textContent = humør;

  // Hvad glæder du dig til?
  const excitedOutput = document.querySelector(".exited-output");
  const excited = params.get("excited");
  excitedOutput.textContent = excited;
}
