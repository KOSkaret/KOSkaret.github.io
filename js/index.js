//Side nav.

var sideMenu = document.getElementById('side-menu');
var openMenu = document.getElementById('open-menu');
var bars = openMenu.querySelector("a");
var close = sideMenu.querySelector("a");

//Slider
var slider = {
  open: function() {

    sideMenu.style.width = '250px';
  },
  close: function() {
    sideMenu.style.width = '0px';
  }
};


//Fix for closing menu:
close.addEventListener("click", (event) =>{event.preventDefault()});
sideMenu.addEventListener('click', () => slider.close(), false);

//Fix for open menu:
bars.addEventListener("click", (event)=> {event.preventDefault()});
openMenu.addEventListener('click', () => slider.open(), false);

//Fix when jumping the page.
var shiftWindow = function() {
  scrollBy(0, -60)
};
if (location.hash) shiftWindow();
window.addEventListener("hashchange", shiftWindow);
