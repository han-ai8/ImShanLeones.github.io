// Get the modal
var modalssss = document.getElementById("myModalssss");

// Get the button that opens the modal
var btnssss = document.getElementById("openModalBtnssss");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close5")[0];

// When the user clicks the button, open the modal 
btnssss.onclick = function () {
    modalssss.style.display = "block";
}

// When the user clicks on <span> (x), close the modal

span.onclick = function () {
    modalssss.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modalssss) {
        modalssss.style.display = "none";
    }
}