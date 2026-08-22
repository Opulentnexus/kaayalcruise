/* =========================================
   HEADER
========================================= */

const siteHeader =
    document.getElementById("siteHeader");

const menuToggle =
    document.getElementById("menuToggle");

const mobileMenu =
    document.getElementById("mobileMenu");


/* =========================================
   MOBILE MENU TOGGLE
========================================= */

menuToggle.addEventListener("click", () => {

    const isOpen =
        mobileMenu.classList.toggle("open");

    menuToggle.classList.toggle("open");

    menuToggle.setAttribute(
        "aria-expanded",
        isOpen
    );

});


/* =========================================
   CLOSE MOBILE MENU
========================================= */

document
    .querySelectorAll(
        ".mobile-link, .mobile-explore, .mobile-whatsapp"
    )
    .forEach(link => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove("open");

            menuToggle.classList.remove("open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });


/* =========================================
   CLOSE WHEN CLICKING OUTSIDE
========================================= */

document.addEventListener("click", (event) => {

    if (
        !siteHeader.contains(event.target) &&
        mobileMenu.classList.contains("open")
    ) {

        mobileMenu.classList.remove("open");

        menuToggle.classList.remove("open");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    }

});


/* =========================================
   HEADER SCROLL EFFECT
========================================= */

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        siteHeader.classList.add("scrolled");

    } else {

        siteHeader.classList.remove("scrolled");

    }

});




/* =========================================
   HERO INTERACTION
========================================= */

const hero = document.querySelector(".hero");
const heroCard = document.querySelector(".hero-cruise-card");


/* =========================================
   SUBTLE MOUSE PARALLAX
   DESKTOP ONLY
========================================= */

if (hero && heroCard) {

    hero.addEventListener("mousemove", (event) => {

        if (window.innerWidth <= 760) {
            return;
        }

        const rect =
            hero.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        const moveX =
            (x / rect.width - 0.5) * 10;

        const moveY =
            (y / rect.height - 0.5) * 10;

        heroCard.style.transform =
            `translate(${moveX}px, ${moveY}px)`;

    });


    hero.addEventListener("mouseleave", () => {

        heroCard.style.transform =
            "translate(0, 0)";

    });

}




/* =========================================
   PACKAGE DATA
========================================= */

