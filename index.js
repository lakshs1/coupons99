var menulist = document.getElementById("menulist");
menulist.style.maxHeight = "0px";
function togglemenu(){
    if(  menulist.style.maxHeight == "0px"){
        menulist.style.maxHeight =  "130px";

    }
    else{
        menulist.style.maxHeight = "0px"
    }
}
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}