		//change background color to blue
		function myfooter() {
			document.getElementById("footer").style.backgroundImage = "linear-gradient(blue, black)";
			document.getElementById("bar").style.backgroundImage = "linear-gradient(black, blue)";
			
			document.getElementById("myBtn").style.backgroundImage = "linear-gradient(black,blue)";
			document.getElementsByTagName("BODY")[0].style.backgroundImage = "linear-gradient(blue,black)";
		}
		function mytopbar() {
			document.getElementById("top-bar").style.backgroundImage = "linear-gradient(blue, black)";
		}

		
			//change background color to green
			function myfooter1() {
				document.getElementById("footer").style.backgroundImage = "linear-gradient(green, black)";
				document.getElementById("bar").style.backgroundImage = "linear-gradient(black, green)";
				
				document.getElementById("myBtn").style.backgroundImage = "linear-gradient(black,green)";
				document.getElementsByTagName("BODY")[0].style.backgroundImage = "linear-gradient(green,black)";
			}
			function mytopbar1() {
				document.getElementById("top-bar").style.backgroundImage = "linear-gradient(green, black)";
			}
			
			
			//change background color to black
			function myfooter2() {
				document.getElementById("footer").style.backgroundImage = "linear-gradient(grey, black)";
				document.getElementById("bar").style.backgroundImage = "linear-gradient(black, grey)";
				document.getElementById("myBtn").style.backgroundImage = "linear-gradient(grey,black)";
					
			}
			function mytopbar2() {
				document.getElementById("top-bar").style.backgroundImage = "linear-gradient(black, grey)";
			}	
			function changeBodyBg(color) {
				document.body.style.background = color;
			}
			//change background color to white
			function myfooter3() {
				document.getElementById("footer").style.backgroundImage = "linear-gradient(white, grey)";
				document.getElementById("bar").style.backgroundImage = "linear-gradient(white, grey)";
				
				document.getElementById("myBtn").style.backgroundImage = "linear-gradient(black,white)";
				document.getElementsByTagName("BODY")[0].style.backgroundImage = "linear-gradient(white,black)";
			}
			function mytopbar3() {
				document.getElementById("top-bar").style.backgroundImage = "linear-gradient(white, grey)";	
			}
			
			//change background color to purple
			function myfooter4() {
				document.getElementById("footer").style.backgroundImage = "linear-gradient(purple, black)";
				document.getElementById("bar").style.backgroundImage = "linear-gradient(black, purple)";
				

				document.getElementById("myBtn").style.backgroundImage = "linear-gradient(black,purple)";
				document.getElementsByTagName("BODY")[0].style.backgroundImage = "linear-gradient(purple,black)";
			}
			function mytopbar4() {
				document.getElementById("top-bar").style.backgroundImage = "linear-gradient(purple, black)";
			}	
			



//Get the button (gpp and back to top button) to hide and display
var mybutton = document.getElementById("myBtn");
var gppbutton = document.getElementById("myBtnBg");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
		mybutton.style.display = "block";
	} else {
		mybutton.style.display = "none";
	} if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
		gppbutton.style.display = "none";
	} else {
		gppbutton.style.display = "block";
	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}




      // Tabs
      function openCity(evt, cityName) {
      	var i;
      	var x = document.getElementsByClassName("city");
      	for (i = 0; i < x.length; i++) {
      		x[i].style.display = "none";
      	}
      	var activebtn = document.getElementsByClassName("testbtn");
      	for (i = 0; i < x.length; i++) {
      		activebtn[i].className = activebtn[i].className.replace(" w3-black", "");
      	}
      	document.getElementById(cityName).style.display = "block";
      	evt.currentTarget.className += " w3-black";
      }
      var mybtn = document.getElementsByClassName("testbtn")[0];
      mybtn.click();



      var slideIndex = 1;
      showDivs(slideIndex);

      function plusDivs(n) {
      	showDivs(slideIndex += n);
      }

      function currentDiv(n) {
      	showDivs(slideIndex = n);
      }

      function showDivs(n) {
      	var i;
      	var x = document.getElementsByClassName("mySlides");
      	var dots = document.getElementsByClassName("demo");
      	if (n > x.length) {slideIndex = 1}
      		if (n < 1) {slideIndex = x.length}
      			for (i = 0; i < x.length; i++) {
      				x[i].style.display = "none";  
      			}
      			for (i = 0; i < dots.length; i++) {
      				dots[i].className = dots[i].className.replace(" w3-black", "");
      			}
      			x[slideIndex-1].style.display = "block";  
      			dots[slideIndex-1].className += " w3-black";
      		}




  			// script for gpp logo enable to change background color
  			var colors = ["linear-gradient(blue, black)", "linear-gradient(green, black)", "linear-gradient(grey, black)", "linear-gradient(white, black)", "linear-gradient(purple, black)", "linear-gradient(red, black)"],
  			index = 0;
  			document.getElementById("myBtnBg").onclick = function gppfunction() {
  				document.body.style.backgroundImage = colors[index];
  				document.getElementById("footer").style.backgroundImage = colors[index];
  				document.getElementById("top-bar").style.backgroundImage = colors[index];
  				document.getElementById("bar").style.backgroundImage = colors[index];
  				
  				
  				document.getElementById("myBtn").style.backgroundImage = colors[index];


  index = (index + 1) % colors.length;             // increment index to point to the next color (if it goes beyond the length of the coices array get it back to 0 using the modulo %)
}