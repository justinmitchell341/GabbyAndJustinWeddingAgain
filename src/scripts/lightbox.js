// Open the Modal
console.log("lightbox.js is here");
// Debugging function to log current state
// Open the Modal
// Open the Modal
// Open the Modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
    console.log("Modal opened");
  }
  
  // Close the Modal
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
    console.log("Modal closed");
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
    console.log("Changed slide by " + n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
    console.log("Current slide is " + n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("hover-shadow");
    var captionText = document.getElementById("caption");
    console.log("Total slides: " + slides.length);
    console.log("Total dots: " + dots.length);
    
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    
    if (slides[slideIndex - 1]) {
      slides[slideIndex - 1].style.display = "block";
      if (dots[slideIndex - 1]) {
        dots[slideIndex - 1].className += " active";
        captionText.innerHTML = dots[slideIndex - 1].alt;
      }
    } else {
      console.log("Slide not found: " + (slideIndex - 1));
    }
    console.log("Showing slide " + slideIndex);
  }
  
  // Adding event listeners to images and navigation buttons
  document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".container img");
    images.forEach((img, index) => {
      img.addEventListener("click", () => {
        openModal();
        currentSlide(index + 1);
      });
    });
  
    // Close modal when clicking outside of the modal content
    document.getElementById("myModal").addEventListener("click", (event) => {
      if (event.target.className === "modal") {
        closeModal();
      }
    });
  
    // Adding event listeners to navigation buttons
    document.querySelector(".prev").addEventListener("click", () => {
      plusSlides(-1);
    });
  
    document.querySelector(".next").addEventListener("click", () => {
      plusSlides(1);
    });
  
    console.log("Event listeners added to images and navigation buttons");
  });
  
  
  
  
  console.log("lightbox.js EOF");