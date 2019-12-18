// This code runs when the page is first loaded.

// When page scrolls, call this function.
document.body.onscroll = function() {
  // Find the back-to-top button
  var b = document.getElementById("backToTopButton");
  if (b) {
    // If the DIV is scrolled to the top, hide this button, otherwise show it.
    if (window.scrollY === 0) {
      b.style.display = "none";
    } else {
      console.log("showing");
      b.style.display = "block";
    }
  }
};

// The back-to-top button calls this when it is clicked.
function scrollToTop() {
  document.body.scrollTop = document.documentElement.scrollTop = 0;
}

