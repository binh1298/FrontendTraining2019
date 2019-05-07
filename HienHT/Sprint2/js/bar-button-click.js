function hideAndShowMenuFromBar() {
    var x = document.getElementById("drop-down-container");

    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  } 

function clickClose(){
  var x = document.getElementById("drop-down-container");

  x.style.display = "none";
}



// window.onload = function(){
//   var x = document.getElementById('drop-down-container');
//   document.onclick = function(e){
//     if(e.target.id !== "drop-down-container" && e.target.id !== "bars-switch" ){
//       //element clicked wasn't the div; hide the div
//       x.style.display = 'none';
//     }
//   };
// };