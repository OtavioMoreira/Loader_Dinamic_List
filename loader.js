$(".item-loader").each(function( index, value ) {
	let circle = $(value).find('circle')[0];
	let radius = circle.r.baseVal.value;
	let circumference = radius * 2 * Math.PI;

	circle.style.strokeDasharray = `${circumference} ${circumference}`;
	circle.style.strokeDashoffset = `${circumference}`;

	let inputLoader = $(value).find('input')[0];
	setProgress(inputLoader.value, circle, circumference);
	
	inputLoader.addEventListener('change', function(e) {
	  if (inputLoader.value < 101 && inputLoader.value > -1) {
	    setProgress(inputLoader.value, circle, circumference);
	  }  
	})
});

function setProgress(percent, circle, circumference) {
  	let offset = circumference - percent / 100 * circumference;
  	circle.style.strokeDashoffset = offset;
}