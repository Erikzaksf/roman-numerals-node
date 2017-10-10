
$(document).ready(function() {
  $("form#regularNumber").submit(function(event) {
    event.preventDefault();
  var numberInput = parseInt($("input#number").val());
    var result = converter(numberInput);
    $(".well").show();
    $(".rNumeral").text(result);

  });
});
