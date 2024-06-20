let menu = document.getElementById("list");
let navbar = document.getElementsByClassName('navbar')[0]; // Access the first element in the collection

menu.onclick = () => {
   
    navbar.classList.toggle('active');
}



document.getElementById("search_icon").onclick = () => {
    document.getElementById("search-form").classList.toggle('active');
}

document.getElementById("close").onclick = () => {
    document.getElementById("search-form").classList.remove('active');
}


// slide 


const slidesContainer = document.getElementById('slide');
let currentIndex = 0;

function showSlide(index) {
  slidesContainer.style.transform = `translateX(${-index * 100}vw)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % 5; // Adjust the number based on the total number of slides
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + 5) % 5; // Adjust the number based on the total number of slides
  showSlide(currentIndex);
}

// Handle keyboard navigation
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') {
    nextSlide();
  } else if (event.key === 'ArrowLeft') {
    prevSlide();
  }
});

// Auto-advance to the next slide every 3 seconds (adjust as needed)
setInterval(nextSlide, 3000);

showSlide(currentIndex); // Show the initial slide