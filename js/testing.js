$(function() {
   $('.trigger').toggle(function() {
    $('p').show("fast");
   }, function() {
    $('p').hide("fast");
   });
  });