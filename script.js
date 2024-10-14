document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault();

    
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();


    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const phonePattern = /^[0-9]{10}$/;

    if (name === "") {
        alert("Please enter your name.");
        return;
    }
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }
    if (!phonePattern.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }
    if (message === "") {
        alert("Please enter your message.");
        return;
    }


    alert("Form submitted successfully!");
    document.getElementById("contactForm").reset(); 
});

document.addEventListener("DOMContentLoaded", function () {
    
    const links = {
        home: document.querySelector('#home'),
        about: document.querySelector('#about'),
        vision: document.querySelector('#vision'),
        services: document.querySelector('#services'),
        contact: document.querySelector('#contact')
    };

    document.querySelectorAll('header ul li a').forEach(link => {
        link.addEventListener('click', function (event) {
            
            event.preventDefault();

            
            const targetId = this.getAttribute('href').substring(1); 
            const targetSection = links[targetId];

            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});