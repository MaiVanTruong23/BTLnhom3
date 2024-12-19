// Lấy các sản phẩm trong giỏ hàng từ sessionStorage
window.addEventListener('load', function() {
    const cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];
  
    if (cartItems.length > 0) {
      const cartItemsContainer = document.querySelector('#cart-items');
      cartItemsContainer.innerHTML = ''; // Xóa nội dung cũ nếu có
  
      let grandTotal = 0;
  
      cartItems.forEach(function(productInfo) {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td data-title="Product">
            <div class="andro_cart-product-wrapper">
              <div class="andro_cart-product-body">
                <h6><a href="#">${productInfo.name}</a></h6>
                <p>${productInfo.qty} Packets</p>
              </div>
            </div>
          </td>
          <td data-title="Quantity">x${productInfo.qty}</td>
          <td data-title="Total"><strong>$${productInfo.total.toFixed(2)}</strong></td>
        `;
        
        cartItemsContainer.appendChild(row);
  
        // Cộng dồn tổng giá trị
        grandTotal += productInfo.total;
      });
  
      // Cập nhật tổng giỏ hàng
      const grandTotalRow = document.querySelector('.total');
      grandTotalRow.querySelector('td:last-child').innerHTML = `<strong>$${grandTotal.toFixed(2)}</strong>`;
    }
  });
  