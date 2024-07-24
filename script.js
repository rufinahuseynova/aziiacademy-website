//navbarin scrollu
window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
});
//show/hide faq answer
const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");
    //change icon
    const icon = faq.querySelector(".faq_icon i");
    if (icon.className === "fa-solid fa-plus") {
      icon.className = "fa-solid fa-minus";
    } else {
      icon.className = "fa-solid fa-plus";
    }
  });
});
//show/hide nav menu
const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener("click", () => {
  menu.style.display = "flex";
  closeBtn.style.display = "inline-block";
  menuBtn.style.display = "none";
});
//close nav menu
const closeNav = () => {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.style.display = "inline-block";
};
closeBtn.addEventListener("click", closeNav);

// KURS FILTRLEME
document.getElementById("searchBtn").addEventListener("click", function () {
  filterCourses();
});

document
  .getElementById("search")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      filterCourses();
    }
  });

function filterCourses() {
  let searchValue = document
    .getElementById("search")
    .value.trim()
    .toLowerCase();

  let courses = document.querySelectorAll(".course");

  courses.forEach(function (course) {
    let courseTitle = course.querySelector("h4").textContent.toLowerCase();

    if (courseTitle.includes(searchValue)) {
      course.style.display = "block";
    } else {
      course.style.display = "none";
    }
  });
}

//-------------------------------------------------------------modal-----------------------------------------

document.addEventListener("DOMContentLoaded", function () {

  const modal = document.getElementById("courseModal");
  const modalContent = document.getElementById("modalContent");
  const closeBtn = document.querySelector(".close");

  const moreInfoButtons = document.querySelectorAll(".more-info");

  moreInfoButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const courseId = this.getAttribute("data-id");
      const course = document.querySelector(`.course[data-id="${courseId}"]`);
      const courseTitle = course.querySelector("h4").textContent;
      const courseDescription = course.querySelector("p").textContent;
      const courseDetail = course.getAttribute("data-detail");

      modalContent.innerHTML = `<h2>${courseTitle}</h2><p>${courseDescription}</p><p>${courseDetail}</p>`;

      modal.style.display = "block";

      setTimeout(function () {
        modal.style.display = "none";
      }, 60000); 
    });
  });
  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });
 window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
});
