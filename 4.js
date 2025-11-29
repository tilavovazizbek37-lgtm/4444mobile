
// Telegram WebApp
let tg = window.Telegram?.WebApp;
if (tg) {
    tg.expand();
    tg.ready();
}

// Data
const phones = [
    {
        id: 1,
        name: "iPhone 15 Pro Max",
        brand: "Apple",
        price: 1299,
        image: "https://images.unsplash.com/photo-1696446702183-cbd90e535b61?w=400&h=400&fit=crop",
        rating: 4.9,
        specs: "256GB, A17 Pro chip",
        videoUrl: "https://www.youtube.com/embed/xqyUdNxWazA"
    },
    {
        id: 2,
        name: "Samsung Galaxy S24 Ultra",
        brand: "Samsung",
        price: 1199,
        image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=400&fit=crop",
        rating: 4.8,
        specs: "512GB, Snapdragon 8 Gen 3",
        videoUrl: "https://www.youtube.com/embed/BZm_9GVq3Qo"
    },
    {
        id: 3,
        name: "Google Pixel 8 Pro",
        brand: "Google",
        price: 999,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop",
        rating: 4.7,
        specs: "256GB, Tensor G3",
        videoUrl: "https://www.youtube.com/embed/HuCOoobJGT0"
    },
    {
        id: 4,
        name: "Xiaomi 14 Pro",
        brand: "Xiaomi",
        price: 799,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop",
        rating: 4.6,
        specs: "256GB, Snapdragon 8 Gen 3",
        videoUrl: "https://www.youtube.com/embed/Av9F42bDPTo"
    },
    {
        id: 5,
        name: "OnePlus 12",
        brand: "OnePlus",
        price: 899,
        image: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=400&h=400&fit=crop",
        rating: 4.7,
        specs: "512GB, Snapdragon 8 Gen 3",
        videoUrl: "https://www.youtube.com/embed/KJABz8GH4Gw"
    },
    {
        id: 6,
        name: "iPhone 14",
        brand: "Apple",
        price: 799,
        image: "https://images.unsplash.com/photo-1663499482523-1c0d8c7cbd10?w=400&h=400&fit=crop",
        rating: 4.8,
        specs: "128GB, A15 Bionic",
        videoUrl: "https://www.youtube.com/embed/q5D55G7Ejs8"
    }
];

const videos = [
    {
        id: 1,
        title: "Top 5 Smartfonlar 2024",
        description: "Eng yaxshi smartfonlarni taqqoslash va sharh",
        thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
        videoUrl: "https://www.youtube.com/embed/z6zyp8lyvN0",
        duration: "12:45"
    },
    {
        id: 2,
        title: "iPhone vs Samsung",
        description: "Qaysi biri yaxshiroq? To'liq taqqoslash",
        thumbnail: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=600&h=400&fit=crop",
        videoUrl: "https://www.youtube.com/embed/hL9uk4hKyg4",
        duration: "15:30"
    },
    {
        id: 3,
        title: "Telefon Tanlash Bo'yicha Maslahatlar",
        description: "To'g'ri smartfon tanlash yo'llari",
        thumbnail: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?w=600&h=400&fit=crop",
        videoUrl: "https://www.youtube.com/embed/PJhhZJfKpgw",
        duration: "10:20"
    },
    {
        id: 4,
        title: "Telefon Kameralari Test",
        description: "Eng yaxshi kamerali smartfonlar",
        thumbnail: "https://images.unsplash.com/photo-1567581935884-3349723552ca?w=600&h=400&fit=crop",
        videoUrl: "https://www.youtube.com/embed/wCJpHnOFEyE",
        duration: "18:15"
    },
    {
        id: 5,
        title: "Budget Smartfonlar",
        description: "Arzon va sifatli telefonlar",
        thumbnail: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&h=400&fit=crop",
        videoUrl: "https://www.youtube.com/embed/LMRR6fIoqYA",
        duration: "14:00"
    },
    {
        id: 6,
        title: "Gaming Smartfonlar",
        description: "O'yinlar uchun eng yaxshi telefonlar",
        thumbnail: "https://images.unsplash.com/photo-1592286927505-b0163d0c724b?w=600&h=400&fit=crop",
        videoUrl: "https://www.youtube.com/embed/Cj2eUpt_BIc",
        duration: "16:45"
    }
];

let cart = [];

// Initialize
function init() {
    renderProducts();
    renderVideos();
    updateCart();
}

// Render Products
function renderProducts() {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = phones.map(phone => `
        <div class="product-card">
            <div class="product-image">
                <img src="${phone.image}" alt="${phone.name}">
                <div class="product-price">$${phone.price}</div>
                <button class="play-btn" onclick="openVideo('${phone.videoUrl}', '${phone.name}')">
                    ▶
                </button>
            </div>
            <div class="product-info">
                <div class="product-rating">
                    ⭐ <span>${phone.rating}</span>
                </div>
                <h3 class="product-name">${phone.name}</h3>
                <p class="product-specs">${phone.specs}</p>
                <button class="add-to-cart-btn" onclick="addToCart(${phone.id})">Savatga qo'shish</button>
            </div>
        </div>
    `).join('');
}

// Render Videos
function renderVideos() {
    const grid = document.getElementById('videosGrid');
    grid.innerHTML = videos.map(video => `
        <div class="video-card" onclick="openVideo('${video.videoUrl}', '${video.title}')">
            <div class="video-thumbnail">
                <img src="${video.thumbnail}" alt="${video.title}">
                <div class="video-duration">${video.duration}</div>
            </div>
            <div class="video-info">
                <h3 class="video-title">${video.title}</h3>
                <p class="video-description">${video.description}</p>
            </div>
        </div>
    `).join('');
}

