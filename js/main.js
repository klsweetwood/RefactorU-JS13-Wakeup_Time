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
//TODO: fix AM/FM labels and add ability to move indicator
	var freqTable = $("<table id='freq-table'></table>");
	var amFreqLabel = $("<tr><td>AM</td></tr>");
	var fmFreqLabel = $("<tr><td>FM</td></tr>");
	var amFreq = $("<td>53</td> <td>60</td> <td>70</td> <td>90 110</td> <td>140 170</td>");
	var fmFreq = $("<td>88 92 96 102 106 108</td>");
	
	var clockScreen = $("<div>");
	var clockText = $("<span>")
	var amPmIndicator = $("<div>");
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
	innerShell.append(freqTable);
	innerShell.append(freqBar);
	freqBar.append(freqIndicator);

	// Clock Screen
	clockScreen.append(clockText);
	clockScreen.append(amPmIndicator);
	clockScreen.append(autoIndicator);
	clockScreen.append(leftAmPmLabels);

	// Frequency Table
	freqTable.append(amFreqLabel);
	freqTable.append(fmFreqLabel);
	amFreqLabel.append(amFreq);
	fmFreqLabel.append(fmFreq);



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

	freqTable
	.css('font-size','12px')
	.css('margin','0 15%')
	.css('text-align','left');

	// $('#AM-Label')
	// .css('padding-right','25%')
	// .width('5%');


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