// DOM Elements
const darkModeToggle = document.querySelector('.dark-mode-toggle');
const darkModeStyle = document.getElementById('darkModeStyle');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const orderForm = document.getElementById('orderForm');

// Dark Mode Toggle
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        darkModeStyle.removeAttribute('disabled');
        localStorage.setItem('darkMode', 'enabled');
    } else {
        darkModeStyle.setAttribute('disabled', 'true');
        localStorage.setItem('darkMode', 'disabled');
    }
});

// Check for saved dark mode preference
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    darkModeStyle.removeAttribute('disabled');
}

// Mobile Menu Toggle
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const galleryGrid = document.querySelector('.gallery-grid');
    galleryGrid.innerHTML = ''; 
}
)


// Gallery Items (would normally come from a database)
const galleryItems = [
    {
        id: 1,
        title: "T-shirt and short sets",
        image: "item1.jpg",
    },
    {
        id: 2,
        title: "Men's Kimono",
        image: "item2.jpg",
    },
    {
        id: 3,
        title: "Big Tees",
        image: "item3.jpg",
    },
    {
        id: 4,
        title: "Bomber Jackets",
        image: "item4.jpg",
    },
    {
        id: 5,
        title: "Unisex Short Sleeve Shirt",
        image: "item5.jpg",
    },
    {
        id: 6,
        title: "Unisex T-shirt",
        image: "item6.jpg",
    },
    {
        id: 7,
        title: "Men's T-shirt",
        image: "item7.jpg",
    },
    {
        id: 8,
        title: "Women's Sweatshirt",
        image: "item8.jpg",
    },
    {
        id: 9,
        title: "Batwing Sleeves Crop Top",
        image: "item9.jpg",
    },
    {
        id: 10,
        title: "Women's Cropped Hoodies",
        image: "item10.jpg",
    },
    {
        id: 11,
        title: "T-shirt and short sets",
        image: "item11.jpg",
    },
    {
        id: 12,
        title: "Streetwears",
        image: "item12.jpg",
    },
    {
        id: 13,
        title: "Bomber Jacket For Women",
        image: "item13.jpg",
    },
    {
        id: 14,
        title: "Shorts For Men",
        image: "item14.jpg",
    },
    {
        id: 15,
        title: "Short Pants",
        image: "item15.jpg",
    },
    {
        id: 16,
        title: "Lace Up Streetwear",
        image: "item16.jpg",
    },
    {
        id: 17,
        title: "Y2K T-shirt",
        image: "item17.jpg",
    },
    {
        id: 18,
        title: "Bandana sleeve sweatshirt and short",
        image: "item18.jpg",
    },
    {
        id: 19,
        title: "Baggy Pants",
        image: "item19.jpg",
},
];


const galleryHTML = galleryItems.map(item => `
    <div class="gallery-item">
        <img src="${item.image}" alt="${item.title}">
        <div class="item-info">
            <h3>${item.title}</h3>
            <button class="order-btn" 
                    data-title="${item.title}">
                Order Now
            </button>
        </div>
    </div>
`).join('');

document.querySelector('.gallery-grid').innerHTML = galleryHTML;

// WhatsApp Order Function (updated)
function setupWhatsAppOrders() {
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('order-btn')) {
            const itemId = e.target.getAttribute('data-item');
            const item = galleryItems.find(i => i.id == itemId);
            
            const message = `📦 New Order - Lani Apparel\n\n` +
                           `✨ *Item:* ${item.title}\n` +
                           `🧾 *My Information:*\n` +
                           `- Name: \n` +
                           `- Phone: \n` +
                           `- Size/Measurements: \n` +
                           `- Delivery Address: \n\n` +
                           `💬 Special Requests: `;
            
            window.open(`https://wa.me/2348173430444?text=${encodeURIComponent(message)}`, '_blank');
        }
    });
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Generate gallery (without prices)
    const galleryGrid = document.querySelector('.gallery-grid');
    galleryItems.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <div class="item-overlay">
                <h3>${item.title}</h3>
                <button class="order-btn" data-item="${item.id}">
                    Order Now
                </button>
            </div>
        `;
        galleryGrid.appendChild(galleryItem);
    });
    
    setupWhatsAppOrders();
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Update menu icon color when dark mode is toggled
function updateMenuIconColor() {
    const menuToggles = document.querySelectorAll('.menu-toggle span');
    if (document.body.classList.contains('dark-mode')) {
        menuToggles.forEach(span => {
            span.style.backgroundColor = '#D4AF37'; // Gold
        });
    } else {
        menuToggles.forEach(span => {
            span.style.backgroundColor = '#000000'; // Black
        });
    }
}

