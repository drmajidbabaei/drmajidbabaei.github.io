$(function () {
  //   $("td[colspan=1]").find("p").hide();
  $("td[colspan=1]").find("div").hide();
  $("table").click(function (event) {
    event.stopPropagation();
    var $target = $(event.target);
    if ($target.closest("td").attr("colspan") > 1) {
      $target.slideUp();
    } else {
      $target.closest("tr").next().find("div").slideToggle();
    }
  });
});
