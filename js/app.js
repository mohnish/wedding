$('.magazine-toggle').on('click', function(e) {
  e.preventDefault();
  $(this).siblings('img').toggle('slow');
});
