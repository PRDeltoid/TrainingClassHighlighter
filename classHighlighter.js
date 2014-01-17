var dayFilterObj;
var dayFilterObjArray = [];
var timeFilterObj;
var timeFilterObjArray = [];
var otherFilterObj;
var otherFilterObjArray = [];

function dayFilterObj(stateIn,filterValueIn) {
	this.state = stateIn;
	this.filterValue = filterValueIn;
}

function timeFilterObj(stateIn,filterValueIn) {
	this.state = stateIn;
	this.filterValue = filterValueIn;
}

function otherFilterObj(stateIn,filterValueIn) {
	this.state = stateIn;
	this.filterValue = filterValueIn;
}

$(document).ready(function(){ 	
	initializeFilterArrays();
	
	$('.filterButton').on('click',function() {		
		changeFilterState(this);
		wipeHighlights();
		$(determineHighlightFilters()).addClass("highlightClass");
	});	
});

/*function determineHighlightFilters() {

	var filterText = "";
	var dayFilterCounter = 0;

	dayFilterArrayLength = dayFilterObjArray.length-1;
	timeFilterArrayLength = timeFilterObjArray.length-1;
	otherFilterArrayLength = otherFilterObjArray.length-1;
	
	for(var it3=0;it3 <= dayFilterArrayLength;it3++) {
		//determine if the day-of-the-week filter is true
		if(dayFilterObjArray[it3].state == true) {
			dayFilterCounter++;
			if(dayFilterCounter >= 2 && dayFilterCounter < dayFilterArrayLength+1) {
				filterText = filterText + ",";
			}
			//If true, add the filter value, and then determine time-of-day filters
			if(checkTimeFilterSet() == true) {
				var timeFilterCounter = 0;
				for(var it2=0;it2<=timeFilterArrayLength;it2++) {
					//If true, add to the last line				
					if(timeFilterObjArray[it2].state==true) {						
						timeFilterCounter++;
						if(timeFilterCounter >= 2) {
							// add an "OR" comma to separate different times for a single day (ie: ".monday.615,.monday.730" if both 6:15 and 7:30 are selected
							filterText = filterText + ",";	
						}
						filterText = filterText + dayFilterObjArray[it3].filterValue + timeFilterObjArray[it2].filterValue;
						for(var it4=0;it4<=otherFilterArrayLength;it4++) {
							otherFilterCounter = 0;
							if(otherFilterObjArray[it4].state==true) {
								if(otherFilterCounter >= 2) {
									filterText = filterText + ",";	
								}
							filterText = filterText + otherFilterObjArray[it4].filterValue;
							}
						}
					}
				}
			} else {
				filterText = filterText + dayFilterObjArray[it3].filterValue;
			}
			
		} else if (dayFilterObjArray[it3].state == false) { //IF THE DAY ISN'T SET, GO STRAIGHT INTO TIME FILTERS
			if(checkTimeFilterSet() == true) {
				var timeFilterCounter = 0;
				for(it2=0;it2<=timeFilterArrayLength;it2++) {
					//If true, add to the last line				
					if(timeFilterObjArray[it2].state==true) {						
						timeFilterCounter++;
						if(timeFilterCounter >= 2) {
							// add an "OR" comma to separate different times for a single day (ie: ".monday.615,.monday.730" if both 6:15 and 7:30 are selected
							filterText = filterText + ",";	
						}
						filterText = filterText + timeFilterObjArray[it2].filterValue;
						for(it4=0;it4<=otherFilterArrayLength;it4++) {
							otherFilterCounter = 0;
							if(otherFilterObjArray[it4].state==true) {
								if(otherFilterCounter >= 2) {
									filterText = filterText + ",";	
								}
							filterText = filterText + otherFilterObjArray[it4].filterValue;
							}
						}
					}
				}
			} else {		//IF TIME ISN'T SET, GO STRAIGHT TO MISC/OTHER FILTERS
				for(it4=0;it4<=otherFilterArrayLength;it4++) {
					otherFilterCounter = 0;
					if(otherFilterObjArray[it4].state==true) {
						if(otherFilterCounter >= 2) {
							filterText = filterText + ",";	
						}
						filterText = filterText + otherFilterObjArray[it4].filterValue;
					}
				}	
			}
		}
	}
	
	console.log(filterText);
	return filterText;
}*/

function determineHighlightFilters() {
	var filterValueArray = [];
	var compoundFilterValue = "";
	
	for(var dayIterator=0;dayIterator<dayFilterObjArray.length;dayIterator++) {
		if(dayFilterObjArray[dayIterator].state==true) {
			for(var timeIterator=0;timeIterator<timeFilterObjArray.length;timeIterator++) {				
				if(timeFilterObjArray[dayIterator].state==true) {
					filterValueArray[dayIterator] = dayFilterObjArray[dayIterator].filterValue;
				}
			}
		}
	}
	
	console.log(compoundFilterValue);
	return compoundFilterValue;
}

function checkTimeFilterSet() {
	//arrayLength = timeFilterObjArray.length-1;
	for(var it=0;it<timeFilterObjArray.length;it++) {
		if(timeFilterObjArray[it].state == true){	return true;	} 
	}	
	return false;
}

function wipeHighlights() {
	$(".highlightClass").removeClass("highlightClass");
}

function changeFilterState(buttonClicked) {
	var value = buttonClicked.value;
	switch(buttonClicked.id) {
		case 'dayButton':
			dayFilterObjArray[value].state = !dayFilterObjArray[value].state;
			console.log(dayFilterObjArray[value]);
			break;
		case 'timeButton':
			timeFilterObjArray[value].state = !timeFilterObjArray[value].state;
			console.log(timeFilterObjArray[value]);
			break;
		case 'otherButton':
			otherFilterObjArray[value].state = !otherFilterObjArray[value].state;
			console.log(otherFilterObjArray[value]);
			break;
		default: 
			console.log('Error: Unknown Button Type Selected');
			break;
	}
	return;	
}

function initializeFilterArrays() {
	//Initialize day and time filters with days of the week and class times. Default state is false for all flags
	dayFilterObjArray.push(new dayFilterObj(false,".monday"));
	dayFilterObjArray.push(new dayFilterObj(false,".tuesday"));
	dayFilterObjArray.push(new dayFilterObj(false,".wednesday"));
	dayFilterObjArray.push(new dayFilterObj(false,".thursday"));
	dayFilterObjArray.push(new dayFilterObj(false,".friday"));
	dayFilterObjArray.push(new dayFilterObj(false,".saturday"));
	
	timeFilterObjArray.push(new timeFilterObj(false,".1000"));
	timeFilterObjArray.push(new timeFilterObj(false,".1115"));
	timeFilterObjArray.push(new timeFilterObj(false,".615"));
	timeFilterObjArray.push(new timeFilterObj(false,".730"));
	
	
	otherFilterObjArray.push(new otherFilterObj(false,".smallbreed"));
	otherFilterObjArray.push(new otherFilterObj(false,".senior"));
}

