$(window).on('load', function () {
  var element = $(".typing");
  var thisChild = ""
  element.each(function () {
    var text = $(this).html();
    var textbox = "";
    text.split('').forEach(function (target) {
      if (target !== " ") {
        textbox += '<span>' + target + '</span>';
      } else {
        textbox += target;
      }
    });
    $(this).html(textbox);
  });
   $(element).each(function () {
      thisChild = $(this).children();
      thisChild.each(function (i) {
        var time = 100;
        $(this).delay(time * i).fadeIn(time);
      });
  });
});
