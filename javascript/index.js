function updateTime() {
  // Los Angeles
  //Selecciono en el doc HTML el elemento con id los Angeles para reemplazar los datos utilizando innerHTML. Clases date y time.

  let losAngelesElement = document.querySelector("#los-angeles");

  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");

    let losAngelesTimeElement = losAngelesElement.querySelector(".time");

    //llamada a la api de moment js para la info de fecha, hora y timezone
    let losAngelesCurrentTime = moment().tz("America/Los_Angeles");

    //Tras vincular moment.js en index.html, cambio los elementos date y time para que aparezcan datos reales que provienen de la API de moment.js
    losAngelesDateElement.innerHTML = moment().format("MMMM Do YYYY");

    // Opcion 1: con interporlación
    losAngelesTimeElement.innerHTML = `${losAngelesCurrentTime.format(
      "H:mm:ss "
    )}<small>${losAngelesCurrentTime.format("A")}</small>`;
  }
  //OPCION 2 para actualizar el tiempo cada segundo:

  // BARCELONA
  //Selecciono en el doc HTML el elemento con id los Angeles para reemplazar los datos utilizando innerHTML. Clases date y time.

  let barcelonaElement = document.querySelector("#barcelona");
  if (barcelonaElement) {
    let barcelonaDateElement = barcelonaElement.querySelector(".date");

    let barcelonaTimeElement = barcelonaElement.querySelector(".time");

    let barcelonaCurrentTime = moment().tz("Europe/Madrid");

    //Tras vincular moment.js en index.html, cambio los elementos date y time para que aparezcan datos reales que provienen de la API de moment.js
    barcelonaDateElement.innerHTML = moment().format("MMMM Do YYYY");

    barcelonaTimeElement.innerHTML = moment().format("H:mm:ss A");

    //Opción 2: más simple y limpia que con interpolación
    barcelonaTimeElement.innerHTML = barcelonaCurrentTime.format(
      "H:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");

  citiesElement.innerHTML = `<div class="city">
  <div>
  <h2>${cityName}</h2>
  <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
  </div>
  <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
 <a href="index.html" style="text-decoration:none; color:black; text-shadow: 4px 3px 0px rgba(205, 172, 129, 0.3); font-size:26px">All cities <small style= "font-size:16px">⟲ </small></a> 
  `;
}
updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city-selector");

citiesSelectElement.addEventListener("change", updateCity);
