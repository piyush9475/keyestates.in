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
