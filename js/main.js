$(document).on('ready', function() {

// MAKE CLOCK FUNCTION
//TODO: allow switch between 24/12 hour displays
	var updateClock = function () {
		var date = new Date();
		var hours = date.getHours();
		var minutes = date.getMinutes();
		minutes < 10 ? minutes = '0' + minutes: minutes;

		// Display PM indicator if after noon.
		if (hours < 12) {
			amPmIndicator.css('display', 'none');
		}

		// Update clock display
		var time = hours + ':' + minutes;
		clockText.text(time);
	}

	setInterval(updateClock, 1000);




// CREATE VARIABLES AND DIVS
	var outerShell = $("<div>");
	var innerShell = $("<div>");
	var leftAmPmLabels = $("<div id='left-labels'>PM<br><br>Auto</div>");






	var freqContainer = $("<div>");

	var freqLabel = $("<div>AM<br>FM</div>");
	var leftFreq = $("<div>53 60 70<br>88 92 96</div>");
	var rightFreq = $("<div>90 110 140 170<br> 102 106 108</div>");
	
	var clockScreen = $("<div>");
	var clockText = $("<span>")
	var amPmIndicator = $("<div>");
//TODO: allow Auto to be clickable
	var autoIndicator = $("<div>");
	var freqBar = $("<div>");
	var freqIndicator = $("<div>");
	var clockHeight = '250px';
	var clockWidth = '500px';
	
	// Container
	$('.container').append(outerShell);
	
	// Outer Shell
	outerShell.append(innerShell);
	
	// Inner Shell
	innerShell.append(clockScreen);
	innerShell.append(freqContainer);
	innerShell.append(freqBar);
	freqBar.append(freqIndicator);

	// Clock Screen
	clockScreen.append(clockText);
	clockScreen.append(amPmIndicator);
	clockScreen.append(autoIndicator);
	clockScreen.append(leftAmPmLabels);

	// Frequency Table
	freqContainer.append(freqLabel);
	freqContainer.append(leftFreq);
	freqContainer.append(rightFreq);

//TODO: make function to 
	// var amFrequencies = [53, 60, 70, 90, 110, 140, 170];
	// var fmFrequencies = [88, 92, 96, 102, 106, 108];

	// var createFreqDiv = function(frequency, leftMargin) {
	// 	var freqDiv = $('<div>' + frequency + '</div>');
	// 	freqDiv
	// 	.css('margin-left', leftMargin/3 + 'px')
	// 	.css('float','left')
	// 	.css('font-size','12px')
	// 	.css('color','#FFF');
	// 	return freqDiv;
	// };

	// var freqMargins = function(freqArr) {
	// 	for (var i = 1; i < freqArr.length; i++) {
	// 		var getMargin = (freqArr[i]-freqArr[i-1]);
	// 		console.log(getMargin);
	// 		freqContainer.append(createFreqDiv(freqArr[i],getMargin));
	// 	}
	// };

	// freqMargins(amFrequencies);
	// freqMargins(fmFrequencies);





// STYLING
	// Outer Shell
	outerShell
	.height(clockHeight)
	.width(clockWidth)
	.css('background-color','#404040')
	.css('border-radius','3%')
	.css('border-top-left-radius','25%')
	.css('border-top-right-radius','25%');

	// Inner Shell
	innerShell
	.height('70%')
	.width('80%')
	.css('border-radius','15%')
	.css('border-top-left-radius','5%')
	.css('border-top-right-radius','5%')
	.css('background-color','#000')
	.css('color','#FFF')
	.css('margin','auto')
	.css('text-align','center')
	.css('position','relative')
	.css('top','53%')
	.css('transform','translateY(-50%');

	// Clock Screen
	clockScreen
	.height('50%')
	.width('70%')
	.css('background-color','#702121')
	.css('border-radius','5%')
	.css('color','#F00')
	.css('display','inline-block')
	.css('text-align','center')
	.css('font-size', clockScreen.height() * .9)
	.css('position','relative')
	.css('margin-top','20px');

	// Labels
	leftAmPmLabels
	.css('display','inline-block')
	.css('margin','0 5px')
	.css('position','absolute')
	.css('font-size','14px')
	.css('text-align','right')
	.css('top','15%')
	.css('left','-40px')
	.css('color','#FFF')
	.css('line-height', clockScreen.height()/55);

	freqContainer
	.css('font-size','12px')
	.css('margin','0 18%')
	.css('text-align','left');

	freqLabel
	.css('display','inline-block')
	.css('margin-right','7%');
	leftFreq
	.css('display','inline-block')
	.css('margin','0 6%');
	rightFreq
	.css('display','inline-block');



	// Indicators
	amPmIndicator
	.height('10%')
	.width(amPmIndicator.height())
	.css('background-color', '#F00')
	.css('border-radius','50%')
	.css('position','absolute')
	.css('top','22%')
	.css('left','2%');

	autoIndicator
	.height('10%')
	.width(autoIndicator.height())
	.css('background-color', '#F00')
	.css('border-radius','50%')
	.css('position','absolute')
	.css('top','77%')
	.css('left','2%');

	freqBar
	.width('50%')
	.height('15px')
	.css('background-color','#4D3A3A')
	.css('margin','auto');

	freqIndicator
	.width('5%')
	.height('100%')
	.css('background-color','#F00');
	











});