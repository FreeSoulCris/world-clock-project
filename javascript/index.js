function updateTime() {
  // Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesCurrentTime = moment().tz("America/Los_Angeles");
    losAngelesDateElement.innerHTML =
      losAngelesCurrentTime.format("MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = `${losAngelesCurrentTime.format(
      "H:mm:ss "
    )}<small>${losAngelesCurrentTime.format("A")}</small>`;
  }

  // Barcelona
  let barcelonaElement = document.querySelector("#barcelona");
  if (barcelonaElement) {
    let barcelonaDateElement = barcelonaElement.querySelector(".date");
    let barcelonaTimeElement = barcelonaElement.querySelector(".time");
    let barcelonaCurrentTime = moment().tz("Europe/Madrid");
    barcelonaDateElement.innerHTML =
      barcelonaCurrentTime.format("MMMM Do YYYY");
    barcelonaTimeElement.innerHTML = barcelonaCurrentTime.format(
      "H:mm:ss [<small>]A[</small>]"
    );
  }
}

let cityTimeZone;

function updateSpecificCityTime() {
  let selectedCityElement = document.querySelector("#selectedCity");
  if (selectedCityElement) {
    let selectedCityDateElement = selectedCityElement.querySelector(".date");
    let selectedCityTimeElement = selectedCityElement.querySelector(".time");
    let selectedCityCurrentTime = moment().tz(cityTimeZone);
    selectedCityDateElement.innerHTML =
      selectedCityCurrentTime.format("MMMM Do YYYY");
    selectedCityTimeElement.innerHTML = `${selectedCityCurrentTime.format(
      "H:mm:ss "
    )}<small>${selectedCityCurrentTime.format("A")}</small>`;
  }
}

function updateCity(event) {
  cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");

  citiesElement.innerHTML = `
    <div class="city" id="selectedCity">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
      </div>
      <div class="time">${cityTime.format("H:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
    </div>
    <a href="index.html" style="text-decoration:none; color:black; text-shadow: 4px 3px 0px rgba(205, 172, 129, 0.3); font-size:26px">All cities <small style="font-size:16px">⟲</small></a>
  `;

  setInterval(updateSpecificCityTime, 1000);
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city-selector");
citiesSelectElement.addEventListener("change", updateCity);
