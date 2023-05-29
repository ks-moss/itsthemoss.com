let slideIndex = 1;
let count = 0;
let interval;

// Default
showSlides(slideIndex);

function startCounter() {
    interval = setInterval(() => {
    //   console.log(count + ' seconds');
      count++;
  
      // Stop the loop after 10 seconds
      if (count === 3) {
        showSlides(slideIndex++)
      }
    }, 1000);
  };

function prevNextSlide(n) {
  // Perform your prev/next slide logic here
  showSlides(slideIndex += n);
};

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {

    // Terminate the interval if necessary
    clearInterval(interval);
    // Restart the counter
    count = 0;

    // Get array of the classes
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    // Check if input n is valid or not
    if (n > slides.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = slides.length}

    // Default setting
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    for (let j = 0; j < dots.length; j++) {
        dots[j].className = dots[j].className.replace(" active", "");
    }

    // if slideIndex is greater than slides' length, then set it to 1
    if (slideIndex > slides.length) {slideIndex = 1}

    // Activate the display and active the dot
    slides[slideIndex-1].style.display = "block"; 
    dots[slideIndex-1].className += " active";

    startCounter(); 
}