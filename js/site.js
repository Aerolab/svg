$(document).ready(function() {
	var windowSize = $(window).width();
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

  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    $("body").addClass("mobile");
    var $section = $('#zoomable');
    var $panzoom = $section.find('.panzoom-parent').panzoom({
      $zoomIn: $section.find(".zoom-in"),
      $zoomOut: $section.find(".zoom-out"),
      $zoomRange: $section.find(".zoom-range"),
      startTransform: 'scale(.4)',
      minScale: 0.4,
      maxScale: 7,
      increment: 0.2,
      contain: false
    });
  } else {
    $("#svg-pan").attr("width", "776");
    var $section = $('#zoomable');
    var $panzoom = $section.find('.panzoom-parent').panzoom({
      $zoomIn: $section.find(".zoom-in"),
      $zoomOut: $section.find(".zoom-out"),
      $zoomRange: $section.find(".zoom-range"),
      startTransform: 'scale(1)',
      minScale: 1,
      maxScale: 7,
      increment: 0.1,
      contain: "invert"
    });
  }

  $(".zoom-range").on("input change", function(){
    $section.find('.panzoom-parent').panzoom( 'zoom', {increment: .01});
  });
});

var wow = new WOW({
  mobile: false
});
wow.init();