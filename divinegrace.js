        document.addEventListener('DOMContentLoaded', () => {
            const slides = document.querySelectorAll('.slide');
            let currentSlide = 0;
            const slideInterval = 5000; // Time in milliseconds (5000ms = 5 seconds)

            function nextSlide() {
                // Remove the active class from the current slide
                slides[currentSlide].classList.remove('active');
                
                // Calculate the next slide index (loops back to 0 after the last slide)
                currentSlide = (currentSlide + 1) % slides.length;
                
                // Add the active class to the new slide
                slides[currentSlide].classList.add('active');
            }

            // Start the automatic slider
            setInterval(nextSlide, slideInterval);
        });

        function toggleMenu() {
            document.getElementById("navlinks").classList.toggle("active");
        }

        