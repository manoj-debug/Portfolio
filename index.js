function mouseover(){
    var deg="55deg"
    var colorone="white 50%";
    var colortwo="#5eff0070 50%"
document.querySelector(".head").style.backgroundImage='-webkit-linear-gradient('+deg+','+ colorone+','+ colortwo+')';
}
function mouseout(){
    var deg="55deg"
    var colorone="#03b7f3 50%";
    var colortwo="#5eff0070 50%"
document.querySelector(".head").style.backgroundImage='-webkit-linear-gradient('+deg+','+ colorone+','+ colortwo+')';
}