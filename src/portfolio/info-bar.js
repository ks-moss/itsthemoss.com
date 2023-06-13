const contentHeaders = document.querySelectorAll(".content-header");

contentHeaders.forEach((contentHeader) => {
  const wrapper = contentHeader.nextElementSibling;
  const bar1 = contentHeader.querySelector(".bar1");
  const bar2 = contentHeader.querySelector(".bar2");

  contentHeader.addEventListener("click", () => {
    wrapper.classList.toggle("active");
    bar1.classList.toggle("active");
    bar2.classList.toggle("active");
  });
});
