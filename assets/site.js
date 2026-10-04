// Theme toggle + small live numbers. Everything else is plain HTML.
(function () {
  var root = document.documentElement;
  var btn = document.querySelector(".theme");
  if (btn) btn.addEventListener("click", function () {
    var dark = root.dataset.theme
      ? root.dataset.theme === "dark"
      : matchMedia("(prefers-color-scheme: dark)").matches;
    root.dataset.theme = dark ? "light" : "dark";
    try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
  });

  var now = new Date();
  document.querySelectorAll("[data-since]").forEach(function (el) {
    var p = el.dataset.since.split("-");
    var years = now.getFullYear() - +p[0] - (now.getMonth() + 1 < +p[1] ? 1 : 0);
    el.textContent = years;
  });
  document.querySelectorAll("[data-year]").forEach(function (el) { el.textContent = now.getFullYear(); });
})();
