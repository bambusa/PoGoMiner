function initMap() {
    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('map'), {
        center: config.center,
        scrollwheel: true,
        zoom: 14
    });

    // Create a marker and set its position.
    var marker = new google.maps.Marker({
        map: map,
        position: {lat: 51.0410467, lng: 13.7253138},
        title: 'Hello World!'
    });
}