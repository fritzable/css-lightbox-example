// Get the lightbox
const lightbox = document.getElementById('myLightbox')

// Get the <span> element that closes the lightbox
const close = document.getElementsByClassName('close')[0]

// When the user clicks on <span> (x), close the lightbox
close.onclick = function () {
  lightbox.style.display = 'none'
}

// When the user clicks anywhere outside of the lightbox, close it
window.onclick = function (event) {
  if (event.target == lightbox) {
    lightbox.style.display = 'none'
  }
}

// declare a variable for the timeoutID
let timeoutID

// To show a delayed lightbox appearance, when the page loads, wait and then show lightbox
document.addEventListener('DOMContentLoaded', function () {
  timeoutID = window.setTimeout(90, lightbox.style.display = 'block')
})
