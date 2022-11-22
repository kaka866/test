(function($) { // Begin jQuery
  $(function() { // DOM ready
    // If a link has a dropdown, add sub menu toggle.
    $('nav ul li a:not(:only-child)').hover(function(e) {
      $(this).siblings('.nav-dropdown').toggle();
      // Close one dropdown when selecting another
      $('.nav-dropdown').not($(this).siblings()).hide();
      e.stopPropagation();
    });
    $('ul.nav-dropdown').hover(function(e) {
      $(this).toggle();
      // Close one dropdown when selecting another
      $('.nav-dropdown').not$(this).hide();
      e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $('html').click(function() {
      $('.nav-dropdown').hide();
    });
    // Toggle open and close nav styles on click
    $('#nav-toggle').click(function() {
      $('nav ul').slideToggle();
    });
    // Hamburger to X toggle
    $('#nav-toggle').on('click', function() {
      this.classList.toggle('active');
    });
  }); // end DOM ready
})(jQuery); // end jQuery

//goTop_button
$(window).scroll(function () {
  if ($(window).scrollTop() > 400) {
    if ($(".goTop").hasClass("hide")) {
      $(".goTop").toggleClass("hide");
    }
  } else {
    $(".goTop").addClass("hide");
  }
});
$(".jq-goTop").click(function (e) {
  e.preventDefault();
  $("html,body").animate(
    {
      scrollTop: 0,
    },
    500
  );
});