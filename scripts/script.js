function go(loc = "") {
  if (loc === "") {
    window.scrollTo(0, 0);
    return;
  }
  let elem = document.getElementById(loc);
  window.scrollTo(
    0,
    window.pageYOffset + elem.getBoundingClientRect().top - 60.6
  );
}

function show_hide(a) {
  let element = document.getElementById(a);
  if (this.innerText === "Show more") {
    $(element).show(500);
    this.innerHTML = "Show less";
  } else {
    $(element).hide(500);
    this.innerHTML = "Show more";
  }
}

(function updateCopyright(){
  const copyrightElement = document.getElementsByClassName('copyright')[0];
  copyrightElement.children[1].innerText = `| ${(new Date()).getFullYear()}`
})()

window.onscroll = function () {
  let topbtn = document.getElementById("top-btn");
  if (document.documentElement.scrollTop < 71) {
    topbtn.style.display = "none";
  } else {
    topbtn.style.display = "block";
  }
};

function barMenuClick() {
  let navbar = document.querySelector(".nav .links");
  navbar.style.width = "200px";
}
function closeMenuClick() {
  let navbar = document.querySelector(".nav .links");
  navbar.style.width = "0";
}
