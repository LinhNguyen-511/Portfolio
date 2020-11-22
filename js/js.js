// Get the modal
var modalCalc = document.getElementById("calc");

// Get the button that opens the modal
var calcProj = document.getElementById("calc-proj");

// Get the <span> element that closes the modal
var spanCalc = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
calcProj.onclick = function() {
  modalCalc.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanCalc.onclick = function() {
  modalCalc.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modalCalc.style.display = "none";
  }
} 
// Get the modal
var modalReal = document.getElementById("real");

// Get the button that opens the modal
var realProj = document.getElementById("real-proj");

// Get the <span> element that closes the modal
var spanReal = document.getElementsByClassName("close")[1];

// When the user clicks on the button, open the modal
realProj.onclick = function() {
  modalReal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanReal.onclick = function() {
  modalReal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modalReal.style.display = "none";
  }
} 