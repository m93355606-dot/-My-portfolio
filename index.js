function changeOpacity(){
  const a = document.getElementById("a");

  a.style.opacity = "0.5";

}

setTimeout(

    function (){
  const b = document.getElementById("a");

  b.style.opacity = "1"; 
}, 500); 
