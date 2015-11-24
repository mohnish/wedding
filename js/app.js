$(function() {
  $('.magazine-cover').hide();

  $('.magazine-toggle').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    $this.siblings('.magazine-cover').show('slow');
    $this.hide();
  });
});
