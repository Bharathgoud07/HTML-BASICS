let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

function renderWishlist() {
  const panel = document.getElementById('wishlistPanel');
  if (wishlist.length === 0) {
    panel.innerHTML = '<p>No items in wishlist.</p>';
    return;
  }
  panel.innerHTML = wishlist.map((item, idx) => `
    <div class="item-row">
      <img src="${item.img}">
      <div>
        <div>${item.title}</div>
        <div style="color:#00796b;">${item.price}</div>
      </div>
      <button class="remove-btn" data-idx="${idx}">Remove</button>
    </div>
  `).join('');
  panel.querySelectorAll('.remove-btn').forEach(btn => {
    btn.onclick = function() {
      const idx = +this.getAttribute('data-idx');
      wishlist.splice(idx, 1);
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
      renderWishlist();
    };
  });
}

renderWishlist();
