$(document).ready(function () {

    // ===============================
    // 📍 USER LOCATION
    // ===============================
    let userLocation = "Not detected";

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function (position) {
                userLocation = `https://maps.google.com/?q=${position.coords.latitude},${position.coords.longitude}`;
            },
            function () {
                userLocation = "Permission denied";
            }
        );
    }

    // ===============================
    // 🔢 MOBILE VALIDATION
    // ===============================
    $("#mobile, #popup_mobile").on("input", function () {
        this.value = this.value.replace(/[^0-9]/g, '');
    });

    // ===============================
    // ⛔ SPAM CONTROL
    // ===============================
    let lastSubmitTime = 0;

    // ===============================
    // 🚀 MAIN FORM SUBMIT
    // ===============================
    $("#whatsappForm").on("submit", function (e) {
        e.preventDefault();

        let now = Date.now();
        if (now - lastSubmitTime < 5000) {
            alert("Please wait before submitting again.");
            return;
        }

        let name = $("#name").val().trim();
        let email = $("#email").val().trim();
        let mobile = $("#mobile").val().trim();

        if (!name || !mobile) {
            alert("Name and Mobile are required");
            return;
        }

        if (!/^[0-9]{10}$/.test(mobile)) {
            alert("Enter valid 10-digit mobile number");
            return;
        }

        sendData(name, email, mobile, "DTC Downtown");
        lastSubmitTime = now;
    });

    // ===============================
    // 🚀 POPUP FORM SUBMIT
    // ===============================
    $("#popupForm").on("submit", function (e) {
        e.preventDefault();

        let name = $("#popup_name").val().trim();
        let email = $("#popup_email").val().trim();
        let mobile = $("#popup_mobile").val().trim();

        if (!name || !mobile) {
            alert("Name and Mobile are required");
            return;
        }

        if (!/^[0-9]{10}$/.test(mobile)) {
            alert("Enter valid 10-digit mobile number");
            return;
        }

        sendData(name, email, mobile, "DTC Downtown");

        $("#callbackPopup").fadeOut();
    });

    // ===============================
    // 📤 COMMON FUNCTION
    // ===============================
    function sendData(name, email, mobile, project) {

        let message = `New Callback Request%0A
Project: ${project}%0A
Name: ${name}%0A
Email: ${email}%0A
Mobile: ${mobile}%0A
Location: ${userLocation}`;

        // ✅ GOOGLE SHEET
        fetch("https://script.google.com/macros/s/AKfycbzOLmU_nxV4Rodmvc9wC0ABBs94-ZVnteLoqK-rmCxUMzv1oIG7eNZMSN18mDAUY4UG/exec", {
            method: "POST",
            body: JSON.stringify({
                name: name,
                email: email,
                mobile: mobile,
                project: project,
                location: userLocation,
                date: new Date().toLocaleString()
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(data => console.log("Saved to sheet:", data))
        .catch(err => console.log("Sheet error:", err));

        // ✅ WHATSAPP
        let whatsappURL = `https://wa.me/919875329416?text=${message}`;
        window.open(whatsappURL, "_blank");
    }

    // ===============================
    // 🪟 POPUP CONTROL
    // ===============================
    $("#instantCallbackBtn").on("click", function () {
        $("#callbackPopup").css("display", "flex");
    });

    $(".close-popup").on("click", function () {
        $("#callbackPopup").fadeOut();
    });

    $(window).on("click", function (e) {
        if ($(e.target).is("#callbackPopup")) {
            $("#callbackPopup").fadeOut();
        }
    });

});
// ===============================
// 🏢 FLOOR PLAN BUTTON → POPUP
// ===============================
$("#downloadFloorBtn").on("click", function () {
    $("#callbackPopup").css("display", "flex");
    $("#popupForm").attr("data-type", "floor");
});


// ===============================
// 🚀 POPUP FORM SUBMIT (WHATSAPP + BROCHURE)
// ===============================
$("#popupForm").on("submit", function (e) {
    e.preventDefault();

    let name = $("#popup_name").val().trim();
    let email = $("#popup_email").val().trim();
    let mobile = $("#popup_mobile").val().trim();

    // ✅ VALIDATION
    if (!name || !email || !mobile) {
        alert("All fields are required");
        return;
    }

    if (!/^[0-9]{10}$/.test(mobile)) {
        alert("Enter valid 10-digit mobile number");
        return;
    }

    // 📍 LOCATION (if already defined globally)
    let location = typeof userLocation !== "undefined" ? userLocation : "Not detected";

    // ===============================
    // 💬 WHATSAPP MESSAGE
    // ===============================
    let message = `New Brochure Request%0A
Project: DTC Downtown%0A
Name: ${name}%0A
Email: ${email}%0A
Mobile: ${mobile}%0A
Location: ${location}`;

    let whatsappURL = `https://wa.me/919875329416?text=${message}`;

    // ===============================
    // 🚀 OPEN WHATSAPP
    // ===============================
    window.open(whatsappURL, "_blank");

    // ===============================
    // 📄 OPEN BROCHURE AFTER 1 SEC
    // ===============================
    setTimeout(() => {
        window.open("assets/brochure/dtc-downtown-brochure.pdf", "_blank");
    }, 1000);

    // ===============================
    // ❌ CLOSE POPUP
    // ===============================
    $("#callbackPopup").fadeOut();

    // OPTIONAL: reset form
    $("#popupForm")[0].reset();
});
// ===============================
// 📖 READ MORE TOGGLE
// ===============================
$("#readMoreBtn").on("click", function () {
    let moreContent = $("#moreContent");

    if (moreContent.is(":visible")) {
        moreContent.slideUp();
        $(this).text("Read More");
    } else {
        moreContent.slideDown();
        $(this).text("Read Less");
    }
});
// ===============================
// 💰 PAYMENT BUTTON → POPUP
// ===============================
$("#downloadPaymentBtn").on("click", function () {
    $("#callbackPopup").css("display", "flex");

    // Mark type (important)
    $("#popupForm").attr("data-type", "payment");
});
$("#popupForm").off("submit").on("submit", function (e) {
    e.preventDefault();

    let name = $("#popup_name").val().trim();
    let email = $("#popup_email").val().trim();
    let mobile = $("#popup_mobile").val().trim();

    if (!name || !email || !mobile) {
        alert("All fields are required");
        return;
    }

    if (!/^[0-9]{10}$/.test(mobile)) {
        alert("Enter valid 10-digit mobile number");
        return;
    }

    let type = $("#popupForm").attr("data-type") || "brochure";

    let fileURL = "";
    let label = "";

    if (type === "payment") {
        fileURL = "assets/brochure/payment-schedule.pdf";
        label = "Payment Schedule";
    } 
    else if (type === "floor") {
        fileURL = "assets/brochure/floor-plans.pdf";
        label = "Floor Plans";
    } 
    else {
        fileURL = "assets/brochure/dtc-downtown-brochure.pdf";
        label = "Brochure";
    }

    // WhatsApp message
    let message = `New ${label} Request%0A
Project: DTC Downtown%0A
Name: ${name}%0A
Email: ${email}%0A
Mobile: ${mobile}`;

    window.open(`https://wa.me/919875329416?text=${message}`, "_blank");

    // Open file
    setTimeout(() => {
        window.open(fileURL, "_blank");
    }, 1000);

    $("#callbackPopup").fadeOut();
    $("#popupForm")[0].reset();
});
// ===============================
// 📱 SHOW BAR AFTER SCROLL
// ===============================
$(window).on("scroll", function () {
    if ($(this).scrollTop() > 300) {
        $("#mobileStickyBar").addClass("show");
    } else {
        $("#mobileStickyBar").removeClass("show");
    }
});


// ===============================
// 📄 DOWNLOAD BUTTON → POPUP
// ===============================
$("#stickyDownloadBtn").on("click", function () {
    $("#callbackPopup").css("display", "flex");
    $("#popupForm").attr("data-type", "brochure");
});


// ===============================
// ✨ AUTO HIGHLIGHT (AFTER 5 SEC)
// ===============================
setTimeout(() => {
    $("#stickyDownloadBtn").css({
        "box-shadow": "0 0 15px #ff0033",
        "animation": "pulse 1s infinite"
    });
}, 5000);
