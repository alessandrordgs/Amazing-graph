var veri = 1;
var trigger = document.getElementById('bars').addEventListener("click",function(){
  var menu = document.getElementById('menu');
  if (veri == 1) {
    menu.style.left = "0px";
    veri = 0;
  }else{
    menu.style.left = "-100%";
    veri = 1;
  }
})
