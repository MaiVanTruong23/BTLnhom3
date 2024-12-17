
// Hàm kiểm tra đăng ký (có thể thêm kiểm tra email và mật khẩu)
function checkRegistration(username, email, password) {
    // Kiểm tra nếu các trường không để trống
    if (!username || !email || !password) {
      return "Vui lòng nhập đầy đủ các thông tin!";
    }
  
    // Kiểm tra định dạng email hợp lệ (một cách đơn giản)
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      return "Email không hợp lệ!";
    }
  
    // Kiểm tra mật khẩu phải có ít nhất 6 ký tự
    if (password.length < 6) {
      return "Mật khẩu phải có ít nhất 6 ký tự!";
    }
  
    // Nếu không có lỗi, đăng ký thành công
    return null;
  }
  
  // Hàm xử lý khi nhấn nút Đăng ký
  function handleRegistration(event) {
    event.preventDefault(); // Ngăn chặn reload trang mặc định khi submit form
  
    // Lấy giá trị từ các input trong form
    const username = document.querySelector('input[name="username"]').value.trim();
    const email = document.querySelector('input[name="email"]').value.trim();
    const password = document.querySelector('input[name="password"]').value.trim();
    const errorMessage = document.getElementById("errorMessage");
  
    // Kiểm tra thông tin đăng ký hợp lệ
    const error = checkRegistration(username, email, password);
        // Lấy dữ liệu tài khoản hiện tại từ localStorage (nếu có)
        let existingAccounts = JSON.parse(localStorage.getItem('existingAccounts')) || [];

        // Kiểm tra xem tài khoản đã tồn tại chưa
        const accountExists = existingAccounts.some(account => account.username === username);
        if (accountExists) {
            errorMessage.innerHTML += '<p>Tên đăng nhập này đã tồn tại. Vui lòng chọn tên khác.</p>';
            return false;
        }
    
        // Lưu tài khoản mới vào mảng
        const newAccount = { username: username, email: email, password: password };
        existingAccounts.push(newAccount);
    
        // Lưu mảng tài khoản vào localStorage
        localStorage.setItem('existingAccounts', JSON.stringify(existingAccounts));
    
    if (error) {
      // Hiển thị thông báo lỗi
      errorMessage.textContent = error;
      errorMessage.style.color = "red";
      return;
    }
   
    // Nếu đăng ký thành công, chuyển hướng đến trang đăng nhập
    alert("Đăng ký thành công! Bạn có thể đăng nhập ngay.");
    window.location.href = "login.html"; // Điều hướng đến trang đăng nhập
  }
  
