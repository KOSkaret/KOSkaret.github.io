import '../sass/main.scss';

var w = window;
var d = document;
var e = d.documentElement;
var b = d.body;

var section1 = d.getElementById('section1');

var y = w.innerHeight || e.clientHeight || b.clientHeight;


function test(){

  section1.style.height = y + 'px';

};

window.onload = test;
