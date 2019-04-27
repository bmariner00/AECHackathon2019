// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()
var globalData

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://api.bridgedataoutput.com/api/v2/pub/parcels?access_token=b13541deb32b1b39777bd9883dcfc551', true)

request.onload = function () {
  // Begin accessing JSON data here
 
	console.log(request);
	var data = JSON.parse(this.response)
	globalData = data;
	//console.log(globalData);
	
}

function returnData(){
	return globalData;
}

// Send request
request.send()