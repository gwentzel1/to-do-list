var button = $('.sub-button');
var body = $('.container');
button.on("click", listIt);

function listIt() {
  var wordz = $('#wordz').val();
  body.append(`<p class = thought>${wordz}</p>`);
}
