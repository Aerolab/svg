$(document).ready(function() {
	//do stuff
  $("#compare-1").twentytwenty({
    before: "SVG",
    after: "PNG"
  });
  $("#compare-2").twentytwenty({
    before: "SVG",
    after: "PNG"
  });
  $("#compare-3").twentytwenty({
    before: "SVG",
    after: "PNG"
  });

  var $section = $('#zoomable');
  var $panzoom = $section.find('.panzoom-parent').panzoom({
    $zoomIn: $section.find(".zoom-in"),
    $zoomOut: $section.find(".zoom-out"),
    $zoomRange: $section.find(".zoom-range"),
    startTransform: 'scale(.75)',
    minScale: 1,
    maxScale: 7,
    increment: 0.1,
    contain: "invert"
  });

  $(".zoom-range").on("input change", function(){
    $section.find('.panzoom-parent').panzoom( 'zoom', {increment: .01});
  });
});