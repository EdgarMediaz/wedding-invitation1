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
  parallax1.style.backgroundPositionY = offset * (0.1) + "px";
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
  const reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

// <=========== Logica para el boton de CONFIRMAR =========>

rsvpButton1.addEventListener("click", function () {
  window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSd5mbaq1-Icscbqj7qWppTCCTvrXKY-u0y54njT0uoFGQJGnw/viewform?usp=pp_url";
});

rsvpButton2.addEventListener("click", function () {
  window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSd5mbaq1-Icscbqj7qWppTCCTvrXKY-u0y54njT0uoFGQJGnw/viewform?usp=pp_url";
});

// <============= Logica para el CONTADOR =============>

// Fecha del evento (reemplaza esta fecha con la fecha de tu evento)
const fechaEvento = new Date('2023-10-20');

function actualizarContador() {
  const fechaActual = new Date();
  const diferencia = fechaEvento - fechaActual;

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

  document.getElementById('dias').textContent = dias;
}

// Llama a la función para actualizar el contador cada segundo
setInterval(actualizarContador, 1000);

