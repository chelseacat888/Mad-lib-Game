let nounV = document.querySelector("#noun");
let verbV = document.querySelector("#verb");
let colorV = document.querySelector("#color");
let landmarkV = document.querySelector("#landmark");
let story = document.querySelector("#output");
let btn = document.querySelector("#submitBTN");

btn.addEventListener('click', function(){
	console.log(nounV.value);
	console.log(verbV.value);
	console.log(colorV.value);
	console.log(landmarkV.value);
	story.textContent = nounV.value + " " + verbV.value + " the envelope" + " and " + " " +  colorV.value + " leaked out and stained the desk " + colorV.value
	+ ". " +  nounV.value + " went to the " + landmarkV.value + " watch the moon. " + "an old witch came by and took the envelope " + nounV.value + " could not catch the old witch "
	+ " when the witch rode her broom to moon she exploded and turned into a balloon. " + nounV.value + " came across a pond filled with tiny goldfish. " + nounV.value +
	" watched the tiny  goldfish swim up the stream"
})