const packageData = {

    premium: {

        category: "PREMIUM",

        title: "Premium Escape",

        description:
            "A comfortable and beautiful way to experience Kerala's backwaters.",

        duration: "1 Day",

        guests: "2 Guests",

        price: "₹8,500",

        itinerary: [

            ["10:00 AM", "Check-in & Welcome", "Welcome drink and boarding."],

            ["11:00 AM", "Cruise Begins", "Begin your journey through the backwaters."],

            ["01:00 PM", "Lunch", "Freshly prepared Kerala lunch onboard."],

            ["03:00 PM", "Scenic Cruise", "Relax and enjoy the beautiful surroundings."],

            ["05:00 PM", "Sunset Experience", "Enjoy the evening views on the water."],

            ["06:00 PM", "Cruise Ends", "Return to the boarding point."]

        ],

        food: [
            "Welcome Drink",
            "Kerala Lunch",
            "Seasonal Fruits",
            "Tea / Coffee",
            "Evening Snacks"
        ],

        included: [
            "Cruise Experience",
            "Welcome Drink",
            "Lunch",
            "Tea & Snacks",
            "Crew Service",
            "Safety Equipment"
        ]

    },


    /* =====================================
       DELUXE
    ====================================== */

    deluxe: {

        category: "DELUXE",

        title: "Deluxe Escape",

        description:
            "Extra comfort, thoughtful details and a more refined cruise experience.",

        duration: "2 Days / 1 Night",

        guests: "2 Guests",

        price: "₹12,500",

        itinerary: [

            ["11:00 AM", "Boarding", "Welcome drink and check-in."],

            ["12:00 PM", "Cruise Begins", "Start your backwater journey."],

            ["01:30 PM", "Lunch", "Traditional Kerala lunch onboard."],

            ["04:00 PM", "Village Cruise", "Explore beautiful village landscapes."],

            ["06:00 PM", "Sunset", "Relax during the golden hour."],

            ["07:30 PM", "Dinner", "Freshly prepared dinner."],

            ["09:00 PM", "Overnight Stay", "Relax in your private cabin."],

            ["07:00 AM", "Morning Cruise", "Wake up to peaceful backwater views."],

            ["08:30 AM", "Breakfast", "Fresh breakfast onboard."],

            ["10:00 AM", "Check-out", "End of your cruise experience."]

        ],

        food: [
            "Welcome Drink",
            "Kerala Lunch",
            "Evening Snacks",
            "Dinner",
            "Breakfast",
            "Tea / Coffee",
            "Fresh Fruits"
        ],

        included: [
            "Private Cabin",
            "All Meals",
            "Welcome Drink",
            "Tea & Snacks",
            "Crew Service",
            "Safety Equipment",
            "Overnight Stay"
        ]

    },


    /* =====================================
       LUXURY
    ====================================== */

    luxury: {

        category: "LUXURY",

        title: "Luxury Escape",

        description:
            "Elevated interiors, premium dining and a journey designed around complete relaxation.",

        duration: "2 Days / 1 Night",

        guests: "2 Guests",

        price: "₹18,500",

        itinerary: [

            ["11:00 AM", "Luxury Welcome", "Private welcome and check-in."],

            ["12:00 PM", "Luxury Cruise", "Begin your personalised journey."],

            ["01:30 PM", "Gourmet Lunch", "Premium Kerala-inspired dining."],

            ["04:00 PM", "Backwater Discovery", "Cruise through scenic waterways."],

            ["06:00 PM", "Sunset", "Private sunset experience."],

            ["07:30 PM", "Dinner", "Curated multi-course dinner."],

            ["09:00 PM", "Private Stay", "Relax in your luxury cabin."],

            ["07:00 AM", "Morning Cruise", "Peaceful morning cruise."],

            ["08:30 AM", "Breakfast", "Premium breakfast onboard."],

            ["10:30 AM", "Check-out", "End of your luxury journey."]

        ],

        food: [
            "Welcome Drink",
            "Premium Kerala Lunch",
            "Chef's Special Dinner",
            "Breakfast",
            "Fresh Fruits",
            "Tea / Coffee",
            "Evening Canapés"
        ],

        included: [
            "Luxury Cabin",
            "Premium Dining",
            "All Meals",
            "Personalised Service",
            "Welcome Drink",
            "Evening Snacks",
            "Safety Equipment"
        ]

    },


    /* =====================================
       ULTRA LUXURY
    ====================================== */

    ultra: {

        category: "ULTRA LUXURY",

        title: "Ultimate Escape",

        description:
            "Our most exclusive experience with exceptional comfort, privacy and personalised service.",

        duration: "2 Days / 1 Night",

        guests: "2 Guests",

        price: "₹28,500",

        itinerary: [

            ["11:00 AM", "Private Welcome", "Personalised welcome and priority boarding."],

            ["12:00 PM", "Private Cruise", "Begin your exclusive journey."],

            ["01:30 PM", "Gourmet Lunch", "Curated dining experience."],

            ["04:00 PM", "Private Backwater Tour", "Explore Kerala at your own pace."],

            ["06:00 PM", "Private Sunset", "Exclusive sunset experience."],

            ["07:30 PM", "Fine Dining", "Chef-curated dinner onboard."],

            ["09:00 PM", "Luxury Overnight", "Premium private accommodation."],

            ["07:00 AM", "Morning Experience", "Private morning cruise."],

            ["08:30 AM", "Breakfast", "Luxury breakfast experience."],

            ["10:30 AM", "Departure", "Private check-out and departure."]

        ],

        food: [
            "Welcome Drink",
            "Chef's Special Lunch",
            "Premium Canapés",
            "Fine Dining Dinner",
            "Luxury Breakfast",
            "Fresh Fruits",
            "Premium Beverages",
            "Tea / Coffee"
        ],

        included: [
            "Private Luxury Cabin",
            "Personalised Service",
            "All Meals",
            "Fine Dining",
            "Premium Beverages",
            "Private Cruise",
            "Welcome Experience",
            "Safety Equipment"
        ]

    }

};



/* =========================================
   OPEN PACKAGE
========================================= */

function openPackage(packageName) {

    const data = packageData[packageName];

    if (!data) return;


    /* BASIC DETAILS */

    document.getElementById("modalCategory").textContent =
        data.category;

    document.getElementById("modalTitle").textContent =
        data.title;

    document.getElementById("modalDescription").textContent =
        data.description;

    document.getElementById("modalDuration").textContent =
        data.duration;

    document.getElementById("modalGuests").textContent =
        data.guests;

    document.getElementById("modalPrice").textContent =
        data.price;

    document.getElementById("modalFooterPrice").textContent =
        data.price;



    /* =====================================
       ITINERARY
    ====================================== */

    document.getElementById("modalItinerary").innerHTML =

        data.itinerary.map(item => `

            <div class="itinerary-item">

                <time>
                    ${item[0]}
                </time>

                <div>

                    <strong>
                        ${item[1]}
                    </strong>

                    <p>
                        ${item[2]}
                    </p>

                </div>

            </div>

        `).join("");



    /* =====================================
       FOOD
    ====================================== */

    document.getElementById("modalFood").innerHTML =

        data.food.map(item => `

            <div class="food-item">
                ${item}
            </div>

        `).join("");



    /* =====================================
       INCLUDED
    ====================================== */

    document.getElementById("modalIncluded").innerHTML =

        data.included.map(item => `

            <span class="included-item">
                ${item}
            </span>

        `).join("");



    /* =====================================
       WHATSAPP
    ====================================== */

    const message =
        `Hello, I am interested in the ${data.title} (${data.category}) package. Please share availability and booking details.`;

    document.getElementById("modalWhatsapp").href =

        `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;



    /* =====================================
       SHOW MODAL
    ====================================== */

    document
        .getElementById("packageModal")
        .classList.add("active");

    document.body.classList.add("modal-open");

}



/* =========================================
   CLOSE PACKAGE
========================================= */

function closePackage() {

    document
        .getElementById("packageModal")
        .classList.remove("active");

    document.body.classList.remove("modal-open");

}



/* =========================================
   ESC KEY
========================================= */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closePackage();

    }

});