(function($) {
  $(function() {
    $('.sidenav').sidenav({
      edge: 'right',
      draggable: true,
      inDuration: 600
    });
    $('.carousel').carousel({
      indicators: true
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space
