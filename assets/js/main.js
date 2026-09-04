/* =====================================================================
   Dani & Benji – shared behaviour
   Vanilla JS, no dependencies. Loaded with `defer` on every page.
   ===================================================================== */
(function () {
  "use strict";

  /* ---- Mobile nav toggle ---- */
  var toggle = document.querySelector(".nav-toggle");
  var links = document.getElementById("nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    // Close the menu after tapping a link (mobile)
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---- Highlight the current page in the nav ---- */
  var here = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a[href]").forEach(function (a) {
    var target = a.getAttribute("href").split("/").pop();
    if (target === here) a.classList.add("active");
  });

  /* ---- Countdown to the wedding ----
     3 Jan 2027, 6:30 PM Israel time. Israel is UTC+2 in January (IST),
     so the target instant is 16:30 UTC. */
  var cd = document.getElementById("countdown");
  if (cd) {
    var target = new Date("2027-01-03T18:30:00+02:00").getTime();
    var elNum = {
      days: document.getElementById("cd-days"),
      hours: document.getElementById("cd-hours"),
      mins: document.getElementById("cd-mins"),
      secs: document.getElementById("cd-secs")
    };
    var pad = function (n) { return (n < 10 ? "0" : "") + n; };

    var tick = function () {
      var diff = target - Date.now();
      if (diff <= 0) {
        cd.innerHTML = '<p class="hero__tagline" style="font-size:1.6rem">' +
          "Mazal tov – we’re married!</p>";
        clearInterval(timer);
        return;
      }
      var d = Math.floor(diff / 86400000);
      var h = Math.floor((diff % 86400000) / 3600000);
      var m = Math.floor((diff % 3600000) / 60000);
      var s = Math.floor((diff % 60000) / 1000);
      if (elNum.days) elNum.days.textContent = d;
      if (elNum.hours) elNum.hours.textContent = pad(h);
      if (elNum.mins) elNum.mins.textContent = pad(m);
      if (elNum.secs) elNum.secs.textContent = pad(s);
    };
    tick();
    var timer = setInterval(tick, 1000);
  }

  /* ---- Gifts: reveal bank details on request ---- */
  var revealBtn = document.getElementById("reveal-bank");
  var bank = document.getElementById("bank-details");
  if (revealBtn && bank) {
    revealBtn.addEventListener("click", function () {
      var showing = !bank.hasAttribute("hidden");
      if (showing) {
        bank.setAttribute("hidden", "");
        revealBtn.textContent = "Show payment details";
      } else {
        bank.removeAttribute("hidden");
        revealBtn.textContent = "Hide payment details";
        bank.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    });
  }
})();
