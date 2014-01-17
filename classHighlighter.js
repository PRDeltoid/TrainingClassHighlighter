var dayFilterObj;
var dayFilterObjArray = [];
var timeFilterObj;
var timeFilterObjArray = [];
var otherFilterObj;
var otherFilterObjArray = [];

//object constructors
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

//Initialize day and time filters with days of the week and class times. Default state is false for all flags
dayFilterObjArray.push(new dayFilterObj(false,".monday"));
dayFilterObjArray.push(new dayFilterObj(false,".tuesday"));
dayFilterObjArray.push(new dayFilterObj(false,".wednesday"));
dayFilterObjArray.push(new dayFilterObj(false,".thursday"));
dayFilterObjArray.push(new dayFilterObj(false,".friday"));
dayFilterObjArray.push(new dayFilterObj(false,".saturday"));
//dayFilterObjArray.push(new dayFilterObj(false,".sunday"));

timeFilterObjArray.push(new timeFilterObj(false,".1000"));
timeFilterObjArray.push(new timeFilterObj(false,".1115"));
timeFilterObjArray.push(new timeFilterObj(false,".615"));
timeFilterObjArray.push(new timeFilterObj(false,".730"));


otherFilterObjArray.push(new otherFilterObj(false,".smallbreed"));
otherFilterObjArray.push(new otherFilterObj(false,".senior"));

