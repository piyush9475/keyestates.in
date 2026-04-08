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
    // 📄 OPEN POPUP (ALL BUTTONS)
    // ===============================
    $("#downloadBrochureBtn, #stickyDownloadBtn").click(function () {
        $("#callbackPopup").css("display", "flex");
        $("#popupForm").attr("data-type", "brochure");
    });

    $("#downloadPaymentBtn").click(function () {
        $("#callbackPopup").css("display", "flex");
        $("#popupForm").attr("data-type", "payment");
    });

    $("#downloadFloorBtn").click(function () {
        $("#callbackPopup").css("display", "flex");
        $("#popupForm").attr("data-type", "floor");
    });

    $("#instantCallbackBtn").click(function () {
        $("#callbackPopup").css("display", "flex");
        $("#popupForm").attr("data-type", "callback");
    });

    // ===============================
    // ❌ CLOSE POPUP
    // ===============================
    $(".close-popup").click(function () {
        $("#callbackPopup").hide();
    });

    $(window).click(function (e) {
        if ($(e.target).is("#callbackPopup")) {
            $("#callbackPopup").hide();
        }
    });

    // ===============================
    // 🚀 POPUP FORM SUBMIT
    // ===============================
    $("#popupForm").submit(function (e) {
        e.preventDefault();

        let name = $("#popup_name").val().trim();
        let email = $("#popup_email").val().trim();
        let mobile = $("#popup_mobile").val().trim();

        if (!name || !mobile) {
            alert("Name and Mobile required");
            return;
        }

        if (!/^[0-9]{10}$/.test(mobile)) {
            alert("Enter valid 10 digit number");
            return;
        }

        let type = $("#popupForm").attr("data-type") || "brochure";

        let fileURL = "assets/brochure/dtc-downtown-brochure.pdf";

        if (type === "payment") {
            fileURL = "assets/brochure/payment-schedule.pdf";
        } else if (type === "floor") {
            fileURL = "assets/brochure/floor-plans.pdf";
        }

        let message = `New Request%0A
Project: DTC Downtown%0A
Name: ${name}%0A
Email: ${email}%0A
Mobile: ${mobile}%0A
Location: ${userLocation}`;

        // WhatsApp
        window.open(`https://wa.me/919875329416?text=${message}`, "_blank");

        // PDF open
        setTimeout(function () {
            window.open(fileURL, "_blank");
        }, 800);

        $("#callbackPopup").hide();
        $("#popupForm")[0].reset();
    });

    // ===============================
    // 📱 STICKY BAR SHOW
    // ===============================
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $("#mobileStickyBar").addClass("show");
        } else {
            $("#mobileStickyBar").removeClass("show");
        }
    });
    // ===============================
// 📖 READ MORE BUTTON
// ===============================
$("#readMoreBtn").click(function () {

    let moreContent = $("#moreContent");

    if (moreContent.is(":visible")) {
        moreContent.slideUp();
        $(this).text("Read More");
    } else {
        moreContent.slideDown();
        $(this).text("Read Less");
    }

});

});
