function changeOpacity(event) {
  event.preventDefault(); // stop navigation
  const a = document.getElementById("a");
  const url = a.href;

  a.style.opacity = "0"; // fade out fully

  setTimeout(function() {
    window.location.href = url; // navigate after fade
  }, 500); // matches CSS transition duration
}
