




// Lắng nghe sự kiện submit form
document.getElementById('checkout-form').addEventListener('submit', function(event) {
    // Ngừng hành động gửi form mặc định để xử lý hiển thị alert
    event.preventDefault();
  
    // Lấy giá trị của các trường tên
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;

    // Kiểm tra tính hợp lệ của trường "First Name" và "Last Name"
    var valid = true; // Cờ để kiểm tra tính hợp lệ

    // Kiểm tra trường "First Name"
    if (fname.trim() === '' || !/^[a-zA-Z\s]+$/.test(fname)) {
        // Nếu tên không hợp lệ (chứa ký tự đặc biệt hoặc rỗng)
        document.getElementById('fname-error').textContent = "Tên không hợp lệ. Chỉ chấp nhận chữ cái và khoảng trắng.";
        valid = false;
    } else {
        document.getElementById('fname-error').textContent = ''; // Xóa thông báo lỗi
    }

    // Kiểm tra trường "Last Name"
    if (lname.trim() === '' || !/^[a-zA-Z\s]+$/.test(lname)) {
        // Nếu họ không hợp lệ
        document.getElementById('lname-error').textContent = "Họ không hợp lệ. Chỉ chấp nhận chữ cái và khoảng trắng.";
        valid = false;
    } else {
        document.getElementById('lname-error').textContent = ''; // Xóa thông báo lỗi
    }

    // Nếu tất cả các trường hợp hợp lệ, submit form
    if (valid) {
        // Form có thể được gửi ở đây
        this.submit(); // Chỉ gửi form nếu mọi thứ hợp lệ
        alert("Bạn đã đặt hàng thành công!");
        window.location.href = 'index.html';  
    } else {
        // Thông báo rằng có trường không hợp lệ
        alert("Vui lòng kiểm tra lại các trường thông tin!");
    }
    // Hiển thị alert thông báo đặt hàng thành công
    
  
    // Sau khi hiển thị thông báo, có thể tiếp tục gửi form nếu cần (nếu muốn gửi dữ liệu thực sự)
    // this.submit(); // Uncomment this line to actually submit the form
      // URL của trang chủ (thường là "/")
  });