
// Add to index.html:
// <script type="text/javascript">
//   $(document).ready(function () {
//     console.log("slide() running...");
//     slide();
//   });
// </script>

/* Slowly fade in, pause, then fade in the other image */
function slide() {
  var firstImg = $("#faded .slides img:first");
  var lastImg = $("#faded .slides img:last");

  /* Make the last image visible but at 0% */
  lastImg.css({"opacity": 1, "display": "block"});

  /* Move it into the first position */
  lastImg.prependTo("#faded .slides");

  /* Hide the new last image */
  firstImg.css({"display": "none"});

  /* Slowly unhide the new first image */
  lastImg.animate({"opacity": 300 }, 1000,
  /* pause before repeating */
  function () {
    setTimeout(slide, 2000);
  }
  );
}