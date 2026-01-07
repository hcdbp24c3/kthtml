document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("myHeader");

  window.addEventListener("scroll", () => {
    // Sử dụng window.scrollY thay vì pageYOffset (chuẩn hiện đại hơn)
    if (window.scrollY > 100) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
});
