// Get the modal
var modalsssss = document.getElementById("myModalsssss");

// Get the button that opens the modal
var btnsssss = document.getElementById("openModalBtnsssss");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close6")[0];

// When the user clicks the button, open the modal 
btnsssss.onclick = function () {
    modalsssss.style.display = "block";
}

// When the user clicks on <span> (x), close the modal

span.onclick = function () {
    modalsssss.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modalsssss) {
        modalsssss.style.display = "none";
    }
}