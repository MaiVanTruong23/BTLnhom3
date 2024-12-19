// Lấy dữ liệu từ form khi người dùng chọn sản phẩm
const buyNowButton = document.getElementById("buy-now");

buyNowButton.addEventListener("click", function() {
  const amount = document.querySelector("select[name='amount']").value;
  const breed = document.querySelector("select[name='breed']").value;
  const qty = document.querySelector("input[name='qty']").value;
  const price = 8;  // Giá sản phẩm (hoặc lấy từ DOM nếu có)

  const productInfo = {
    name: breed,  // Tên sản phẩm (hoặc có thể là amount)
    qty: qty,
    total: price * qty  // Tính tổng tiền
  };

  // Lấy sản phẩm hiện tại trong giỏ hàng từ sessionStorage
  let cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];
  
  // Thêm sản phẩm vào giỏ hàng
  cartItems.push(productInfo);

  // Lưu lại giỏ hàng vào sessionStorage
  sessionStorage.setItem('cartItems', JSON.stringify(cartItems));

  // Chuyển hướng tới trang thanh toán
  window.location.href = "checkout.html";
});
