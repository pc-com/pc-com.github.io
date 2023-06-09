$(document).ready(function() {
    $('.text_content').each(function() {
      var $element = $(this);
      var innerContent = $element.html();
      var parsedContent = marked.parse(innerContent);
      $element.html(parsedContent);
    });
  });
