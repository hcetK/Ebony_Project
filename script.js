document.addEventListener("DOMContentLoaded", function() {
    const scrollButton = document.getElementById('scroll');
    const galleryWrapper = document.querySelector('.gallery-wrapper');

    scrollButton.addEventListener('click', function() {
        galleryWrapper.scrollBy({
            left: 300, // Adjust this value based on how much you want to scroll
            behavior: 'smooth'
        });
    });
});
// Show or hide the back-to-top button based on scroll position
window.addEventListener('scroll', function() {
    var backToTopButton = document.getElementById('back-to-top');
    if (window.scrollY > 300) { // Adjust scroll height as needed
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  });
  
  // Smooth scroll to top when the back-to-top button is clicked
  document.getElementById('back-to-top').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    // Get all elements with the class 'popup-btn'
    var popupBtns = document.querySelectorAll('.popup-btn');
  
    // Get the popup container
    var popupContainer = document.getElementById('popupContainer');
  
    // Get the image element inside the popup
    var popupImg = document.getElementById('popupImg');
  
    // Close button
    var closeBtn = document.querySelector('.close');
    closeBtn.addEventListener('click', closePopup);
  
    // Next and previous buttons
    var prevBtn = document.getElementById('prevBtn');
    var nextBtn = document.getElementById('nextBtn');
  
    // Current index
    var currentIndex = 0;
  
    // Array to hold image sources
    var imageSources = [];
  
    // Add click event listeners to all popup buttons
    popupBtns.forEach(function(btn, index) {
      btn.addEventListener('click', function() {
        currentIndex = index;
        openPopup(btn.src);
      });
      imageSources.push(btn.src);
    });
  
    // Function to open the popup
    function openPopup(src) {
      popupContainer.style.display = 'flex';
      popupImg.src = src;
    }
  
    // Function to close the popup
    function closePopup() {
      popupContainer.style.display = 'none';
    }
  
    // Function to handle next button click
    nextBtn.addEventListener('click', function() {
      currentIndex = (currentIndex + 1) % imageSources.length;
      popupImg.src = imageSources[currentIndex];
    });
  
    // Function to handle previous button click
    prevBtn.addEventListener('click', function() {
      currentIndex = (currentIndex - 1 + imageSources.length) % imageSources.length;
      popupImg.src = imageSources[currentIndex];
    });
  
    // Close popup if clicked outside of the image
    popupContainer.addEventListener('click', function(event) {
      if (event.target === popupContainer) {
        closePopup();
      }
    });
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
      document.getElementById('popupContainer').style.display = 'block';
    }, 5000); // Adjust the delay time in milliseconds (e.g., 3000 for 3 seconds)
  
    // Close the popup when clicked outside the popup content
    document.getElementById('popupContainer').addEventListener('click', function(event) {
      if (event.target === this) {
        document.getElementById('popupContainer').style.display = 'none';
      }
    });
  
    // Close the popup when the close button is clicked
    document.getElementById('closePopup').addEventListener('click', function() {
      document.getElementById('popupContainer').style.display = 'none';
    });
  });

  
// 'js/mian.js'

var slider_img = document.querySelector('.slider-img');
var images = ['a.jpg', 'b.jpg', 'c.jpg', 'd.jpg', 'e.jpg'];
var i = 0;

function prev(){
	if(i <= 0) i = images.length;	
	i--;
	return setImg();			 
}

function next(){
	if(i >= images.length-1) i = -1;
	i++;
	return setImg();			 
}

function setImg(){
	return slider_img.setAttribute('src', "images/"+images[i]);
	
}

  
