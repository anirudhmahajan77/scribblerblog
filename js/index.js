// Get the modal
var createPostModal = document.getElementById("createPostModal");

// Get the button that opens the modal
var btn3 = document.getElementById("createPostBtn");

// Get the <span> element that closes the modal
var span3 = document.getElementById("closePost");

// When the user clicks the button, open the modal 
btn3.onclick = function() {
  createPostModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span3.onclick = function() {
  createPostModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == createPostModal) {
    createPostModal.style.display = "none";
  }
}