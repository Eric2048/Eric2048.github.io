// This code runs when the page is first loaded.
console.log("running");

// Find the div.scrollingMiddle
var o = document.getElementById("scrollingMiddle");
if (o) {
  // When it scrolls, call this function.
  o.onscroll = function() {
    // Find the back-to-top button
    var b = document.getElementById("backToTopButton");
    if (b) {
      // If the DIV is scrolled to the top, hide this button, otherwise show it.
      if (o.scrollTop === 0) {
        b.style.display = "none";
      } else {
        b.style.display = "block";        
      }
    }    
  };
}

// The back-to-top button calls this when it is clicked.
function scrollToTop() {
  o.scrollTop = 0;
}

