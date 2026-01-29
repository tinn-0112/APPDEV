const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav ul li a");

document.addEventListener("scroll", () => {
  let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 80;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });
    navLi.forEach((li) => {
        li.classList.remove("active");
        if (li.getAttribute("href").includes(current)) {
            li.classList.add("active");
        }
    });
});
