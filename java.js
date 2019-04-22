let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
} 





document.getElementById('menuicon').addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "flex";
});

document.querySelector('.close').addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "none";
});



document.getElementById("addMats").onclick = function() {
    var matsCell = document.getElementById("matsCell");
    var input = document.createElement("input");
    input.type = "text";
    var br = document.createElement("br");
    matsCell.appendChild(input);
    matsCell.appendChild(br);
}    

document.getElementById("addTools").onclick = function() {
    var toolsCell = document.getElementById("toolsCell");
    var input = document.createElement("input");
    input.type = "text";
    var br = document.createElement("br");
    toolsCell.appendChild(input);
    toolsCell.appendChild(br);
}