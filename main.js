const parallax = document.getElementById("home-img-lg");
const parallax1 = document.getElementById("parallax1");
const parallax2 = document.getElementById("parallax2");
const rsvpButton1 = document.getElementById("rsvp-button1");
const rsvpButton2 = document.getElementById("rsvp-button2");

window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionX = offset * (-0.3) - 250 + "px";
})


window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  offset -= 3100;
  parallax1.style.backgroundPositionY = offset * (0.1) - 150 + "px";
})

window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  offset -= 4800;
  parallax2.style.backgroundPositionY = offset * (-0.1) + "px";
})

function myFunction() {
  document.getElementById("check").checked = false;
}



function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

// Logica para el boton de CONFIRMAR

rsvpButton1.addEventListener("click", function () {
  window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSd5mbaq1-Icscbqj7qWppTCCTvrXKY-u0y54njT0uoFGQJGnw/viewform?usp=pp_url";
});

rsvpButton2.addEventListener("click", function () {
  window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSd5mbaq1-Icscbqj7qWppTCCTvrXKY-u0y54njT0uoFGQJGnw/viewform?usp=pp_url";
});

