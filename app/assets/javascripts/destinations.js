$(document).ready(function (){
  function initialize() {
  var myLatlng = new google.maps.LatLng(latitude, longitude);
  var mapOptions = {
    zoom: 8,
    center: myLatlng
  };

  var map = new google.maps.Map(document.getElementById('destination-map'), mapOptions);

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: address
  });

  var contentString = '<h2>' + address + '</h2>' + '<p>' + description + '</p>';

  var infowindow = new google.maps.InfoWindow({
      content: contentString
  });


  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });
}

google.maps.event.addDomListener(window, 'load', initialize);

});
