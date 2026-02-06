/*const navlinks = document.querySelectorAll(".nav-menu .nav-link");*/
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
 

menuOpenButton.addEventListener("click", () => {
    // Toggle mobile menu visibility
document.body.classList.toggle("show-mobile-menu");
});
// close menu when the close button is clicked
menuCloseButton.addEventListener("click", () =>  menuOpenButton.click());

/*nav-link.forEach(link => {
  link.addEventListener("click" , () =>  menuOpenButton.click());
})*/



//Initialize Swipper
const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor:true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets:true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

//Responsive breakpoints
  breakpoints: {
    0: {
      sliderPerview: 1
    },
    768: {
      sliderPerview: 2
    },
    1024: {
      sliderPerview: 3
    }
  }
  const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = contactForm.querySelector('input[type="text"]').value;
  const email = contactForm.querySelector('input[type="email"]').value;
  const message = contactForm.querySelector('textarea').value;

  try {
    const response = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, message })
    });

    const data = await response.json();
    alert(data.message);
    contactForm.reset();

  } catch (error) {
    alert("Failed to send message");
  }
});


function openOrderForm(itemName) {
  document.getElementById("item").value = itemName;
}

/* 👇 PASTE THIS AT THE BOTTOM */
document.getElementById("orderForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const orderData = {
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    item: document.getElementById("item").value
  };

  const res = await fetch("http://localhost:5000/api/orders", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(orderData)
  });

  const data = await res.json();
  alert(data.message);
});

function openOrder() {
  document.getElementById("orderPopup").style.display = "block";
}

function closeOrder() {
  document.getElementById("orderPopup").style.display = "none";
}

async function submitOrder() {
  const name = document.getElementById("orderName").value;
  const phone = document.getElementById("orderPhone").value;
  const item = document.getElementById("orderItem").value;

  const response = await fetch("http://localhost:5000/api/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name, phone, item })
  });

  const data = await response.json();
  alert(data.message);

  closeOrder();
}

});
