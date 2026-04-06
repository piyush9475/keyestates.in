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
    // 🔢 ONLY NUMBERS IN MOBILE INPUT
    // ===============================
    $("#mobile").on("input", function () {
        this.value = this.value.replace(/[^0-9]/g, '');
    });

    // ===============================
    // ⛔ SPAM PROTECTION TIMER
    // ===============================
    let lastSubmitTime = 0;

    // ===============================
    // 🚀 FORM SUBMIT → WHATSAPP
    // ===============================
    $("#whatsappForm").on("submit", function (e) {
        e.preventDefault();

        let now = Date.now();

        // ⛔ Prevent multiple fast submits
        if (now - lastSubmitTime < 5000) {
            alert("Please wait a few seconds before submitting again.");
            return;
        }

        let name = $("#name").val().trim();
        let email = $("#email").val().trim();
        let mobile = $("#mobile").val().trim();

        // ✅ At least one required
        if (name === "" && email === "" && mobile === "") {
            alert("Please enter Name, Email, or Mobile");
            return;
        }

        // ✅ Mobile must be exactly 10 digits (if filled)
        if (mobile !== "" && !/^[0-9]{10}$/.test(mobile)) {
            alert("Mobile number must be exactly 10 digits");
            return;
        }

        // 🤖 Hidden bot trap
        if ($("#website").length && $("#website").val() !== "") {
            return;
        }

        // ===============================
        // 💬 WHATSAPP MESSAGE
        // ===============================
        let message = `New Callback Request%0A
Project: Keyestates Horizon%0A
Name: ${name}%0A
Email: ${email}%0A
Mobile: ${mobile}%0A
Location: ${userLocation}`;

        let whatsappURL = `https://wa.me/919875329416?text=${message}`;

        lastSubmitTime = now;

        window.open(whatsappURL, "_blank");
    });

    // ===============================
    // 🖼️ IMAGE GALLERY (OPTIONAL)
    // ===============================
    if ($.fn.magnificPopup) {
        $('.popup-gallery').magnificPopup({
            delegate: 'a',
            type: 'image',
            gallery: { enabled: true }
        });
    }

});