// Add to Cart
function addToCart(phoneId) {
    const phone = phones.find(p => p.id === phoneId);
    const existingItem = cart.find(item => item.id === phoneId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...phone, quantity: 1 });
    }
    
    updateCart();
}

// Remove from Cart
function removeFromCart(phoneId) {
    cart = cart.filter(item => item.id !== phoneId);
    updateCart();
}

// Update Quantity
function updateQuantity(phoneId, change) {
    const item = cart.find(item => item.id === phoneId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(phoneId);
        } else {
            updateCart();
        }
    }
}

// Update Cart Display
function updateCart() {
    const badge = document.getElementById('cartBadge');
    const content = document.getElementById('cartContent');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    badge.textContent = totalItems;
    badge.style.display = totalItems > 0 ? 'flex' : 'none';
    
    if (cart.length === 0) {
        content.innerHTML = '<div class="empty-cart">Savat bo\'sh</div>';
    } else {
        content.innerHTML = `
            <div class="cart-items">
                ${cart.map(item => `
                    <div class="cart-item">
                        <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                        <div class="cart-item-info">
                            <div class="cart-item-name">${item.name}</div>
                            <div class="cart-item-price">$${item.price}</div>
                            <div class="cart-item-controls">
                                <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                                <span>${item.quantity}</span>
                                <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                                <button class="remove-btn" onclick="removeFromCart(${item.id})">O'chirish</button>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
            <div class="cart-total">
                <div class="cart-total-row">
                    <span class="cart-total-label">Jami:</span>
                    <span class="cart-total-price">$${totalPrice}</span>
                </div>
                <button class="checkout-btn" onclick="checkout()">Buyurtma berish</button>
            </div>
        `;
    }
}

// Checkout
function checkout() {
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    if (tg) {
        // Telegram botga ma'lumot yuborish
        tg.sendData(JSON.stringify({
            cart: cart,
            total: totalPrice
        }));
    } else {
        // Telegram'siz test uchun
        

// Checkout davomi
function checkout() {
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    if (tg) {
        // Telegram botga ma'lumot yuborish
        tg.sendData(JSON.stringify({
            cart: cart,
            total: totalPrice
        }));
    } else {
        // Telegram'siz test uchun
        alert(`Buyurtma: ${cart.length} ta mahsulot\nJami: $${totalPrice}`);
    }
}

// Toggle Cart
function toggleCart() {
    const sidebar = document.getElementById('cartSidebar');
    const overlay = document.getElementById('cartOverlay');
    sidebar.classList.toggle('open');
    overlay.classList.toggle('open');
}

// Show Tab
function showTab(tab) {
    const productsGrid = document.getElementById('productsGrid');
    const videosGrid = document.getElementById('videosGrid');
    const searchSection = document.getElementById('searchSection');
    const heroTitle = document.getElementById('heroTitle');
    const heroSubtitle = document.getElementById('heroSubtitle');
    const tabBtns = document.querySelectorAll('.tab-btn');
    
    tabBtns.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    if (tab === 'products') {
        productsGrid.classList.remove('hidden');
        videosGrid.classList.add('hidden');
        searchSection.style.display = 'block';
        heroTitle.textContent = 'Eng Yangi Smartfonlar';
        heroSubtitle.textContent = 'Premium sifat va eng yaxshi narxlar';
    } else {
        productsGrid.classList.add('hidden');
        videosGrid.classList.remove('hidden');
        searchSection.style.display = 'none';
        heroTitle.textContent = 'Video Sharhlar va Ko\'rgazmalar';
        heroSubtitle.textContent = 'Mahsulotlarimiz haqida batafsil video sharhlar';
    }
}

// Search Products
function searchProducts() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const grid = document.getElementById('productsGrid');
    
    const filteredPhones = phones.filter(phone => 
        phone.name.toLowerCase().includes(query) || 
        phone.brand.toLowerCase().includes(query)
    );
    
    grid.innerHTML = filteredPhones.map(phone => `
        <div class="product-card">
            <div class="product-image">
                <img src="${phone.image}" alt="${phone.name}">
                <div class="product-price">$${phone.price}</div>
                <button class="play-btn" onclick="openVideo('${phone.videoUrl}', '${phone.name}')">
                    ▶
                </button>
            </div>
            <div class="product-info">
                <div class="product-rating">
                    ⭐ <span>${phone.rating}</span>
                </div>
                <h3 class="product-name">${phone.name}</h3>
                <p class="product-specs">${phone.specs}</p>
                <button class="add-to-cart-btn" onclick="addToCart(${phone.id})">Savatga qo'shish</button>
            </div>
        </div>
    `).join('');
}

// Open Video
function openVideo(url, title) {
    const modal = document.getElementById('videoModal');
    const frame = document.getElementById('videoFrame');
    const titleEl = document.getElementById('videoTitle');
    
    modal.classList.add('open');
    frame.src = url;
    titleEl.textContent = title;
}

// Close Video
function closeVideoModal(event) {
    if (!event || event.target.id === 'videoModal') {
        const modal = document.getElementById('videoModal');
        const frame = document.getElementById('videoFrame');
        
        modal.classList.remove('open');
        frame.src = '';
    }
}

// Initialize on load
window.onload = init;

