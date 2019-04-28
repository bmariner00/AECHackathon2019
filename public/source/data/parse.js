
//console.log("hello world");
// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()
var globalData

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://api.bridgedataoutput.com/api/v2/pub/parcels?access_token=b13541deb32b1b39777bd9883dcfc551&limit=200&poly=-122.3321, 47.6062, -122.3151,47.8209, -122.0326, 47.5301', true)

request.onload = function () {
  // Begin accessing JSON data here
 
	//console.log(request);
	var data = JSON.parse(this.response)
	globalData = data;
	//console.log(globalData);
	
}

function splitMap(coordinates){
	
	for(i = 0; i < coordinates.length; i++){
		////console.log("Lat/Lng coordinates: " + coordinates[i]);
	}
	////console.log((coordinates[2][1] - coordinates[0][1])/2);
	////console.log((coordinates[1][0] - coordinates[2][0])/2);
	
	var newPoints = [
					[coordinates[0][0], coordinates[0][1] + ((coordinates[2][1] - coordinates[0][1])/2)],
					[coordinates[2][0] - ((coordinates[2][0] - coordinates[1][0])/2), coordinates[2][1]],
					[coordinates[2][0] - ((coordinates[2][0] - coordinates[1][0])/2), coordinates[0][1] + ((coordinates[2][1] - coordinates[0][1])/2)],
					[coordinates[1][0], coordinates[0][1] + ((coordinates[2][1] - coordinates[0][1])/2)],
					[coordinates[0][0] - ((coordinates[2][0] - coordinates[1][0])/2), coordinates[0][1]],
					];
	////console.log(newPoints);
	/*
	for(i = 0; i < newPoints.length; i++){
												
		var myLatLng = {lat: newPoints[i][0], lng: newPoints[i][1]};
	
		var marker = new google.maps.Marker({
		position: myLatLng,
		map: map,
		title: 'Hello World!'
		});
	}
	*/
	/*
	[0]NE, [1]SW, [2]NW, [3]SE, [4]NW/NE, [5]NW/SW, [6]MID, [7]SW/SE, [8]NE/SE
	*/
	var splitMapPoints = [
						 [coordinates[0][0],coordinates[0][1]],
						 [coordinates[1][0],coordinates[1][1]],
						 [coordinates[2][0],coordinates[2][1]],
						 [coordinates[3][0],coordinates[3][1]],
						 [newPoints[0][0],newPoints[0][1]],
						 [newPoints[1][0],newPoints[1][1]],
						 [newPoints[2][0],newPoints[2][1]],
						 [newPoints[3][0],newPoints[3][1]],
						 [newPoints[4][0],newPoints[4][1]]
						 ];
	////console.log(splitMapPoints);
	return splitMapPoints;
}

function generateSplitMapQueryData(coordinates){
	var apiRequest1 = new XMLHttpRequest();
	var apiRequest2 = new XMLHttpRequest();
	var apiRequest3 = new XMLHttpRequest();
	var apiRequest4 = new XMLHttpRequest();
	
/*[0]NE, [1]SW, [2]NW, [3]SE, [4]NW/NE, [5]NW/SW, [6]MID, [7]SW/SE, [8]NE/SE*/
	var queryURL1 = "https://api.bridgedataoutput.com/api/v2/pub/parcels?access_token=b13541deb32b1b39777bd9883dcfc551&limit=200&poly=" 
	+ coordinates[4][1] + ", " + coordinates[4][0] + ", " 
	+ coordinates[5][1] + ", " + coordinates[5][0] + ", " 
	+ coordinates[2][1] + ", " + coordinates[2][0] + ", " 
	+ coordinates[6][1] + ", " + coordinates[6][0];
	var queryURL2 = "https://api.bridgedataoutput.com/api/v2/pub/parcels?access_token=b13541deb32b1b39777bd9883dcfc551&limit=200&poly=" 
	+ coordinates[6][1] + ", " + coordinates[6][0] + ", " 
	+ coordinates[1][1] + ", " + coordinates[1][0] + ", " 
	+ coordinates[5][1] + ", " + coordinates[5][0] + ", " 
	+ coordinates[7][1] + ", " + coordinates[7][0];
	var queryURL3 = "https://api.bridgedataoutput.com/api/v2/pub/parcels?access_token=b13541deb32b1b39777bd9883dcfc551&limit=200&poly=" 
	+ coordinates[0][1] + ", " + coordinates[0][0] + ", " 
	+ coordinates[6][1] + ", " + coordinates[6][0] + ", " 
	+ coordinates[4][1] + ", " + coordinates[4][0] + ", " 
	+ coordinates[8][1] + ", " + coordinates[8][0];
	var queryURL4 = "https://api.bridgedataoutput.com/api/v2/pub/parcels?access_token=b13541deb32b1b39777bd9883dcfc551&limit=200&poly=" 
	+ coordinates[8][1] + ", " + coordinates[8][0] + ", " 
	+ coordinates[7][1] + ", " + coordinates[7][0] + ", " 
	+ coordinates[6][1] + ", " + coordinates[6][0] + ", " 
	+ coordinates[3][1] + ", " + coordinates[3][0];

	apiRequest1.open('GET', queryURL1, false);
	apiRequest2.open('GET', queryURL2, false);
	apiRequest3.open('GET', queryURL3, false);
	apiRequest4.open('GET', queryURL4, false);
	
	var dataSet1;
	var dataSet2;
	var dataSet3;
	var dataSet4;

	apiRequest1.onload = function () {
	  // Begin accessing JSON data here
		var data1 = JSON.parse(this.response);
		dataSet1 = data1;
		
			apiRequest2.onload = function () {
		  // Begin accessing JSON data here
			var data2 = JSON.parse(this.response);
			dataSet2 = data2;
			
					apiRequest3.onload = function () {
					  // Begin accessing JSON data here
						var data3 = JSON.parse(this.response);
						dataSet3 = data3;
				
								apiRequest4.onload = function () {
							  // Begin accessing JSON data here
								var data4 = JSON.parse(this.response);
								dataSet4 = data4;
								
								console.log(dataSet1);
								console.log(dataSet2);
								console.log(dataSet3);
								console.log(dataSet4);
								
								var returnParcelData = [dataSet1.bundle[0].coordinates[0], dataSet1.bundle[0].coordinates[1], dataSet1.bundle[0].building[0].quality];

								for(i = 1; i < dataSet1.bundle.length; i++){
									returnParcelData.push([dataSet1.bundle[i].coordinates[0], dataSet1.bundle[i].coordinates[1], "A+"]);	
								}
								
								for(i = 0; i < dataSet2.bundle.length; i++){
									returnParcelData.push([dataSet2.bundle[i].coordinates[0], dataSet2.bundle[i].coordinates[1], "A+"]);	
								}
								
								for(i = 0; i < dataSet3.bundle.length; i++){
									returnParcelData.push([dataSet3.bundle[i].coordinates[0], dataSet3.bundle[i].coordinates[1], "A+"]);	
								}
								
								for(i = 0; i < dataSet4.bundle.length; i++){
									returnParcelData.push([dataSet4.bundle[i].coordinates[0], dataSet4.bundle[i].coordinates[1], "A+"]);	
								}
								
								/*returnParcelData is data compilation array*/
								console.log(returnParcelData);
								
							}
					}
			}
	}
	
	apiRequest1.send();
	apiRequest2.send();
	apiRequest3.send();
	apiRequest4.send();
}

function returnData(){
	return globalData;
}

// Send request
request.send()