document.addEventListener('DOMContentLoaded', function () {
    // Lấy thông tin sản phẩm từ LocalStorage
    const selectedProduct = JSON.parse(localStorage.getItem('selectedProduct'));

    // Kiểm tra nếu có sản phẩm
    if (selectedProduct) {
        const productContainer = document.getElementById('selected-product');

        // Hiển thị thông tin sản phẩm
        productContainer.innerHTML = `
            <div class="product-details">
                <h3>${selectedProduct.name}</h3>
                <p>${selectedProduct.excerpt}</p>
                <p>Giá: ${selectedProduct.price} (Giá gốc: ${selectedProduct.originalPrice})</p>
                <p>Số lượng: ${selectedProduct.quantity}</p>
                <p>Số gói: ${selectedProduct.amount}</p>
                <p>Loại: ${selectedProduct.breed}</p>
            </div>
        `;
    } else {
        // Nếu không có sản phẩm
        document.getElementById('product-summary').innerHTML = '<p>Không có sản phẩm nào được chọn.</p>';
    }
});
