(function ($) {
    'use strict';

    /*-------------------------------------------------------------------------------
    Cookies
    -------------------------------------------------------------------------------*/
    function setCookie(cname, cvalue, days) {

        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            var expires = "; expires=" + date.toGMTString();
        } else {
            var expires = "";
        }
        document.cookie = cname + "=" + cvalue + expires + "; path=/";
    }

    //Return a particular cookie
    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    //Checks if a cookie exists
    function checkCookie(cookieToCheck) {
        var cookie = getCookie(cookieToCheck);
        if (cookie != "") {
            return true;
        }
        return false;
    }

    //Delet an existing cookie
    function deleteCookie(name) {
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }

    /*-------------------------------------------------------------------------------
    Newsletter popup close and set cookie
    -------------------------------------------------------------------------------*/
    $(".newsletter-popup-trigger").on('click', function () {
        setCookie('newsletter_popup_viewed', 'true');
    });

    $('#androNewsletterPopup').on('hidden.bs.modal', function () {
        setCookie('newsletter_popup_viewed', 'true');
    });

    /*-------------------------------------------------------------------------------
  Preloader
  -------------------------------------------------------------------------------*/
    $(window).on('load', function () {
        $('.andro_preloader').addClass('hidden');

        if (!checkCookie('newsletter_popup_viewed')) {
            setTimeout(function () {
                $("#androNewsletterPopup").modal('show');
            }, 3000);
        }

    });

    /*-------------------------------------------------------------------------------
  Aside Menu
  -------------------------------------------------------------------------------*/
    $(".aside-trigger-right").on('click', function () {
        var $el = $(".andro_aside-right")
        $el.toggleClass('open');
        if ($el.hasClass('open')) {
            setTimeout(function () {
                $el.find('.sidebar').fadeIn();
            }, 300);
        } else {
            $el.find('.sidebar').fadeOut();
        }
    });

    $(".aside-trigger-left").on('click', function () {
        $(".andro_aside-left").toggleClass('open');
    });

    $(".andro_aside .menu-item-has-children > a").on('click', function (e) {
        var submenu = $(this).next(".sub-menu");
        e.preventDefault();

        submenu.slideToggle(200);
    });

    /*-------------------------------------------------------------------------------
    Custom scroll bars
    -------------------------------------------------------------------------------*/
    $('.andro_dropdown-scroll').slimScroll({
        height: 300,
        position: "right",
        size: "5px",
        color: "#dcdcdc",
        opacity: 1,
        wheelStep: 5,
        touchScrollStep: 50,
    });

    /*-------------------------------------------------------------------------------
  Sticky Header
  -------------------------------------------------------------------------------*/
    var header = $(".can-sticky");
    var headerHeight = header.innerHeight();

    function doSticky() {
        if (window.pageYOffset > headerHeight) {
            header.addClass("sticky");
        } else {
            header.removeClass("sticky");
        }
    }
    doSticky();

    /*-------------------------------------------------------------------------------
    Tooltips
    -------------------------------------------------------------------------------*/
    $('[data-toggle="tooltip"]').tooltip();

    /*-------------------------------------------------------------------------------
    Magnific Popup
    -------------------------------------------------------------------------------*/
    $('.popup-youtube').magnificPopup({
        type: 'iframe'
    });
    $('.popup-vimeo').magnificPopup({
        type: 'iframe'
    });
    $('.popup-video').magnificPopup({
        type: 'iframe'
    });
    $('.gallery-thumb').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
    });

    /*-------------------------------------------------------------------------------
    ion Range Sliders (Price filter)
    -------------------------------------------------------------------------------*/
    $(".js-range-slider").ionRangeSlider();

    $('.andro_product-single-thumb')
        .wrap('<span style="display:inline-block" class="andro_product-single-zoom"></span>')
        .css('display', 'block')
        .parent()
        .zoom();

    /*-------------------------------------------------------------------------------
    Countdown
    -------------------------------------------------------------------------------*/
    $(".andro_countdown-timer").each(function () {
        var $this = $(this);
        $this.countdown($this.data('countdown'), function (event) {
            $(this).text(
                event.strftime('%D days %H:%M:%S')
            );
        });
    });

    $(".andro_countdown-timer-2").each(function () {
        var $this = $(this);
        $this.countdown($this.data('countdown'), function (event) {
            $(this).html(
                event.strftime('<li>%D</li><li>%H</li><li>%M</li><li>%S</li>')
            );
        });
    });

    /*-------------------------------------------------------------------------------
    Checkout Notices
    -------------------------------------------------------------------------------*/
    $(".andro_notice a").on('click', function (e) {
        e.preventDefault();

        $(this).closest('.andro_notice').next().slideToggle();
    });

    /*-------------------------------------------------------------------------------
    Open/Close Category Bar
    -------------------------------------------------------------------------------*/
    $(".andro_category-mm").on('click', function () {
        $(this).toggleClass('open');
    })

    /*-------------------------------------------------------------------------------
    Daily deals slider
    -------------------------------------------------------------------------------*/
    $(".deals-slider, .andro_testimonials").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
            }
        }
        ]
    });

    /*-------------------------------------------------------------------------------
    Daily deals slider
    -------------------------------------------------------------------------------*/
    $(".andro_grid-slider").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        autoplay: false,
        responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
                autoplay: true,
                arrows: false,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                arrows: false,
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                arrows: false,
            }
        }
        ]
    });

    /*-------------------------------------------------------------------------------
    Other mentions slider
    -------------------------------------------------------------------------------*/
    $(".andro_other-mentions-slider").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: $('.andro_other-mentions .slider-prev'),
        nextArrow: $('.andro_other-mentions .slider-next'),
        dots: false,
        autoplay: false,
        responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 450,
            settings: {
                slidesToShow: 1,
            }
        }
        ]
    });

    /*-------------------------------------------------------------------------------
    Banner slider (Home v1)
    -------------------------------------------------------------------------------*/
    $(".banner-1 .andro_banner-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true
    });

    /*-------------------------------------------------------------------------------
    Banner slider (Home v2)
    -------------------------------------------------------------------------------*/
    $(".banner-2 .andro_banner-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: true,
    });

    /*-------------------------------------------------------------------------------
    Banner slider (Home v3)
    -------------------------------------------------------------------------------*/
    $(".banner-3 .andro_banner-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        autoplay: true,
        prevArrow: $('.banner-3 .slider-prev'),
        nextArrow: $('.banner-3 .slider-next'),
    });

    /*-------------------------------------------------------------------------------
    New Arrivals
    -------------------------------------------------------------------------------*/
    $(".andro_fresh-arrivals-slider").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        autoplay: true,
        prevArrow: $('.andro_fresh-arrivals .slider-prev'),
        nextArrow: $('.andro_fresh-arrivals .slider-next'),
        responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
            }
        }
        ]
    });
    /*-------------------------------------------------------------------------------
    New Deals
    -------------------------------------------------------------------------------*/
    $(".andro_deals-arrivals-slider").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        autoplay: true,
        prevArrow: $('.andro_fresh-arrivals .slider-prev'),
        nextArrow: $('.andro_fresh-arrivals .slider-next'),
        responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
            }
        }
        ]
    });
    /*-------------------------------------------------------------------------------
    garage-small-slider
    -------------------------------------------------------------------------------*/
    $(".garage-small-slider").slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    dots: false,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    /*-------------------------------------------------------------------------------
    Main Banner
    -------------------------------------------------------------------------------*/
    $(".main-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        autoplay: true
    });

    /*-------------------------------------------------------------------------------
    Upsells
    -------------------------------------------------------------------------------*/
    $(".andro_upsells-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        autoplay: true,
        prevArrow: $('.andro_upsells .slider-prev'),
        nextArrow: $('.andro_upsells .slider-next'),
    });

    /*-------------------------------------------------------------------------------
    Related Products / Posts
    -------------------------------------------------------------------------------*/
    $(".andro_related-posts-slider").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        autoplay: true,
        prevArrow: $('.andro_related-posts .slider-prev'),
        nextArrow: $('.andro_related-posts .slider-next'),
        responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
            }
        }
        ]
    });

    /*-------------------------------------------------------------------------------
    Masonry
    -------------------------------------------------------------------------------*/
    $('.masonry').imagesLoaded(function () {
        var isotopeContainer = $('.masonry');
        isotopeContainer.isotope({
            itemSelector: '.masonry-item',
        });
    });

    /*-------------------------------------------------------------------------------
    Add / Subtract Quantity
    -------------------------------------------------------------------------------*/
    $(".qty span").on('click', function () {
        var qty = $(this).closest('.qty').find('input');
        var qtyVal = parseInt(qty.val());
        if ($(this).hasClass('qty-add')) {
            qty.val(qtyVal + 1);
        } else {
            return qtyVal > 1 ? qty.val(qtyVal - 1) : 0;
        }
    })

    /*-----------------------------------
      Back to Top
      -----------------------------------*/
    $('.andro_back-to-top').on('click', function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    })


    //On scroll events
    $(window).on('scroll', function () {

        doSticky();

    });

    //On resize events
    $(window).on('resize', function () {


    });

})(jQuery);
$(document).ready(function () {
    $('.remove-from-cart').on('click', function () {
        $(this).closest('tr').remove();
    });
});

