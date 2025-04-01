// Get the modal
var modalsss = document.getElementById("myModalsss");

// Get the button that opens the modal
var btnsss = document.getElementById("openModalBtnsss");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close4")[0];

// When the user clicks the button, open the modal 
btnsss.onclick = function () {
    modalsss.style.display = "block";
}

// When the user clicks on <span> (x), close the modal

span.onclick = function () {
    modalsss.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modalsss) {
        modalsss.style.display = "none";
    }
}