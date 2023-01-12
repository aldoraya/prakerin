// smooth scrolling
$('a[href*="#"]').on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top,
      },
      500,
      "linear"
    );
  });

  let offset = 0;
window.addEventListener("scroll", function () {
  let st = window.pageYOffset;
  if (st > offset) {
    document.querySelector(".fa-arrow-up").classList.add("active");
  } else {
    document.querySelector(".fa-arrow-up").classList.remove("active");
  }
});