//Thông báo thêm vào giỏ hàng thành công
function themVaoGioHang() {
    // Hiển thị thông báo
    alert("Bạn đã thêm sản phẩm vào giỏ hàng thành công!");
}

//Thông báo đánh giá sản phẩm
function danhGiaSP() {
    // Hiển thị thông báo
    alert("Cảm ơn bạn đã đánh giá sản phẩm!");
}

//Thông báo thêm vào Yêu thích
function addToWishlist() {
    // Hiển thị thông báo
    alert("Bạn đã thêm sản phẩm vào danh mục Yêu thích!");
}



$(document).ready(function () {

    function updateCartTotal() {
        var subtotal = 0;
        const shipping = 100000; // Phí vận chuyển cố định

        // Duyệt qua tất cả các sản phẩm trong giỏ hàng
        $('#cart-body tr').each(function () {
            var price = parseFloat($(this).find('td:nth-child(3) strong').text().replace(' ₫', '').replace('$', '').replace(',', ''));
            var quantity = parseInt($(this).find('.qty').val());

            // Debug: In ra số lượng và giá trị sản phẩm
            console.log('Price:', price, 'Quantity:', quantity);

            if (isNaN(quantity) || quantity <= 0) {
                quantity = 1;  // Đảm bảo số lượng luôn hợp lệ
            }

            subtotal += price * quantity;  // Cộng dồn subtotal
        });

        // Cập nhật subtotal vào bảng Cart Total
        $('#cart-subtotal').text(subtotal.toLocaleString() + ' VND'); // Hiển thị subtotal với định dạng tiền tệ

        // Tính tổng tiền
        var total = subtotal + shipping;

        // Cập nhật tổng tiền vào bảng Cart Total
        $('#total-price').text(total.toLocaleString() + ' VND'); // Hiển thị tổng tiền với định dạng tiền tệ
    }

    // Khi người dùng nhấn nút "Add to Cart"
    $('.add-to-cart').on('click', function () {
        var productName = $(this).data('product-name');
        var productPrice = parseFloat($(this).data('product-price'));
        var productImage = $(this).data('product-image');
        var productId = $(this).data('product-id'); // Thêm product-id để phân biệt giữa các sản phẩm
        var productQuantity = 1; // Mặc định là 1

        // Kiểm tra sản phẩm đã có trong giỏ hàng hay chưa bằng productId (chứ không phải tên sản phẩm nữa)
        var existingProduct = $('#cart-body').find(`tr[data-product-id="${productId}"]`);

        // Nếu sản phẩm đã có trong giỏ, tăng số lượng
        if (existingProduct.length > 0) {
            var currentQuantity = parseInt(existingProduct.find('.qty').val()); // Lấy giá trị số lượng hiện tại
            if (isNaN(currentQuantity)) {
                currentQuantity = 0; // Nếu không phải số, mặc định là 0
            }

            // Debug: In ra số lượng hiện tại và giá trị tổng
            console.log('Existing Product Quantity:', currentQuantity);

            // Tăng số lượng
            existingProduct.find('.qty').val(currentQuantity + 1);

            // Cập nhật tổng tiền của sản phẩm
            var newTotal = productPrice * (currentQuantity + 1);
            existingProduct.find('td:nth-child(5) strong').text(newTotal.toLocaleString() + ' ₫');

            // Debug: In ra tổng tiền mới của sản phẩm
            console.log('Updated Total for Product:', newTotal);

            // Cập nhật tổng giỏ hàng
            updateCartTotal();
            return;
        }

        // Nếu sản phẩm chưa có trong giỏ, tạo dòng mới
        var newRow = `
        <tr data-product-id="${productId}"> <!-- Dùng data-product-id thay vì tên sản phẩm -->
          <td class="remove">
            <button type="button" class="close-btn close-danger remove-from-cart">
              <span></span>
              <span></span>
            </button>
          </td>
          <td data-title="Product">
            <div class="andro_cart-product-wrapper">
              <img src="${productImage}" alt="prod">
              <div class="andro_cart-product-body">
                <h6><a href="#">${productName}</a></h6>
                <p>1 Piece</p>
              </div>
            </div>
          </td>
          <td data-title="Price"><strong>${productPrice.toLocaleString()} ₫</strong></td>
          <td class="quantity" data-title="Quantity">
            <input type="number" class="qty form-control" value="${productQuantity}">
          </td>
          <td data-title="Total"><strong>${(productPrice * productQuantity).toLocaleString()} ₫</strong></td>
        </tr>
      `;

        // Thêm sản phẩm vào giỏ hàng
        $('#cart-body').append(newRow);

        
        // Cập nhật tổng giỏ hàng
        updateCartTotal();
    });

    // Xóa sản phẩm khỏi giỏ hàng
    $(document).on('click', '.remove-from-cart', function () {
        $(this).closest('tr').remove();
        updateCartTotal();
    });

    // Cập nhật giá trị tổng khi thay đổi số lượng sản phẩm
    $(document).on('input', '.qty', function () {
        var row = $(this).closest('tr');
        var price = parseFloat(row.find('td:nth-child(3) strong').text().replace(' ₫', ''));
        var quantity = parseInt($(this).val());

        // Debug: In ra số lượng mới và giá trị tổng
        console.log('Updated Quantity:', quantity);

        if (isNaN(quantity) || quantity <= 0) {
            quantity = 1; // Nếu số lượng không hợp lệ, đặt lại về 1
            $(this).val(quantity); // Cập nhật lại giá trị trong input
        }

        // Cập nhật tổng tiền của sản phẩm
        row.find('td:nth-child(5) strong').text((price * quantity).toLocaleString() + ' ₫');

        // Cập nhật tổng giỏ hàng
        updateCartTotal();
    });
});
// Danh sách sản phẩm
const products = {
    1: {
        title: "Trung Nguyên Legend Roman - 200g",
        image: "assets/img/products/legend.jpg",
        price: "550.800 ₫",
        description: "Tuyệt phẩm cà phê Roman rất độc đáo và đầy tinh tế, thể chất đậm, tròn vị cùng mùi khói nhẹ, đặc trưng xen lẫn chút hương vị trái cây tươi tạo nên tách cà phê tuyệt hảo, đậm phong vị Espresso nguyên bản.",
        rating: 4,
        link: "cart.html"
    },
    2: {
        title: "Trung Nguyên Legend Success 3",
        image: "assets/img/products/success3.jpg",
        price: "287.000 ₫",
        description: "Là loại cà phê siêu hạng có hương vị độc đáo và đầy thử thách. Mùi hương dịu nhẹ nhưng rất đa dạng; Thể chất mạnh nhưng cân bằng, hậu vị ngọt dịu.",
        rating: 5,
        link: "cart.html"
    },
    3: {
        title: "Cà phê G7 Gold Picasso Latte",
        image: "assets/img/products/G7gold.jpg",
        price: "71.200 ₫",
        description: "Mang phong vị của Ly cà phê Picasso Latte tại không gian Thế giới Cà phê Trung Nguyên Legend với vị béo, chút đắng nhẹ hòa lẫn hương vanilla ngọt dịu và lớp foam dày, mịn.",
        rating: 3,
        link: "cart.html"
    },
    4: {
        title: "Trung Nguyên Legend Americano hộp 15 gói x 2g",
        image: "assets/img/products/legend2.jpg",
        price: "52.000 ₫",
        description: "Trung Nguyên Legend Americano- phiên bản cà phê đen hòa tan rang xay độc đáo với hương thơm dịu nhẹ, hậu vị ngọt nhẹ đầy quyến rũ đem đến cho bạn nguồn năng lượng mạnh mẽ cho tinh thần phóng khoáng và đầy cảm hứng để tiếp tục chinh phục những thành công mới.",
        rating: 5,
        link: "cart.html"
    },
    5: {
        title: "Trung Nguyên Legend Cappuccino Hazelnut",
        image: "assets/img/products/legend.jpg",
        price: "75.000 ₫",
        description: "Đặc điểm:Cà phê hòa tan Cappuccino hương vị hạt dẻ ấm nồng, Lần đầu tiên tại Việt Nam, duy nhất chỉ có ở Trung Nguyên.",
        rating: 5,
        link: "cart.html"
    },

    6: {
        title: "Cà phê House Blend - 500gr",
        image: "assets/img/products/rang1.jpg",
        price: "108.000 ₫",
        description: "Đặc điểm: Mùi thơm đặc trưng, vị đậm đà. Hương thơm nồng nàn khó quên. Thích hợp với việc sử dụng trong gia đình hoặc làm quà tặng cho người thân, bạn bè.",
        rating: 5,
        link: "cart.html"
    },
    7: {
        title: "Cà phê I (Khát vọng) - 500gr",
        image: "assets/img/products/rang2.jpg",
        price: "96.000 ₫",
        description: "Đặc điểm: Cà phê Trung Nguyên I với màu nước nâu đậm. Hương thơm nồng. Vị đậm đà đặc trưng. Thích hợp cho những người có gu uống cà phê đậm.",
        rating: 5,
        link: "cart.html"
    },
    8: {
        title: "Cà phê Sáng tạo Arabica 1 - 340gr",
        image: "assets/img/products/rang3.jpg",
        price: "78.000 ₫",
        description: "Đặc tính: Nước pha màu nâu cánh gián đậm. Mùi thơm dịu nhẹ. Vị đậm đà. Rất ngon khi với đá lạnh hoặc cà phê đen.",
        rating: 5,
        link: "cart.html"
    },
    9: {
        title: "Cà phê Sức sống ( Nâu) - 500gr",
        image: "assets/img/products/rang4.jpg",
        price: "133.500 ₫",
        description: "Đặc điểm: Mùi hương thơm nồng quyến rũ. Vị đậm đà đặc trưng. Công nghệ chế biến cà phê hàng đầu thế giới và bí quyết không thể sao chép.",
        rating: 5,
        link: "cart.html"
    },
    10: {
        title: "Cà phê Sáng tạo Arabica 5 - 340gr",
        image: "assets/img/products/rang5.jpg",
        price: "150.000 ₫",
        description: "Đặc tính: Nước pha màu nâu cánh gián đậm. Mùi thơm đặc trưng. Vị êm nhẹ và ít đắng, mùi thơm. Ngon hơn khi dùng chung với sữa.",
        rating: 3,
        link: "cart.html"
    },
    12: {
        title: "Cà phê G7 3in1 - Hộp 18 sticks 16gr",
        image: "assets/img/products/tanG73in1jpg",
        price: "60.000 ₫",
        description: "Đặc điểm:Cà phê G7 3in1 mang đến sự tiện lợi cho người sử dụng: bạn không mất nhiều thời gian nhưng vẫn có được ly cà phê với hương vị đậm đà, quyến rũ.",
        rating: 5,
        link: "cart.html"
    },
    13: {
        title: "Trung Nguyên Legend Cappuccino Coconut",
        image: "assets/img/products/tanLegendcoconut.jpg",
        price: "75.000 ₫",
        description: "Đặc điểm:Cà phê hòa tan Cappuccino hương vị dừa, Lần đầu tiên tại Việt Nam, duy nhất chỉ có ở Trung Nguyên.",
        rating: 4,
        link: "cart.html"
    },
    14: {
        title: "Cà phê G7 3in1 - Bịch 50 sticks 16gr",
        image: "assets/img/products/tanG73in1_2.jpg",
        price: "160.500 ₫",
        description: "Đặc điểm:Cà phê G7 3in1 mang đến sự tiện lợi cho người sử dụng, bạn không mất nhiều thời gian nhưng vẫn có được ly cà phê với hương vị đậm đà, quyến rũ.",
        rating: 3,
        link: "cart.html"
    },
    15: {
        title: "Trung Nguyên Legend Classic hộp 12 stick",
        image: "assets/img/products/tanClassic.jpg",
        price: "45.000 ₫",
        description: "Dựa trên nền tảng hương vị của Cà phê G7, cà phê Legend Classic sử dụng công nghệ Nano làm cho hương vị cà phê thêm tươi mới.",
        rating: 5,
        link: "cart.html"
    },
    16: {
        title: "Ly Libbey Pinnacle Beverage 2532",
        image: "assets/img/products/ly1.jpg",
        price: "20.000 ₫",
        description: "Sản phẩm Ly Libbey Pinnacle Beverage 2532 được thiết kế độc đáo và tinh tế, thích hợp cho đồ uống lạnh, nước trái cây…",
        rating: 5,
        link: "cart.html"
    },
    17: {
        title: "Luminarc Highball 28 - J4508 màu Hồng",
        image: "assets/img/products/ly2.jpg",
        price: "25.000 ₫",
        description: "Ly thủy tinh Luminarc Highball 28 - J4508 màu Hồng chuyên dụng pha cà phê, thích hợp sử dụng trong gia đình, quầy bar, quán cà phê hoặc nhà hàng.",
        rating: 5,
        link: "cart.html"
    },
    18: {
        title: "Luminarc Highball 28 - J4506 màu xanh",
        image: "assets/img/products/ly3.jpg",
        price: "25.000 ₫",
        description: "Luminarc Highball 28 - J4506 màu xanh chuyên dụng pha cà phê, thích hợp sử dụng trong gia đình, quầy bar, quán cà phê hoặc nhà hàng.",
        rating: 3,
        link: "cart.html"
    },
    19: {
        title: "Luminarc màu hồng J5388",
        image: "assets/img/products/ly4.jpg",
        price: "20.000 ₫",
        description: "Luminarc màu hồng J5387 thích hợp đựng nước ép, sinh tố. Dùng trong nhà hà,bar, quán cà phê.",
        rating: 5,
        link: "cart.html"
    },
    20: {
        title: "Bộ Tách + Dĩa Espresso gốm Bát Tràng men đồng",
        image: "assets/img/products/ly5.jpg",
        price: "70.000 ₫",
        description: "Bộ Tách + Dĩa Espresso gốm Bát Tràng men đồng gồm một tách và một đĩa lót, được thiết kế thích hợp với việc dùng uống cà phê espresso.",
        rating: 5,
        link: "cart.html"
    },
    21: {
        title: "Hộp quà Tết Cafe G7 Gold 2025",
        image: "assets/img/products/gift_G7.jpg",
        price: "319.000 ₫",
        description: "Bộ Tách + Dĩa Espresso gốm Bát Tràng men đồng gồm một tách và một đĩa lót, được thiết kế thích hợp với việc dùng uống cà phê espresso.",
        rating: 5,
        link: "cart.html"
    },
    22: {
        title: "Bộ pha cafe gỗ V60 1 phễu YOLO TW",
        image: "assets/img/products/machine1.jpg",
        price: "70.000 ₫",
        description: "Bộ dụng cụ pha cà phê thủ công một phểu chiết xuất bằng giấy lọc V60. Sản phẩm chế tác thủ công độc đáo với khung giá đỡ được lắp ghép bằng khớp nối nhôm hợp kim và đế gỗ thông tự nhiên.",
        rating: 5,
        link: "cart.html"
    },
    23: {
        title: "Cà phê Phin giấy Americano",
        image: "assets/img/products/phingiay.jpg",
        price: "133.000 ₫",
        description: "Tuyệt phẩm Cà Phê Phin giấy Trung Nguyên Legend Americano với hương thơm dịu, vị mạnh mẽ của loại cà phê mang âm hưởng và khí chất của những chàng Cowboy vừa thanh thoát vừa lãng mạn làm say lòng biết bao người thưởng thức.",
        rating: 4,
        link: "cart.html"
    },
    24: {
        title: "Máy pha cà phê tự động P-EMIC PT102",
        image: "assets/img/products/machine2.jpg",
        price: "70.000 ₫",
        description: "Bộ Tách + Dĩa Espresso gốm Bát Tràng men đồng gồm một tách và một đĩa lót, được thiết kế thích hợp với việc dùng uống cà phê espresso.",
        rating: 5,
        link: "cart.html"
    },
    25: {
        title: "Davinci - Bột nền pha chế Frappease 1.5kg",
        image: "assets/img/products/phache.jpg",
        price: "335.000 ₫",
        description: "Bộ Tách + Dĩa Espresso gốm Bát Tràng men đồng gồm một tách và một đĩa lót, được thiết kế thích hợp với việc dùng uống cà phê espresso.",
        rating: 5,
        link: "cart.html"
    },
    26: {
        title: "Cà phê Drip - Arabica Robusta hạt số 2 - 250gr",
        image: "assets/img/products/hat.jpg",
        price: "70.000 ₫",
        description: "Đặc điểm: Cà phê hạt xay Drip - Arabica Robusta khi pha có màu đen nhạt. Mùi thơm nhẹ, vị êm và hơi đắng",
        rating: 5,
        link: "cart.html"
    },
};

// Khi nhấn vào nút "Xem nhanh"
document.querySelectorAll('.xem-nhanh-btn').forEach(button => {
    button.addEventListener('click', function () {
        const productId = this.getAttribute('data-id');
        const product = products[productId];

        if (product) {
            // Cập nhật nội dung modal
            document.getElementById('product-image').src = product.image;
            document.getElementById('product-title').textContent = product.title;
            document.getElementById('product-price').textContent = product.price;
            document.getElementById('product-description').textContent = product.description;
            document.getElementById('product-stars').textContent = `${product.rating} Stars`;
            document.getElementById('buy-now-link').href = product.link;

            // Tạo rating
            const ratingContainer = document.getElementById('product-rating');
            ratingContainer.innerHTML = ''; // Xóa các ngôi sao cũ
            for (let i = 1; i <= 5; i++) {
                const star = document.createElement('i');
                star.className = `fa fa-star ${i <= product.rating ? 'active' : ''}`;
                ratingContainer.appendChild(star);
            }

            // Hiển thị modal
            $('#quickViewModal').modal('show');
        }

    });
});
