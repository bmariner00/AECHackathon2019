function showScale(min, max, controlUI){
    newDiv = document.createElement('div');   //create a div
    //newDiv.id = 'scale';                      //add an id
	
	newDiv.style.backgroundImage = 'GradientBar.png';
	newDiv.style.position = 'relative';
	newDiv.style.top = '50%';
	newDiv.style.bottom = '50%';
	newDiv.style.marginTop = '-50px';
	newDiv.style.marginBottom = '-50px';
	newDiv.style.height = '100px';
	newDiv.style.width = '100px';
	newDiv.style.zIndex = '20';
	//newDiv.style.align = 'center';
	
	var mapDiv = document.getElementById('map');
	mapDiv.appendChild(newDiv);
	
	
}
