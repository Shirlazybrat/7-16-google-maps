// API key: AIzaSyAKmlTdiLyHOVLNro9pGoqbt5m7JjXM_NY

var googleMapsApp = angular.module("googleMapsApp", []);
googleMapsApp.controller('googleMapsController', function($scope, $http){


    var myLatlng = {lat: 40.000, lng: -98.000};

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: myLatlng
    });


    var markers = [];

    function createMarker(city){
    	var cityLatlng = {lat: city.lat, lng: city.lon};
	    var marker = new google.maps.Marker(
	        {
	          position: cityLatlng,
	          map: map,
	          title: city.city
	        }
	    );

	    var infowindow = new google.maps.InfoWindow({
          content: city.city
        });

		    google.maps.event.addListener(marker, 'click', function(){
		    	infowindow.open(map, marker);
		    });
		    markers.push(marker);

	  }


	  $scope.triggerClick = function(index){
	  	google.maps.event.trigger(markers[index], "click");
	  }
		$scope.cities = cities;
		for(var i = 0; i<$scope.cities.length; i++){
			createMarker($scope.cities[i])
	}

});