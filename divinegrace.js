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

    
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        navy: {
                            800: '#1e295b',
                            900: '#0f172a',
                            950: '#0a0e1a',
                        },
                        gold: {
                            400: '#fbbf24',
                            500: '#f59e0b',
                            600: '#d97706',
                        }
                    }
                }
            }
        }
  