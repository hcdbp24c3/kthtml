window.onscroll = function () {
  var header = document.getElementById("myHeader");

  // Nếu scroll xuống hơn 100px
  if (window.pageYOffset > 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
};
