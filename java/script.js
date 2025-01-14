
document.addEventListener('DOMContentLoaded', () => {

  const text = "hi, it's Nina Kapralov";
  const typedTextElement = document.getElementById('typed-text');
  let charIndex = 0;
  const typingSpeed = 100;

  function typeText() {
      if (charIndex < text.length) {
          typedTextElement.textContent += text.charAt(charIndex);
          charIndex++;
          setTimeout(typeText, typingSpeed);
      }
  }

  typeText();

  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
          card.classList.add('black-hover');
      });
      card.addEventListener('mouseleave', () => {
          card.classList.remove('black-hover');
      });
  });
});
document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".cta-button");

    button.addEventListener("click", () => {
        button.classList.add("loading");

// button loading
        setTimeout(() => {
            button.classList.remove("loading");
            alert("Loading Complete!");
        }, 3000); 
    });
});


  document.addEventListener("DOMContentLoaded", () => {
            const portText = "Port";
            const folioText = "Folio";

            const portElement = document.getElementById("port");
            const folioElement = document.getElementById("folio");

            let portIndex = 0;
            let folioIndex = 0;
            const typingSpeed = 150; // Speed of typing in milliseconds

            // Function to type the "Port" text
            function typePort() {
                if (portIndex < portText.length) {
                    portElement.textContent += portText.charAt(portIndex);
                    portIndex++;
                    setTimeout(typePort, typingSpeed);
                } else {
                    setTimeout(typeFolio, 300); // Wait before typing "Folio"
                }
            }

            // Function to type the "Folio" text
            function typeFolio() {
                if (folioIndex < folioText.length) {
                    folioElement.textContent += folioText.charAt(folioIndex);
                    folioIndex++;
                    setTimeout(typeFolio, typingSpeed);
                }
            }

            // Start typing animation
            typePort();
        });