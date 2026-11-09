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
  // Eksempel: params.get("navn") henter værdien fra et formularfelt med name="navn".
}
