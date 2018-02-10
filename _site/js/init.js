/*
  Tessellate by HTML5 UP
  html5up.net | @n33co
  Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

  $(function() {

    var	$window = $(window);
    var $body = $('body');

    // Scrolly links.
    $('.scrolly').scrolly();

    // Gallery images
    $('#gallery').magnificPopup({
      delegate: 'a',
      type: 'image',
      gallery: {
        enabled: true
      }
    });

    $('.gallery-thumb').on('click', function(event) {
      ga('send', 'event', 'button', 'click', 'gallery-thumbs', $(this).attr('href'));
    });

    $('.logix-link').on('click', function(event) {
      ga('send', 'event', 'button', 'click', 'outbound-links', 'logix');
    });

  });


})(jQuery);

var sendEmail = function() {
  $.ajax({
    url: "//formspree.io/henry@creativeconcreteltd.ca",
    method: "POST",
    data: {
      _replyto: $("input[name='_replyto']").val(),
      message: $("textarea[name='message']").val(),
      _subject: $("select[name='_subject']").val(),
      _gotcha: $("input[name='_gotcha']").val()
    },
    dataType: "json"
  });

  // Clear the fields after it's been sent
  alert('Your message was sent!');
  $("input[name='_replyto']").val('');
  $("textarea[name='message']").val('');
  $("select[name='_subject']").val('');
  $("input[type='button']").attr('disabled', true);
};
