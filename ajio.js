const imgs = document.querySelectorAll('.container .images img');
const imgRow = document.querySelector('.container .images');
const prev = document.querySelector('.container-btn.prev');
const next = document.querySelector('.container-btn.next');
let idx = 0;



function showSlide() {
    imgRow.style.transform = `translateX(-${idx * 100}%)`;
}

next.onclick = () => {
    idx = (idx + 1) % imgs.length;
    showSlide();
};

prev.onclick = () => {
    idx = (idx - 1 + imgs.length) % imgs.length;
    showSlide();
};


setInterval(() => next.click(), 3000);


  


// Helper to get product data from card element
function getProductData(card) {
  return {
    title: card.querySelector('h3').innerText,
    price: card.querySelector('.price').innerText,
    img: card.querySelector('img').src
  };
}

// Load from localStorage or start empty
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function saveAndUpdate() {
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Add event listeners to buttons in product cards
document.querySelectorAll('.product-card').forEach(card => {
  const [wishlistBtn, cartBtn] = card.querySelectorAll('button');
  
  wishlistBtn.onclick = () => {
    const data = getProductData(card);
    if (!wishlist.find(item => item.title === data.title)) {
      wishlist.push(data);
      saveAndUpdate();
      alert('Added to Wishlist!');
    } else {
      alert('Already in Wishlist!');
    }
  };
  
  cartBtn.onclick = () => {
    const data = getProductData(card);
    if (!cart.find(item => item.title === data.title)) {
      cart.push(data);
      saveAndUpdate();
      alert('Added to Cart!');
    } else {
      alert('Already in Cart!');
    }
  };
});

// Render panels
function renderPanel(panelId, items, title, type) {
  const panel = document.getElementById(panelId);
  if (items.length === 0) {
    panel.innerHTML = `<h3>${title}</h3><p>No items yet.</p>`;
  } else {
    panel.innerHTML = `<h3>${title}</h3>` + 
      items.map((item, idx) => `
        <div class="item-row">
          <img src="${item.img}">
          <div>
            <div>${item.title}</div>
            <div style="color:#00796b;">${item.price}</div>
          </div>
          <button class="remove-btn" data-idx="${idx}" data-type="${type}">Remove</button>
        </div>
      `).join('');
  }
  panel.classList.add('active');
  // Add remove button listeners
  panel.querySelectorAll('.remove-btn').forEach(btn => {
    btn.onclick = function() {
      const idx = +this.getAttribute('data-idx');
      const type = this.getAttribute('data-type');
      if (type === 'wishlist') {
        wishlist.splice(idx, 1);
        saveAndUpdate();
        renderPanel('wishlistPanel', wishlist, 'Your Wishlist', 'wishlist');
      } else {
        cart.splice(idx, 1);
        saveAndUpdate();
        renderPanel('cartPanel', cart, 'Your Cart', 'cart');
      }
    };
  });
}

// Show/hide panels on icon click
document.getElementById('wishlistIcon').onclick = (e) => {
  e.stopPropagation();
  renderPanel('wishlistPanel', wishlist, 'Your Wishlist', 'wishlist');
  document.getElementById('wishlistPanel').style.display = 'block';
  document.getElementById('cartPanel').style.display = 'none';
};
document.getElementById('cartIcon').onclick = (e) => {
  e.stopPropagation();
  renderPanel('cartPanel', cart, 'Your Cart', 'cart');
  document.getElementById('cartPanel').style.display = 'block';
  document.getElementById('wishlistPanel').style.display = 'none';
};

// Hide panels when clicking outside
document.addEventListener('click', function(e) {
  if (!e.target.closest('.side-panel') && !e.target.closest('.fa-heart') && !e.target.closest('.fa-cart-shopping')) {
    document.getElementById('wishlistPanel').style.display = 'none';
    document.getElementById('cartPanel').style.display = 'none';
  }
});


function renderPanel(panelId, items, title, type) {
  const panel = document.getElementById(panelId);
  let html = `<h3>${title}</h3>`;
  
  if (items.length === 0) {
    html += `<p>No items yet.</p>`;
  } else {
    html += items.map((item, idx) => `
      <div class="item-row">
        <img src="${item.img}">
        <div>
          <div>${item.title}</div>
          <div style="color:#00796b;">${item.price}</div>
        </div>
        <button class="remove-btn" data-idx="${idx}" data-type="${type}">Remove</button>
      </div>
    `).join('');
    
    // If it's the cart, calculate and show the total
    if (type === 'cart') {
      // Extract the numeric value from the price string (e.g., "₹799" -> 799)
      const total = items.reduce((sum, item) => {
        // Remove any non-digit characters and convert to number
        const priceNum = parseFloat(item.price.replace(/[^\d.]/g, ''));
        return sum + priceNum;
      }, 0);
      html += `<div style="text-align:right;padding-top:12px;font-weight:bold;font-size:1.1em;">
        Total: ₹${total}
      </div>`;
    }
  }
  
  panel.innerHTML = html;
  panel.classList.add('active');
  
  // Add remove button listeners
  panel.querySelectorAll('.remove-btn').forEach(btn => {
    btn.onclick = function() {
      const idx = +this.getAttribute('data-idx');
      const type = this.getAttribute('data-type');
      if (type === 'wishlist') {
        wishlist.splice(idx, 1);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        renderPanel('wishlistPanel', wishlist, 'Your Wishlist', 'wishlist');
      } else {
        cart.splice(idx, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        renderPanel('cartPanel', cart, 'Your Cart', 'cart');
      }
    };
  });
}