$(document).ready(function(){ 
	//Highlight 10:00 classes
	$('#highlight1000').on('click', function() { 
		if(timeFilterObjArray[0].state == true) {
			timeFilterObjArray[0].state = false;			
			$(".activeFilterButton").filter("#highlight1000").removeClass("activeFilterButton");
		} else {
			timeFilterObjArray[0].state = true;
			$(".filterButton").filter("#highlight1000").addClass("activeFilterButton");			
		}		
		wipeHighlights();		
		$(determineHighlightFilters()).addClass("highlightClass");	
	}); 

	//Highlight 11:15 classes
	$('#highlight1115').on('click', function() { 
		if(timeFilterObjArray[1].state == true) {
			timeFilterObjArray[1].state = false;			
			$(".activeFilterButton").filter("#highlight1115").removeClass("activeFilterButton");
		} else {
			timeFilterObjArray[1].state = true;
			$(".filterButton").filter("#highlight1115").addClass("activeFilterButton");			
		}		
		wipeHighlights();		
		$(determineHighlightFilters()).addClass("highlightClass");	
	}); 

	//Highlight 6:15 classes
	$('#highlight615').on('click', function() { 
		if(timeFilterObjArray[2].state == true) {
			timeFilterObjArray[2].state = false;			
			$(".activeFilterButton").filter("#highlight615").removeClass("activeFilterButton");
		} else {
			timeFilterObjArray[2].state = true;
			$(".filterButton").filter("#highlight615").addClass("activeFilterButton");			
		}		
		wipeHighlights();		
		$(determineHighlightFilters()).addClass("highlightClass");	
	}); 
	
	//Highlight 7:30 classes
	$('#highlight730').on('click', function() { 
		if(timeFilterObjArray[3].state == true) {
			timeFilterObjArray[3].state = false;			
			$(".activeFilterButton").filter("#highlight730").removeClass("activeFilterButton");
		} else {
			timeFilterObjArray[3].state = true;
			$(".filterButton").filter("#highlight730").addClass("activeFilterButton");
		}	
		wipeHighlights();
		$(determineHighlightFilters()).addClass("highlightClass");			
	}); 

//highlight smallbreed classes	
	$('#highlightSmallbreedOnly').on('click', function() { 
		if(otherFilterObjArray[0].state == true) {
			otherFilterObjArray[0].state = false;			
			$(".activeFilterButton").filter("#highlightSmallbreedOnly").removeClass("activeFilterButton");
		} else {
			otherFilterObjArray[0].state = true;
			$(".filterButton").filter("#highlightSmallbreedOnly").addClass("activeFilterButton");
		}	
		wipeHighlights();
		$(determineHighlightFilters()).addClass("highlightClass");			
	}); 
	
	//highlight senior classes
	$('#highlightSeniorOnly').on('click', function() { 
		if(otherFilterObjArray[1].state == true) {
			otherFilterObjArray[1].state = false;			
			$(".activeFilterButton").filter("#highlightSeniorOnly").removeClass("activeFilterButton");
		} else {
			otherFilterObjArray[1].state = true;
			$(".filterButton").filter("#highlightSeniorOnly").addClass("activeFilterButton");
		}	
		wipeHighlights();
		$(determineHighlightFilters()).addClass("highlightClass");			
	}); 

	//Highlight Monday clicked
	$('#highlightMonday').on('click', function() { 
		if(dayFilterObjArray[0].state == true) {
			dayFilterObjArray[0].state = false;
			$(".activeFilterButton").filter("#highlightMonday").removeClass("activeFilterButton");
		} else {
			dayFilterObjArray[0].state = true;
			$(".filterButton").filter("#highlightMonday").addClass("activeFilterButton");
		}	
		wipeHighlights();
		$(determineHighlightFilters()).addClass("highlightClass");			
	}); 
	
	//Highlight Tuesday clicked
	$('#highlightTuesday').on('click', function() { 
		if(dayFilterObjArray[1].state == true) {
			dayFilterObjArray[1].state = false;			
			$(".activeFilterButton").filter("#highlightTuesday").removeClass("activeFilterButton");
		} else {
			dayFilterObjArray[1].state = true;
			$(".filterButton").filter("#highlightTuesday").addClass("activeFilterButton");
		}	
		wipeHighlights();
		$(determineHighlightFilters()).addClass("highlightClass");			
	});
		//Highlight Wednesday clicked
	$('#highlightWednesday').on('click', function() { 
		if(dayFilterObjArray[2].state == true) {
			dayFilterObjArray[2].state = false;			
			$(".activeFilterButton").filter("#highlightWednesday").removeClass("activeFilterButton");
		} else {
			dayFilterObjArray[2].state = true;
			$(".filterButton").filter("#highlightWednesday").addClass("activeFilterButton");
		}	
		wipeHighlights();
		$(determineHighlightFilters()).addClass("highlightClass");			
	});
		//Highlight Thursday clicked
	$('#highlightThursday').on('click', function() { 
		if(dayFilterObjArray[3].state == true) {
			dayFilterObjArray[3].state = false;			
			$(".activeFilterButton").filter("#highlightThursday").removeClass("activeFilterButton");
		} else {
			dayFilterObjArray[3].state = true;
			$(".filterButton").filter("#highlightThursday").addClass("activeFilterButton");
		}	
		wipeHighlights();
		$(determineHighlightFilters()).addClass("highlightClass");			
	});
		//Highlight Friday clicked
	$('#highlightFriday').on('click', function() { 
		if(dayFilterObjArray[4].state == true) {
			dayFilterObjArray[4].state = false;			
			$(".activeFilterButton").filter("#highlightFriday").removeClass("activeFilterButton");
		} else {
			dayFilterObjArray[4].state = true;
			$(".filterButton").filter("#highlightFriday").addClass("activeFilterButton");
		}	
		wipeHighlights();
		$(determineHighlightFilters()).addClass("highlightClass");			
	});
		//Highlight Saturday clicked
	$('#highlightSaturday').on('click', function() { 
		if(dayFilterObjArray[5].state == true) {
			dayFilterObjArray[5].state = false;			
			$(".activeFilterButton").filter("#highlightSaturday").removeClass("activeFilterButton");
		} else {
			dayFilterObjArray[5].state = true;
			$(".filterButton").filter("#highlightSaturday").addClass("activeFilterButton");
		}	
		wipeHighlights();
		$(determineHighlightFilters()).addClass("highlightClass");			
	});
});


//////////////////////
//Function to determine filter value for class highlighting
//////////////////////

function determineHighlightFilters() {

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
	
	alert(filterText);
	return filterText;
}

function wipeHighlights() {
	$(".highlightClass").removeClass("highlightClass");
}

function checkTimeFilterSet() {
	timeFilterSet = false;
	arrayLength = timeFilterObjArray.length-1;

	for(var it=0;it<arrayLength;it++) {
		if(timeFilterObjArray[it].state == true){
			timeFilterSet = true;
		}
	}
	return timeFilterSet;

}


