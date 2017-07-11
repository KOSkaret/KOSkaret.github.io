var sideMenu = document.getElementById('side-menu');
var content = document.getElementById('start');

function openSlideMenu(){
  sideMenu.style.width= '250px';
  content.style.marginLeft= '250px';
}

function closeSlideMenu(){
  sideMenu.style.width= '0px';
  content.style.marginLeft= '0px';
}
