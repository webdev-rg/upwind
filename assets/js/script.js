const header = document.querySelector("header");
const logo = document.getElementById("logo");
const backBtn = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("scroll");
    logo.src = "./assets/images/logo-dark.png";
  } else {
    header.classList.remove("scroll");
    logo.src = "./assets/images/logo-light.png";
  }
});

window.addEventListener("scroll", () => {
  if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    backBtn.style.display = "block";
  }
  else {
    backBtn.style.display = "none";
  }
})

const topFunction = () => {
  document.documentElement.scroll({
    top: 0,
    behaviour: "smooth",
  });
};

backBtn.addEventListener("click", topFunction);
