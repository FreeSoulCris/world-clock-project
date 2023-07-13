function updateTime() {
  // Los Angeles
  //Selecciono en el doc HTML el elemento con id los Angeles para reemplazar los datos utilizando innerHTML. Clases date y time.

  let losAngelesElement = document.querySelector("#los-angeles");

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

  //OPCION 2 para actualizar el tiempo cada segundo:

  // BARCELONA
  //Selecciono en el doc HTML el elemento con id los Angeles para reemplazar los datos utilizando innerHTML. Clases date y time.

  let barcelonaElement = document.querySelector("#barcelona");

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
updateTime();
setInterval(updateTime, 1000);
