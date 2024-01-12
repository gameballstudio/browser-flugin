document.addEventListener("click", function(e) {
  if (!e.target.classList.contains("page-choice")) {
    return;
  }

  var chosenPage = "" + e.target.dataset.link;
  browser.tabs.create({
    url: chosenPage
  });

});