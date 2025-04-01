// Get the modal
var modals = document.getElementById("myModals");

// Get the button that opens the modal
var btns = document.getElementById("openModalBtns");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close2")[0];

// When the user clicks the button, open the modal 
btns.onclick = function () {
    modals.style.display = "block";
}

// When the user clicks on <span> (x), close the modal

span.onclick = function () {
    modals.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modals) {
        modals.style.display = "none";
    }
}