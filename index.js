function changeOpacity(event){
  event.preventDefault();
  const a = document.getElementById("a");
const url = a.href
  a.style.opacity = "0.5";


  setTimeout(

    function (){
  const b = document.getElementById("a");

  b.style.opacity = "1"; 
  window.location.href = url;
}, 500); 


}


