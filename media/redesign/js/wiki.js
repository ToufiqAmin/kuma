(function($) {

  // Settings menu
  (function() {
    var $settingsMenu = $('#settings-menu');
    $settingsMenu.mozMenu();
    $settingsMenu.parent().find('.submenu').mozKeyboardNav();
  })();

  // New tag placeholder
  // Has to be placed in ready call because the plugin is initialized in one
  $.ready(function() {
    $('.tagit-new input').attr('placeholder', gettext('New tag...'));
  });

  // "From Search" submenu click
  (function() {
    var $fromSearchNav = $('.from-search-navigate');
    if($fromSearchNav.length) {
      var $fromSearchList = $('.from-search-toc');
      $fromSearchNav.mozMenu({
        submenu: $fromSearchList,
        brickOnClick: true
      });
      $fromSearchList.find('ol').mozKeyboardNav();
    }
  })();

  /*
    Toggle for quick links show/hide
  */
  (function() {
    
    $('#quick-links').find('> ul > li, > ol > li').each(function() {
      var $li = $(this);
      var $sublist = $li.find('> ul, > ol');
      
      if($sublist.length) {
        $li.addClass('toggleable closed');
        $li.find('> a').addClass('toggler').prepend('<i class="icon-caret-up"></i>');
        $sublist.addClass('toggle-container');
      }
    }).end().find('.toggleable').mozTogglers();
    
    var side = $('#quick-links-toggle').closest('.wiki-column').attr('id');
    // Quick Link toggles
    $('#quick-links-toggle, #show-quick-links').on('click', function(e) {
      e.preventDefault();
      $('#' + side).toggleClass('column-closed');
      $('#wiki-column-container').toggleClass(side + '-closed');
      $('#wiki-controls .quick-links').toggleClass('hidden');
    });
  })();

  /*
    Subscribe / unsubscribe to an article
  */
  $('.page-watch a').on('click', function(e) {
    e.preventDefault();
    $(this).closest('form').submit();
  });


})(jQuery);