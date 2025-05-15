const anmeldelser = [
  {
    tekst: "Deres fantastiske smage og dejlige attitude skaber en dejlig oplevelse!",
    forfatter: "Sean P."
  },
  {
    tekst: "Super service og maden var i topklasse – klart anbefalelsesværdigt!",
    forfatter: "Mia L."
  },
  {
    tekst: "Fantastisk atmosfære og virkelig god vinmenu!",
    forfatter: "Lars B." // Denne bliver ikke vist, da vi kun viser 2
  }
];

function visToAnmeldelser() {
  const container = document.getElementById("testimonials");

  for (let i = 0; i < 2; i++) {
    const anmeldelse = anmeldelser[i];

    const div = document.createElement("div");
    div.className = `testimonial testimonial${i + 1}`; // testimonial1, testimonial2

    const tekst = document.createElement("p");
    tekst.textContent = `"${anmeldelse.tekst}"`;

    const author = document.createElement("p");
    author.className = "author";
    author.textContent = `- ${anmeldelse.forfatter}`;

    div.appendChild(tekst);
    div.appendChild(author);
    container.appendChild(div);
  }
}

visToAnmeldelser();
