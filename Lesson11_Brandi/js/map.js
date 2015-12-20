
var myLatlng = new google.maps.LatLng(49.426215, 32.094889);

var mapOptions = {
    zoom: 15,
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
}
var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
var markerImage = new google.maps.MarkerImage(
    'images/marker.png',
    new google.maps.Size(40,40),
    new google.maps.Point(0,0),
    new google.maps.Point(0,33)
);
var marker = new google.maps.Marker({
    icon: markerImage,
    position: myLatlng,
    map: map,
});
google.maps.event.addListener(marker, 'mouseout', function() {
    marker.setIcon(markerImage);
});
marker.setMap(map);
mapOptions = {
    scrollwheel: false
};
var styles = [
    {
        stylers: [
            { hue: "#F5F5DC"},
            { saturation: -70 }
        ]
    },{
        featureType: "road",
        elementType: "geometry",
        stylers: [
            { lightness: 100 },
            { visibility: "simplified" }
        ]
    },{
        featureType: "poi",
        elementType: "labels",
        stylers: [
            { visibility: "off" }
        ]
    }
];

map.setOptions({styles: styles});
var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
