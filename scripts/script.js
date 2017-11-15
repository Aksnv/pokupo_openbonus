/* OpenBonus */

$(".bonus-programm__content button").click(function () {
  $(".bonus-programm__personal").addClass("bonus-programm__personal--visible");
});

$(".bonus-programm--login .bonus-card__form .reset").click(function () {
  $(".bonus-programm__personal").removeClass("bonus-programm__personal--visible");
});

/* END - OpenBonus */