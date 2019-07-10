function del() {
  // Get the modal
  var modal = document.getElementById("del");

  modal.style.display = "block";

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
    
  }
}

function hid(){
    var btn = document.getElementsByClassName('modal')[2];
    btn.style.display = "none";
}