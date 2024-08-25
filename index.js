document.addEventListener("DOMContentLoaded", () => {
  // Load section1 into the section1-component
  fetch("section1.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("section1-component").innerHTML = data;
    });

  // Load section2 into the section2-component
  fetch("section2.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("section2-component").innerHTML = data;
    });
  fetch("section2.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("section2-component2").innerHTML = data;
    });

  // Load the next button component into the next-button-component
  fetch('nextButtonComponent.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('next-button-component').innerHTML = data;

      // Determine the current page and set the next page URL and button text
      const currentPage = window.location.pathname.split('/').pop();
      let nextPage = '';
      let buttonText = 'Next Step';

      switch (currentPage) {
        case 'index.html':
          nextPage = 'page2.html';
          break;
        case 'page2.html':
          nextPage = 'page3.html';
          break;
        case 'page3.html':
          nextPage = 'page4.html';
          break;
        case 'page4.html':
          nextPage = 'page5.html';
          buttonText = 'Last Step';
          break;
        case 'page5.html':
          nextPage = 'some-other-page.html'; // Change as needed
          buttonText = 'Get Free Consult';
          break;
        default:
          nextPage = 'index.html';
          break;
      }

      // Set button text and add event listener to the button
      const nextButton = document.querySelector('.next-step');
      if (nextButton) {
        nextButton.textContent = buttonText;
        nextButton.addEventListener('click', () => {
          window.location.href = nextPage;
        });
      }
    });

    fetch('footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer-container').innerHTML = data;
    });

  // Radio button logic
  const yesIcon = document.getElementById("yes-icon");
  const yesIcon1 = document.getElementById("yes1-icon");
  const noIcon = document.getElementById("no-icon");
  const noIcon1 = document.getElementById("no1-icon");

  if (yesIcon && noIcon) {
    yesIcon.addEventListener("click", () => {
      yesIcon.classList.toggle("fas");
      yesIcon.classList.toggle("far");
      noIcon.classList.remove("fas");
      noIcon.classList.add("far");
    });

    noIcon.addEventListener("click", () => {
      noIcon.classList.toggle("fas");
      noIcon.classList.toggle("far");
      yesIcon.classList.remove("fas");
      yesIcon.classList.add("far");
    });
  }

  if (yesIcon1 && noIcon1) {
    yesIcon1.addEventListener("click", () => {
      yesIcon1.classList.toggle("fas");
      yesIcon1.classList.toggle("far");
      noIcon1.classList.remove("fas");
      noIcon1.classList.add("far");
    });

    noIcon1.addEventListener("click", () => {
      noIcon1.classList.toggle("fas");
      noIcon1.classList.toggle("far");
      yesIcon1.classList.remove("fas");
      yesIcon1.classList.add("far");
    });
  }
});
