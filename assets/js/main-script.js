
$(document).ready(function() { //Document Ready function

$(window).resize(function() { //Window Resize function
});

function resizeiframe() {//Resize iframes for YouTube embeds
  let iframeWidth = $('iframe').width();
  $('iframe').css('height', iframeWidth/1.6);
}

});
