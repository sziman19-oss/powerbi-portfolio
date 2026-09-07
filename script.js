document.addEventListener("DOMContentLoaded", function () {

  /* =========================
     FOOTER YEAR
  ========================== */

  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }


  /* =========================
     MOBILE NAVIGATION
  ========================== */

  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", function () {

      const isOpen = navMenu.classList.toggle("open");

      menuToggle.setAttribute(
        "aria-expanded",
        isOpen ? "true" : "false"
      );

      menuToggle.setAttribute(
        "aria-label",
        isOpen
          ? "Close navigation menu"
          : "Open navigation menu"
      );

      menuToggle.textContent = isOpen
        ? "Close"
        : "Menu";

    });


    /* Close mobile menu after clicking a link */

    const navLinks = navMenu.querySelectorAll("a");

    navLinks.forEach(function (link) {

      link.addEventListener("click", function () {

        navMenu.classList.remove("open");

        menuToggle.setAttribute(
          "aria-expanded",
          "false"
        );

        menuToggle.setAttribute(
          "aria-label",
          "Open navigation menu"
        );

        menuToggle.textContent = "Menu";

      });

    });

  }


  /* =========================
     PLACEHOLDER PROJECT LINKS
  ========================== */

  const placeholderLinks = document.querySelectorAll(
    '[data-placeholder="true"]'
  );

  placeholderLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

      event.preventDefault();

      alert(
        "This project does not have a live dashboard link yet. Replace the placeholder link in index.html with your Power BI URL."
      );

    });

  });

});
