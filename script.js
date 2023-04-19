//Expand/contract

function myFunction() {
  var dots = document.getElementById("first");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "See more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "See less";
    moreText.style.display = "inline";
  }
}


//quiz 

function showSubmit(){
	let score=0;
	let question1 = document.getElementById("txt-1").value;
	let question2 = document.getElementById("txt-2").value;
	let question3 = document.getElementById("txt-3").value;
	let question4 = document.getElementById("txt-4").value;
	let resultP = document.getElementById("result");
	
	if (question1=="A hashtag"){
		score++;
		resultP.innerHTML+="<p>Question 1 is correct</p>";
	}
	else{
		resultP.innerHTML+="<p>Question 1 is incorrect</p>";
	}
	if (question2=="Add script src=script.js to the bottom of the page."){
		score++;
		resultP.innerHTML+="<p>Question 2 is correct</p>";
	}
	else{
		resultP.innerHTML+="<p>Question 2 is incorrect</p>";
	}
	if (question3=="styles.css"){
		score++;
		resultP.innerHTML+="<p>Question 3 is correct</p>";
	}
	else{
		resultP.innerHTML+="<p>Question 3 is incorrect</p>";
	}
	if (question4==";"){
		score++;
		resultP.innerHTML+="<p>Question 4 is correct</p>";
	}
	else{
		resultP.innerHTML+="<p>Question 4 is incorrect</p>";
	}
	//result
	resultP.classList.remove("hidden");
	resultP.innerHTML+="score: " +score+ "/4";
}


//slideshow
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

