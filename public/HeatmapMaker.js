

function createHeatmap(weightedCoords, map) {
	
	var heatmapCoords = [];
	
	//take each of our weighted coordinates convert them to a weightedLocation object and push them onto an array
	for( i = 0 ; i < weightedCoords.length ; i++ ){
		heatmapCoords.push({location: new google.maps.LatLng(weightedCoords[i][0], weightedCoords[i][1]), weight: weightedCoords[i][2]});
	}
	
	var heatmap = new google.maps.visualization.HeatmapLayer({
		data: heatmapCoords
	});

	heatmap.setMap(map);
}
