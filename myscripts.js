<<<<<<< HEAD
            //navbar scroll animation
            const navEl = document.querySelector('.navbar');
            window.addEventListener('scroll', ()=>{
                if(window.scrollY >= 100) {
                    navEl.classList.add('navbar-scrolled');
                } else if(window.scrollY < 100){
                    navEl.classList.remove('navbar-scrolled');
                }
            });

            window.addEventListener("scroll", function () {
            const brand = document.querySelector(".navbar-brand");
            if (window.scrollY > 100) {
                brand.classList.add("show-brand");
            } else {
                brand.classList.remove("show-brand");
            }
            });

            //slide left text animation on scroll
            
            function isInViewport(element) {
                const rect = element.getBoundingClientRect();
                return (
                rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.bottom >= 0
                );
            }

            function checkSlideIn() {
                const paragraphs = document.querySelectorAll('.slide-animation p');

                paragraphs.forEach((p, index) => {
                if (isInViewport(p) && !p.classList.contains('slide-in')) {
                    setTimeout(() => {
                    p.classList.add('slide-in');
                    }, index * 300); 
                }
                });
            }

            window.addEventListener('scroll', checkSlideIn);

            //slideup cases animation on scroll
           
            document.addEventListener("DOMContentLoaded", () => {
            const caseItems = document.querySelectorAll(".case-item");

            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                    observer.unobserve(entry.target); // Optional: Only animate once
                }
                });
            }, {
                threshold: 0.2
            });

            caseItems.forEach(item => {
                item.style.animationPlayState = 'paused';
                observer.observe(item);
            });
            });


           
           //toggleButton
           document.addEventListener("DOMContentLoaded", function (){
            const toggleButton = document.getElementById("toggleMode");
            const navbar = document.querySelector(".navbar");
            const navbarBrand = document.querySelector(".navbar-brand");
            const toggleModeBtn = document.getElementById("toggleMode");
            const navLinks = document.querySelectorAll("nav a");
            const right = document.querySelector(".right");
            const caseStudies=document.querySelector(".case-studies");
            const casesTitles = document.querySelectorAll(".case-images a");
            const dropButton = document.querySelector(".dropbutton");
            const dropContent = document.querySelector(".dropdown-content");
            const dropText = document.querySelectorAll(".dropdown-content a");

            toggleButton.addEventListener("click", function () {
                document.body.classList.toggle("dark-mode");
                navbar.classList.toggle("dark-mode");
                navbarBrand.classList.toggle("dark-mode");
                right.classList.toggle("dark-mode");
                caseStudies.classList.toggle("dark-mode");
                dropButton.classList.toggle("dark-mode");
                dropContent.classList.toggle("dark-mode");

                navLinks.forEach(link => {
                    link.classList.toggle("dark-mode");
                    });
                    casesTitles.forEach(link => {
                        link.classList.toggle("dark-mode");
                    });
                    dropText.forEach(link => {
                        link.classList.toggle("dark-mode");
                    });

                // Toggle button text
                    toggleButton.textContent = document.body.classList.contains("dark-mode")
                ? "Light mode"
                : "Dark mode";
            });
            });
          

            toggleModeBtn.addEventListener("click", function () {
            
           
            

           
        });
=======
            //navbar scroll animation
            const navEl = document.querySelector('.navbar');
            window.addEventListener('scroll', ()=>{
                if(window.scrollY >= 100) {
                    navEl.classList.add('navbar-scrolled');
                } else if(window.scrollY < 100){
                    navEl.classList.remove('navbar-scrolled');
                }
            });

            window.addEventListener("scroll", function () {
            const brand = document.querySelector(".navbar-brand");
            if (window.scrollY > 100) {
                brand.classList.add("show-brand");
            } else {
                brand.classList.remove("show-brand");
            }
            });

            //slide left text animation on scroll
            
            function isInViewport(element) {
                const rect = element.getBoundingClientRect();
                return (
                rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.bottom >= 0
                );
            }

            function checkSlideIn() {
                const paragraphs = document.querySelectorAll('.slide-animation p');

                paragraphs.forEach((p, index) => {
                if (isInViewport(p) && !p.classList.contains('slide-in')) {
                    setTimeout(() => {
                    p.classList.add('slide-in');
                    }, index * 300); 
                }
                });
            }

            window.addEventListener('scroll', checkSlideIn);

            //slideup cases animation on scroll
           
            document.addEventListener("DOMContentLoaded", () => {
            const caseItems = document.querySelectorAll(".case-item");

            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                    observer.unobserve(entry.target); // Optional: Only animate once
                }
                });
            }, {
                threshold: 0.2
            });

            caseItems.forEach(item => {
                item.style.animationPlayState = 'paused';
                observer.observe(item);
            });
            });


           
           //toggleButton
           document.addEventListener("DOMContentLoaded", function (){
            const toggleButton = document.getElementById("toggleMode");
            const navbar = document.querySelector(".navbar");
            const navbarBrand = document.querySelector(".navbar-brand");
            const toggleModeBtn = document.getElementById("toggleMode");
            const navLinks = document.querySelectorAll("nav a");
            const right = document.querySelector(".right");
            const caseStudies=document.querySelector(".case-studies");
            const casesTitles = document.querySelectorAll(".case-images a");
            const dropButton = document.querySelector(".dropbutton");
            const dropContent = document.querySelector(".dropdown-content");
            const dropText = document.querySelectorAll(".dropdown-content a");

            toggleButton.addEventListener("click", function () {
                document.body.classList.toggle("dark-mode");
                navbar.classList.toggle("dark-mode");
                navbarBrand.classList.toggle("dark-mode");
                right.classList.toggle("dark-mode");
                caseStudies.classList.toggle("dark-mode");
                dropButton.classList.toggle("dark-mode");
                dropContent.classList.toggle("dark-mode");

                navLinks.forEach(link => {
                    link.classList.toggle("dark-mode");
                    });
                    casesTitles.forEach(link => {
                        link.classList.toggle("dark-mode");
                    });
                    dropText.forEach(link => {
                        link.classList.toggle("dark-mode");
                    });

                // Toggle button text
                    toggleButton.textContent = document.body.classList.contains("dark-mode")
                ? "Light mode"
                : "Dark mode";
            });
            });
          

            toggleModeBtn.addEventListener("click", function () {
            
           
            

           
        });
>>>>>>> 2643a88101be69eaa9a19de51c7c100ae53f4a72
      