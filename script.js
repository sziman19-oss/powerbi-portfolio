// Power BI Portfolio — vanilla JavaScript
// No libraries or build tools required.

document.addEventListener("DOMContentLoaded", function () {

  /* -----------------------------------------
     1. Footer year
  ----------------------------------------- */

  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }


  /* -----------------------------------------
     2. Mobile navigation
  ----------------------------------------- */

  const menuButton = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuButton && navLinks) {

    menuButton.addEventListener("click", function () {

      const isOpen = navLinks.classList.toggle("open");

      menuButton.setAttribute(
        "aria-expanded",
        isOpen ? "true" : "false"
      );

      menuButton.textContent = isOpen ? "Close" : "Menu";
    });


    // Close menu when a navigation link is clicked

    const links = navLinks.querySelectorAll("a");

    links.forEach(function (link) {

      link.addEventListener("click", function () {

        navLinks.classList.remove("open");

        menuButton.setAttribute(
          "aria-expanded",
          "false"
        );

        menuButton.textContent = "Menu";
      });

    });


    // Close menu when clicking outside

    document.addEventListener("click", function (event) {

      if (
        navLinks.classList.contains("open") &&
        !navLinks.contains(event.target) &&
        !menuButton.contains(event.target)
      ) {

        navLinks.classList.remove("open");

        menuButton.setAttribute(
          "aria-expanded",
          "false"
        );

        menuButton.textContent = "Menu";
      }

    });

  }


  /* -----------------------------------------
     3. Placeholder Power BI links
  ----------------------------------------- */

  const placeholderLinks = document.querySelectorAll(
    '[data-placeholder="true"]'
  );

  placeholderLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

      event.preventDefault();

      alert(
        "This is a placeholder. Replace the # in index.html with your Power BI report URL or screenshot."
      );

    });

  });


  /* -----------------------------------------
     4. Active navigation while scrolling
  ----------------------------------------- */

  const sections = document.querySelectorAll(
    "main section[id]"
  );

  const navigationAnchors = document.querySelectorAll(
    '.nav-links a[href^="#"]'
  );


  // Only run this if the browser supports
  // IntersectionObserver

  if (
    "IntersectionObserver" in window &&
    sections.length > 0 &&
    navigationAnchors.length > 0
  ) {

    const observer = new IntersectionObserver(
      function (entries) {

        entries.forEach(function (entry) {

          if (!entry.isIntersecting) {
            return;
          }


          // Remove active state from all links

          navigationAnchors.forEach(function (anchor) {

            anchor.classList.remove("active");

          });


          // Find the link corresponding
          // to the section currently visible

          const activeAnchor = document.querySelector(
            '.nav-links a[href="#' +
            entry.target.id +
            '"]'
          );


          if (activeAnchor) {

            activeAnchor.classList.add("active");

          }

        });

      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0
      }
    );


    sections.forEach(function (section) {

      observer.observe(section);

    });

  }

});
