// Get the modal
var modalss = document.getElementById("myModalss");

// Get the button that opens the modal
var btnss = document.getElementById("openModalBtnss");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close3")[0];

// When the user clicks the button, open the modal 
btnss.onclick = function () {
    modalss.style.display = "block";
}

// When the user clicks on <span> (x), close the modal

span.onclick = function () {
    modalss.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modalss) {
        modalss.style.display = "none";
    }
}