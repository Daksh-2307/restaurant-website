document.addEventListener("DOMContentLoaded", function () {

  // Hamburger
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav_links");
  const navItems = document.querySelector(".nav_links a");
    
  if(hamburger){
    hamburger.addEventListener("click",function ()  {
      navLinks.classList.toggle("active");
    });
  }
  
  const navLinksITems = document.querySelectorAll(".nav_links a");
  
  navLinksITems.forEach(link => {
    link.addEventListener("click" , ()=>
    {
      if(navLinks.classList.contains("active")
      ){
    navLinks.classList.remove("active");
      }
    });
  });

  // Contact form
  const contactForm = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !phone || !message) {
        status.style.color = "red";
        status.textContent = "Please fill all fields!";
        return;
      }

      status.style.color = "green";
      status.textContent = "Message sent successfully! 🍽️";

      contactForm.reset();
    });
  }

}); 
