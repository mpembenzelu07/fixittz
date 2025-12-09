// Language Switching
document.addEventListener('DOMContentLoaded', function() {
    // Language Tabs
    const langTabs = document.querySelectorAll('.lang-tab');
    const swContents = document.querySelectorAll('.sw-content');
    const enContents = document.querySelectorAll('.en-content');
    
    function switchLanguage(lang) {
        if (lang === 'en') {
            swContents.forEach(el => el.classList.remove('active'));
            enContents.forEach(el => el.classList.add('active'));
            document.documentElement.lang = 'en';
        } else {
            swContents.forEach(el => el.classList.add('active'));
            enContents.forEach(el => el.classList.remove('active'));
            document.documentElement.lang = 'sw';
        }
        
        // Update active tab
        langTabs.forEach(tab => {
            tab.classList.remove('active');
            if (tab.getAttribute('data-lang') === lang) {
                tab.classList.add('active');
            }
        });
    }
    
    langTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const lang = tab.getAttribute('data-lang');
            switchLanguage(lang);
        });
    });
    
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
    
    // Navbar Scroll Effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (navbar && window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else if (navbar) {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Search Form Submission
    const searchForm = document.querySelector('.search-form');
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const isSwahili = document.querySelector('.sw-content.active') !== null;
            
            if (isSwahili) {
                alert('Utafutaji umefanywa. Tunaonyesha matokeo...');
            } else {
                alert('Search completed. Showing results...');
            }
        });
    }
    
    // Booking Buttons
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('btn-book') || 
            e.target.closest('.btn-book')) {
            e.preventDefault();
            const isSwahili = document.querySelector('.sw-content.active') !== null;
            
            if (isSwahili) {
                alert('Umepanga fundi. Tutakutumia maelezo zaidi kupitia WhatsApp.');
            } else {
                alert('You have booked a handyman. We will send you more details via WhatsApp.');
            }
        }
    });
    
    // Register Button
    const registerBtn = document.querySelector('.btn-register');
    if (registerBtn) {
        registerBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const isSwahili = document.querySelector('.sw-content.active') !== null;
            
            if (isSwahili) {
                alert('Umeelekezwa kwenye ukurasa wa usajili. Tafadhali jaza fomu.');
            } else {
                alert('You are being redirected to the registration page. Please fill out the form.');
            }
        });
    }
    
    // Initialize Swiper for testimonials
    if (typeof Swiper !== 'undefined') {
        const testimonialSwiper = new Swiper('.swiper', {
            slidesPerView: 1,
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            loop: true,
            breakpoints: {
                768: {
                    slidesPerView: 2,
                }
            }
        });
    }
});
