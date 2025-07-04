let cart = JSON.parse(localStorage.getItem('cart')) || [];

function renderCart() {
  const panel = document.getElementById('cartPanel');
  if (cart.length === 0) {
    panel.innerHTML = '<p>No items in cart.</p>';
    return;
  }
  let total = cart.reduce((sum, item) => {
    const priceNum = parseFloat(item.price.replace(/[^\d.]/g, ''));
    return sum + priceNum;
  }, 0);
  panel.innerHTML = cart.map((item, idx) => `
    <div class="item-row">
      <img src="${item.img}">
      <div>
        <div>${item.title}</div>
        <div style="color:#00796b;">${item.price}</div>
      </div>
      <button class="remove-btn" data-idx="${idx}">Remove</button>
    </div>
  `).join('') + `
    <div style="text-align:right;padding-top:12px;font-weight:bold;font-size:1.1em;">
      Total: ₹${total}
    </div>
  `;
  panel.querySelectorAll('.remove-btn').forEach(btn => {
    btn.onclick = function() {
      const idx = +this.getAttribute('data-idx');
      cart.splice(idx, 1);
      localStorage.setItem('cart', JSON.stringify(cart));
      renderCart();
    };
  });
}

renderCart();
