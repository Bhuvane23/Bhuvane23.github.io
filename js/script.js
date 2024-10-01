let slideIndex = 1;
        showSlides(slideIndex);

        function plusSlides(n) {
            showSlides(slideIndex += n);
        }

        function currentSlide(n) {
            showSlides(slideIndex = n);
        }

        function showSlides(n) {
            let i;
            let slides = document.getElementsByClassName("mySlides");
            let dots = document.getElementsByClassName("dot");
            if (n > slides.length) {slideIndex = 1}
            if (n < 1) {slideIndex = slides.length}
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";  
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex-1].style.display = "block";  
            dots[slideIndex-1].className += " active";
        }

        // Automatic slideshow
        setInterval(() => plusSlides(1), 5000);
        $('button').click(function() {
            $("article").toggleClass("paused")
          });
          function animateCount(target, duration) {
            let start = 0;
            const increment = target / (duration / 100); // Calculate how much to increment each step
            const countDisplay = document.getElementById('count');
        
            const interval = setInterval(() => {
                start += increment;
                countDisplay.innerText = Math.floor(start);
                if (start >= target) {
                    clearInterval(interval);
                    countDisplay.innerText = target; // Ensure it ends at the target value
                }
            }, 100);
        }
        
        // Call the function when you want to start the counting animation
        animateCount(80, 2000); // Count to 80 over 2000 milliseconds (2 seconds)
        document.addEventListener('DOMContentLoaded', () => {
            const counterSection = document.getElementById('counter');
            counterSection.classList.add('show'); // Add the class to trigger the slide down
            animateCount(80, 2000); // Start the count animation
        });
        