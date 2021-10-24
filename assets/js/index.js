// Thanks form
let thanksform = document.getElementById("thanksform");
let thanksclose = document.getElementsByClassName("thanks__close")[0];
thanksclose.onclick = function () {
    thanks.style.display = "none";
};
window.onclick = function (event) {
    if (event.target == thanksform) {
        thanksform.style.display = "none";
    }
};

// Request form
let sendTelegramMessage = (msg) => {
    fetch(
        `https://api.telegram.org/bot1704062891:AAG7tp-6lh7tffiPnz-ID8-mqEmbbowa3IE/sendMessage`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                text: msg,
                chat_id: "-575450179",
            }),
        }
    ).then((res) => {
        console.log("message sent! resp:", res.json());
    });
};

document
    .getElementById("request__form")
    .addEventListener("submit", function sendform(e) {
        e.preventDefault();
        let email = document.getElementById("email").value;
        let name = document.getElementById("name").value;
        let tel = document.getElementById("tel").value;
        sendTelegramMessage(`Email: ${email}, Имя: ${name}, Телефон: ${tel}`);
        thanks.style.display = "block";
    });

// Slider
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        items: 3,
        margin: 140,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        stagePadding: 100,
        dots: false,
        nav: true,
        navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>',
        ],
        navContainer: "#customNav",
        responsive: {
            // > 0
            0: {
                items: 1,
                margin: 70,
                stagePadding: 40,
            },
            // > 1000
            1000: {
                items: 2,
                margin: 140,
                stagePadding: 130,
            },
            // > 1400
            1400: {
                margin: 140,
                stagePadding: 100,
            },
        },
    });
});

// Button-menu
let buttonnonebtn = document.getElementById("none_btn");
let buttonmainbtn = document.getElementById("main_btn");
let buttonclosebtn = document.getElementById("close_btn");
buttonmainbtn.onclick = function () {
    buttonnonebtn.style.display = "grid";
    buttonmainbtn.style.display = "none";
};
buttonclosebtn.onclick = function () {
    buttonnonebtn.style.display = "none";
    buttonmainbtn.style.display = "flex";
};

// Кнопка наверх
let footerbtn = document.getElementById("footer-btn");
footerbtn.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

// Верхняя кнопка
let topbtn = document.getElementById("top_btn");
let services = document.getElementById("services");
if (topbtn) {
    topbtn.onclick = function () {
        services.scrollIntoView({ behavior: "smooth" });
    };
}

// Бургер-меню
$(document).ready(function () {
    $(".burger-menu__toggle").click(function () {
        $(this).toggleClass("active");
        $(".burger-menu__list").slideToggle(300, function () {
            if ($(this).css("display") === "none") {
                $(this).removeAttr("style");
            }
        });
    });
});

$(document).ready(function () {
    $(".arrow_1").click(function () {
        $(this).toggleClass("active");
        $(".burger-submenu__list_1").slideToggle(300, function () {
            if ($(this).css("display") === "none") {
                $(this).removeAttr("style");
            }
        });
    });
});

$(document).ready(function () {
    $(".arrow_2").click(function () {
        $(this).toggleClass("active");
        $(".burger-submenu__list_2").slideToggle(300, function () {
            if ($(this).css("display") === "none") {
                $(this).removeAttr("style");
            }
        });
    });
});
