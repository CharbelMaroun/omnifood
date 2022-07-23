////////////////////////////////////////
// NAVIGATION
////////////////////////////////////////

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
const mainNavLink = document.querySelectorAll(".main-nav-link");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

mainNavLink.forEach(function (link) {
  link.addEventListener("click", function () {
    headerEl.classList.remove("nav-open");
  });
});

////////////////////////////////////////
// STICKY
////////////////////////////////////////

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    }

        if (ent.isIntersecting) {
          document.body.classList.remove("sticky");
        }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);
