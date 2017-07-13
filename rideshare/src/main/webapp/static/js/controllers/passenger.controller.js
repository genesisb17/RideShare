export let passengerController = function($scope, $http, $state, $location){

	$scope.logout = function() {
		// view that is the parent of all the main views

		$http.post('/logout', {})
		.then(function() {
			$location.path("/");
		})
		.catch(function(data) {
			console.log("Logout failed");
			self.authenticated = false;
		});
	};

	$scope.getActiveRequests = function() {
		$http.get('/ride/request/active')
		.then((res) => {
			console.log(res.data);
		})
	}

	$scope.getRequestHistory = function() {
		$http.get('/ride/request/history')
		.then((res) => {
			console.log(res.data);
		})
	}


	//global user
	let user;

	$scope.getDisplay = function() {
		let start = document.getElementById("fromPOI");
		let startText = start.options[start.selectedIndex].text;
		let destination = document.getElementById("toPOI");
		let destinationText = destination.options[destination.selectedIndex].text;
		document.getElementById("display").innerHTML = startText + " TO " + destinationText;
	};

	$http.get("user/me").then(function(response){
		// get current user
		user = response.data;
		console.log(user);
		
		//gets user main poi then sets the starting point
		//dropdown to the users main poi
		if(user.mainPOI == null){
			let userPOI = 'user1';
			$scope[userPOI] = true;
		}else{
			let userPOI = 'user'+user.mainPOI.poiId;
			$scope[userPOI] = true;
		}
	});

	$http.get('poiController').then(function(response){
		let allPOI = response.data;

		$scope.allMainPOI = allPOI;

		// get the current user main POI {lat: user.mainPOI.latitude, lng: user.mainPOI.longitude}
		let userMainPOI = {lat: 38.9533932, lng: -77.35044779};//user main poi check 

		// create markers for all the current POI
		let locations = [];
		for(let x = 0; x < response.data.length; x++){
			let temp = {lat: allPOI[x].latitude, lng: allPOI[x].longitude};
			locations.push(temp);
		};

		let labels = [];
		for(let x = 1; x < response.data.length+1; x++){
			labels.push(x.toString());
		}

		// used to initialize the google map
		function initMap() {
			var map = new google.maps.Map(document.getElementById('map'), {
				zoom: 15,
				center: userMainPOI
			});

			var infowindow = new google.maps.InfoWindow({
				content: "here"
			});

			// Add some markers to the map.
			// Note: The code uses the JavaScript Array.prototype.map() method
			// to create an array of markers based on a given "locations" array.
			// The map() method here has nothing to do with the Google Maps API.
			var markers = locations.map(function(location, i) {
				return new google.maps.Marker({
					position: location,
					label: labels[i],
//					icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
				});
			});

			for(let x = 0; x<markers.length; x++){
				// add event listener to each marker on the map
				markers[x].addListener('click',function(){
					// set each ng-selected value to false
					for(let x = 0; x<markers.length; x++){
						let temp = 'selected' + x;
						$scope[temp] = false;
					}
					markers[x].setIcon('http://maps.google.com/mapfiles/ms/icons/blue-dot.png');
					let temp = 'selected' + x;
					$scope[temp] = true;
					$scope.$apply();
				}, false);

			}

			// Add a marker cluster to manage the markers.
			var markerCluster = new MarkerClusterer(map, markers,
					{imagePath: '../js/googleMapAPI/m'});

		}

		// initialize the google map
		initMap();
	});
};
