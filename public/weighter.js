

function convertValuesToWeights(values, valueType) {
	
	//get max and min
	var max, min;
	if (valueType == "grade") {
		max = "A+";
		min = "E-";
	} else if (valueType == "yearBuilt" {
		max = Math.max.apply(Math, values.map(function(arr) {
			return arr[2];
		}));
		min = Math.min.apply(Math, values.map(function(arr) {
			return arr[2];
		}));
	}
	
	//convert values to weights
	for (value in values){
		if (valueType == "grade") {
			value[2] = convertBuildingGradeToWeight(value[2])
		} else if (valueType == "yearBuilt") {
			value[2] = convertYearBuiltToGrade(value[2], min)
		}
	}
	
	return [values, max, min];
}

function convertBuildingGradeToWeight(grade) {
	 switch(grade) {
		case "A+":
			return 0;
			break;
		case "A":
			return 1;
			break;
		case "A-":
			return 2;
			break;
		case "B+":
			return 3;
			break;
		case "B":
			return 4;
			break;
		case "B-":
			return 5;
			break;
		case "C+":
			return 6;
			break;
		case "C":
			return 7;
			break;
		case "C-":
			return 8;
			break;
		case "D+":
			return 9;
			break;
		case "D":
			return 10;
			break;
		case "D-":
			return 11;
			break;
		case "E+":
			return 12;
			break;
		case "E":
			return 13;
			break;
		case "E-":
			return 14;
			break;
		default:
			console.log("grade is null");
			break;
	 }
}

function convertYearBuiltToWeight(year, min) {
	return year - min;
	
}