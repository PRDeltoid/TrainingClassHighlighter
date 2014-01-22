var dayFilterObj;
var dayFilterObjArray = [];
var timeFilterObj;
var timeFilterObjArray = [];
var otherFilterObj;
var otherFilterObjArray = [];

var CLOSED_HEIGHT = 26;
var OPEN_HEIGHT = 105;

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
	//$('no-class').hide();
	
	$('.filterButton').on('click',function() {		
		changeFilterState(this);
		wipeHighlights();
		var highlightFilters = determineHighlightFilters();
		if(highlightFilters!="") {
			$(highlightFilters).addClass("highlightClass");
		}

	});	
	
	$('#showHide').on('click',function() {
		showHideFilters(this);
	});
});

function testFilter(filter) {
	if($(filter).length==0 && (checkTimeFilterSet() || checkDayFilterSet() || checkOtherFilterSet())) {
		return false;
	}
	return true;
}

function determineHighlightFilters() {	
	var filterValueArray = [];
	
	if(checkDayFilterSet()) {
		for(var dayIterator=0;dayIterator<dayFilterObjArray.length;dayIterator++) {
			if(dayFilterObjArray[dayIterator].state==true && checkTimeFilterSet()) {			
				for(var timeIterator=0;timeIterator<timeFilterObjArray.length;timeIterator++) {				
					if(timeFilterObjArray[timeIterator].state==true) {
						filterValueArray.push(dayFilterObjArray[dayIterator].filterValue+timeFilterObjArray[timeIterator].filterValue);					
					}
				}
			} else if(dayFilterObjArray[dayIterator].state==true && !checkTimeFilterSet()) {
				filterValueArray.push(dayFilterObjArray[dayIterator].filterValue);
			}
		}
	} else if(checkTimeFilterSet() && !checkDayFilterSet()) {
		for(var timeIterator=0;timeIterator<timeFilterObjArray.length;timeIterator++) {				
			if(timeFilterObjArray[timeIterator].state==true) {
				filterValueArray.push(timeFilterObjArray[timeIterator].filterValue);					
			}
		}
	}
	
	//append other filters to the end of every current filter (if other filters are set). Otherwise, load just the filter.
	if(checkOtherFilterSet() && (checkTimeFilterSet() || checkDayFilterSet())) {
		for(var otherIterator=0;otherIterator<otherFilterObjArray.length;otherIterator++) {
			if(otherFilterObjArray[otherIterator].state==true) {
				for(var it=0;it<filterValueArray.length;it++) {
					filterValueArray[it] += otherFilterObjArray[otherIterator].filterValue;
				}
			}
		}
	} else if(checkOtherFilterSet() && !checkTimeFilterSet() && !checkDayFilterSet()) {
		for(var otherIterator=0;otherIterator<otherFilterObjArray.length;otherIterator++) {
			if(otherFilterObjArray[otherIterator].state==true) {
				filterValueArray.push(otherFilterObjArray[otherIterator].filterValue);
			}
		}
	}
	var stitchedFilter = stitchFilterArray(filterValueArray);
	//console.log(stitchFilterArray(filterValueArray));
	if(testFilter(stitchedFilter)) {
		noClassesMessage('hide');
		return stitchedFilter;
	} else {
		noClassesMessage('show');
		return false;
	}
}

function noClassesMessage(stateTo) {
	if(stateTo=='show') {
		$('.no-classes').stop().fadeIn('fast').effect("shake",{
			distance:2
		},750);
	} else {
		$('.no-classes').stop().hide();
	}
	
}

function stitchFilterArray(filterArray) {
	var filterValue = "";
	for(var it=0;it<filterArray.length;it++) {
		if(it>0) {
			filterValue += ",";
		}
		filterValue += filterArray[it]+":not(.full)";
	}
	return filterValue;	
}

function checkOtherFilterSet() {
	for(var it=0;it<otherFilterObjArray.length;it++) {
		if(otherFilterObjArray[it].state == true){	return true;	} 
	}	
	return false;
}

function checkTimeFilterSet() {
	//arrayLength = timeFilterObjArray.length-1;
	for(var it=0;it<timeFilterObjArray.length;it++) {
		if(timeFilterObjArray[it].state == true){	return true;	} 
	}	
	return false;
}

function checkDayFilterSet() {
	//arrayLength = timeFilterObjArray.length-1;
	for(var it=0;it<dayFilterObjArray.length;it++) {
		if(dayFilterObjArray[it].state == true){	return true;	} 
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
			//console.log(dayFilterObjArray[value]);
			break;
		case 'timeButton':
			timeFilterObjArray[value].state = !timeFilterObjArray[value].state;
			//console.log(timeFilterObjArray[value]);
			break;
		case 'otherButton':
			otherFilterObjArray[value].state = !otherFilterObjArray[value].state;
			//console.log(otherFilterObjArray[value]);
			break;
		default: 
			console.log('Error: Unknown Button Type Selected');
			break;
	}
	
	//set button CSS to active state
	jqueryButtonClicked = $(buttonClicked);
	if(jqueryButtonClicked.hasClass('activeFilterButton')) {
		jqueryButtonClicked.removeClass('activeFilterButton');
	} else {
		jqueryButtonClicked.addClass('activeFilterButton');
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

function showHideFilters(obj) {
	jqueryObj = $(obj);
	if(jqueryObj.data('size')=="min") {
		jqueryObj.data('size','max').parents('#filterButtonArea').animate({
			height: OPEN_HEIGHT + "px"
		},1000)
		.children('#filterButtons').fadeIn('slow');
	} else if(jqueryObj.data('size')=="max") {
		jqueryObj.siblings('#filterButtons').fadeOut('slow', function() {
			jqueryObj.data('size','min').parents('#filterButtonArea').animate({
				height: CLOSED_HEIGHT + "px"
			},1000);
		});
	}
	
}
