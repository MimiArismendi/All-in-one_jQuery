function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 19.4303341116379, lng: -99.12551879882812},
          zoom: 8
  });
    }

var cargarPagina = function () {
	$("#ubicacionActual").click(obtenerUbicacion);
};

var obtenerUbicacion = function (e) {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(mostrarPosicion);
	} else {
		alert("Actualice su navegador");
	}
};

var mostrarPosicion = function (posicion) {
	console.log(posicion);
	// alert("Latitud: " + posicion.coords.latitude);
	// alert("Longitud: " + posicion.coords.longitude);

	var coordenadas = {
		lat: posicion.coords.latitude, 
		lng: posicion.coords.longitude
	};
	mostrarMapa(coordenadas);
};

var mostrarMapa = function (coordenadas) {
	var map = new google.maps.Map($('#map')[0], {
      zoom: 17,
      center: coordenadas
    });
    var marker = new google.maps.Marker({
      position: coordenadas,
      map: map
    });
}

$(document).ready(cargarPagina);


