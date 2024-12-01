$('#banner').owlCarousel({
loop:true,	// cho lap lại
items:1,	// xuất hiện 1 ảnh thôi
smartSpeed:100,   	// tốc độ thay đổi ảnh
autoplay:true,		// cho phép tự động chạy
autoplayTimeout:500,  // thời gian chờ khi chuyển ảnh khi chạy tự động
nav:false,	// cho xuất hiện bộ nút tới lui 
})
$(document).ready(function() {
  $('#serv').owlCarousel({
    nav: true,              // Hiển thị các nút điều hướng (prev, next)
    loop: true,             // Bật tính năng loop (quay vòng)
    autoplay: true,         // Tự động chạy slideshow
    autoplayTimeout: 5000,  // Thời gian giữa các slide (5 giây)
    autoplayHoverPause: true, // Dừng autoplay khi hover vào slide
    smartSpeed: 100,        // Tốc độ thay đổi ảnh
    margin: 100,            // Khoảng cách giữa các item
    responsive: {
      0: { items: 1 },      // 1 item cho màn hình nhỏ
      600: { items: 1 },    // 1 item cho màn hình từ 600px
      1000: { items: 1 }    // 1 item cho màn hình rất lớn
    }
  });
});
$('#serv1').owlCarousel({
    nav:true,
    loop:true,
    smartSpeed:100,   	// tốc độ thay đổi ảnh
autoplay:true,		// cho phép tự động chạy
autoplayTimeout:500,
margin:100,
responsive:{
0:{
items:1
},
600:{
items:1
},
1000:{
items:1
}
}
})
$('#serv2').owlCarousel({
    nav:true,
    loop:true,
    smartSpeed:100,   	// tốc độ thay đổi ảnh
autoplay:true,		// cho phép tự động chạy
autoplayTimeout:500,
margin:100,
responsive:{
0:{
items:1
},
600:{
items:1
},
1000:{
items:1
}
}
})

$('#serv3').owlCarousel({
    nav:true,
    loop:true,
    smartSpeed:1000,   	// tốc độ thay đổi ảnh
autoplay:true,		// cho phép tự động chạy
autoplayTimeout:2000,
margin:10,
responsive:{
0:{
items:1
},
800:{
items:2
},
1200:{
items:3
}
}
})

$('#serv4').owlCarousel({
    nav:true,
    loop:true,
    smartSpeed:1000,   	// tốc độ thay đổi ảnh
autoplay:true,		// cho phép tự động chạy
autoplayTimeout:2000,
margin:10,
responsive:{
0:{
items:1
},
800:{
items:2
},
1200:{
items:3
}
}
})

$('#serv5').owlCarousel({
    nav:true,
    loop:true,
    smartSpeed:1000,   	// tốc độ thay đổi ảnh
autoplay:true,		// cho phép tự động chạy
autoplayTimeout:2000,
margin:10,
responsive:{
0:{
items:1
},
800:{
items:2
},
1200:{
items:3
}
}
})