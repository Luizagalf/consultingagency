// Thanks form
var thanks = document.getElementById("thanksform");
var btn = document.getElementById("thanks__btn");
var span = document.getElementsByClassName("thanks__close")[0];
span.onclick = function () {
	thanks.style.display = "none";
}
window.onclick = function (event) {
	if (event.target == thanks) {
		thanks.style.display = "none";
	}
}

// Request form
const sendTelegramMessage = (msg) => {
    fetch(`https://api.telegram.org/bot1704062891:AAG7tp-6lh7tffiPnz-ID8-mqEmbbowa3IE/sendMessage`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            },
        body: JSON.stringify({
            text: msg, 
            chat_id: "-575450179"
		}),
    }).then(res => {
        console.log("message sent! resp:", res.json());
    })
};

document.getElementById("request__form").addEventListener("submit", 
	function sendform(e) {
		e.preventDefault();
		var email = document.getElementById("email").value;
		var name = document.getElementById("name").value;
		var tel = document.getElementById("tel").value;
		sendTelegramMessage(`Email: ${email}, Имя: ${name}, Телефон: ${tel}`)
		thanks.style.display = "block";
		console.log(email, name, tel);
})


// Slider
$(document).ready(function() {
	$(".owl-carousel").owlCarousel({
		loop:true,
		items: 3,
		margin:140,
		autoplay:true,
	    autoplayTimeout:3000,
	    autoplayHoverPause:true,
		stagePadding: 100,
		dots: false,
		nav: true,
		navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
		navContainer: '#customNav',
		responsive: {
	    // > 0
	    0 : {
		  items: 1,
	      margin:70,
	      stagePadding: 40,
	    },
	    // > 1000
	    1000 : {
			items: 2,
	    	margin:140,
	    	stagePadding: 130,
	    },
		// > 1400
	    1400 : {
	    	margin:140,
	    	stagePadding: 100,
	    }
		}
	});
});


// Button-menu
var none = document.getElementById("none_btn");
var btn = document.getElementById("main_btn");
var span = document.getElementById("close_btn");
btn.onclick = function () {
	none.style.display = "grid";
	btn.style.display = "none";
}
span.onclick = function () {
	none.style.display = "none";
	btn.style.display = "flex";
}

// Кнопка наверх
var footer_btn = document.getElementById("footer-btn");
footer_btn.onclick = function () {
	window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Верхняя кнопка
var top_btn = document.getElementById("top_btn");
var services = document.getElementById("services");
if (top_btn) {
	top_btn.onclick = function () {
		services.scrollIntoView({behavior: 'smooth' });
	}
	}

// Бургер-меню
$(document).ready(function() {
    $(".burger-menu__toggle").click(function() {
      $(this).toggleClass("active");
      $('.burger-menu__list').slideToggle(300, function(){
        if($(this).css('display') === "none"){
          $(this).removeAttr('style');
        }
      });
    });
  });

$(document).ready(function() {
    $(".arrow_1").click(function() {
      $(this).toggleClass("active");
      $('.burger-submenu__list_1').slideToggle(300, function(){
        if($(this).css('display') === "none"){
          $(this).removeAttr('style');
        }
      });
    });
  });

$(document).ready(function() {
    $(".arrow_2").click(function() {
      $(this).toggleClass("active");
      $('.burger-submenu__list_2').slideToggle(300, function(){
        if($(this).css('display') === "none"){
          $(this).removeAttr('style');
        }
      });
    });
  });
