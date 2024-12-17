// Hàm kiểm tra tài khoản và mật khẩu
function checkAccount(username, password) {
  // Lấy dữ liệu tài khoản từ localStorage
  const existingAccounts = JSON.parse(localStorage.getItem('existingAccounts')) || [];

  // Tìm tài khoản với tên đăng nhập tương ứng
  const account = existingAccounts.find(account => account.username === username);

  // Nếu không tìm thấy tài khoản, trả về false
  if (!account) {
    return { valid: false, error: "Tên đăng nhập chưa đăng ký!" };
  }

  // Nếu tài khoản tồn tại, kiểm tra mật khẩu
  if (account.password !== password) {
    return { valid: false, error: "Mật khẩu không đúng!" };
  }

  // Tài khoản và mật khẩu hợp lệ
  return { valid: true };
}

// Hàm xử lý khi nhấn nút đăng nhập
function handleLogin(event) {
  event.preventDefault(); // Ngăn chặn reload trang mặc định khi submit form
  
  // Lấy giá trị từ input form
  const username = document.querySelector('input[name="username"]').value.trim();
  const password = document.querySelector('input[name="password"]').value.trim();
  const errorMessage = document.getElementById("errorMessage");

  // Kiểm tra input không được để trống
  if (username === "" || password === "") {
    errorMessage.textContent = "Vui lòng nhập đầy đủ tên đăng nhập và mật khẩu!";
    errorMessage.style.color = "red";
    return;
  }

  // Kiểm tra tài khoản hợp lệ
  const result = checkAccount(username, password);
  if (result.valid) {
    alert("Đăng nhập thành công! Chào mừng, " + username);
    errorMessage.textContent = "";
    window.location.href = "index.html"; // Điều hướng đến trang chính sau khi đăng nhập
  } else {
    // Hiển thị thông báo lỗi
    errorMessage.textContent = result.error;
    errorMessage.style.color = "red";
  }
}
