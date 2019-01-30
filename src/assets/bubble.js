var items = document.querySelectorAll(".grid-item");

//window.addEventListener("scroll", onScroll);

var h = window.innerHeight;
var w = window.innerWidth;

var c = items[Math.round(items.length/2)];
var cr = c.getBoundingClientRect();
window.scroll(cr.left - (w / 2)+ (cr.width / 2),
              cr.top - (h / 2) + (cr.height / 2));

//alert(cr.left);
//window.scrollX = (w / 2 - cr.width / 2) * -1;
//window.scrollY = (h / 2 - cr.height / 2) * -1;
//c.scrollIntoView();
c.style.background = "#F00";

requestAnimationFrame(onScroll);

function onScroll(){
  
  var pos = null, s = 0, s2 = 0;
  
  for (var i=0; i <items.length;++i) {
    
    pos = items[i].getBoundingClientRect();
    
    s = (pos.top + (pos.height / 2) - (h / 2)) / h;
    s = 1 - Math.abs(s);
    s = (s < 0 ? 0 : (s > 1 ? 1 : s));
    
    s2 = (pos.left + (pos.width / 2) - (w / 2)) / w;
    s2 = 1 - Math.abs(s2);
    s2 = (s2 < 0 ? 0 : (s2 > 1 ? 1 : s2));
    
    s = (s + s2) / 2;
    
    //items[i].innerText = s;
    
    items[i].style.transform = "scale("+s+")";
  }
  
  requestAnimationFrame(onScroll);
  
}