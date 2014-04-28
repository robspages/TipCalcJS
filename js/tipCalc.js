$(document).ready(function(){
	bill = 0;
	perc = 15;
	tipPercent = $('#tipPercentage');
	tipAmount = $('#tipAmount');
	currentPercentage = $('#currentPercentage');
	currentPercentage.html(perc);

	function calculateTip(bill, perc)
	{
		amt = bill * (perc/100);
		tipAmount.html(Math.round((amt + 0.00001) * 100) / 100);
	}

	function update()
	{
		$('#currentPercentage').html($('#tipAmount').value);
	 	calculateTip(bill, perc); 
	}

	$('#billAmount').change(function(){
		bill = parseFloat(this.value, 10);
		update(); 
	});

	$('#tipPercentage').change(function(){ 
		perc = parseInt(this.value);
		currentPercentage.html(this.value);
		update();
	}); 

	update();
}); 
